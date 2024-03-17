"use client"

import { Message } from './Message';
import { Stack, Group, Container, Flex, Textarea, Button, ScrollArea } from '@mantine/core';
import React, { useEffect, useState, useRef } from 'react';
import { useChannel } from "ably/react";
import { useChat } from "@/contexts/chatContext";
import * as Ably from 'ably';

export interface Message {
  username: string,
  message: string,
  firstMessage?: boolean,
  date?: string,
  connectionId?: string,
  data?: string,
}

interface MessagingInterfaceProps {
  sender: string;
  receiver: string;
  privateChat: boolean;
}

export function MessagingInterface({ sender, receiver, privateChat }: MessagingInterfaceProps) {
  let inputBox = null;
  let messageEnd: HTMLDivElement | null = null;

  const [messageText, setMessageText] = useState(""); // messageText is bound to a textarea element where messages can be typed.
  const [receivedMessages, setReceivedMessages] = useState<Message[]>([]); // receivedMessages stores the on-screen chat history.

  // Retrieving the chat history and update function from the context
  const { chatHistory, updateChatHistory } = useChat();
  const messageTextIsEmpty = messageText.trim().length === 0; // messageTextIsEmpty is used to disable the send button when the textarea is empty.

  const inputBoxRef = useRef(null);

  // useChannel is a react-hook API for subscribing to messages from an Ably channel.
  // You provide it with a channel name and a callback to be invoked whenever a message is received.
  // Both the channel instance and the Ably JavaScript SDK instance are returned from useChannel.

  const channelKey = `chat:${[sender, receiver].sort().join(",")}`; // We must counteract the swapping mechanism by sorting the names alphabetically.
  console.log(channelKey)
  
  const { channel, ably } = useChannel(channelKey, (messageData) => { // IMPORTANT: the first parameter is the name of the channel we want to subscribe to.
    if (messageData.name === sender) {
      return; // Ignore messages sent by the sender
    }
  
    // Process and display messages sent by others
    const { text, date } = messageData.data;
    const incomingMessage: Message = {
      username: messageData.name,
      message: text,
      date: date,
      connectionId: messageData.clientId,
      data: text,
    };
    setReceivedMessages((prevMessages) => [...prevMessages, incomingMessage]);
  });

  // IMPORTANT: We need to fetch chat history when the component mounts. This is how we do it.
  useEffect(() => {
    const fetchMongoDBHistory = async () => {
      try {
        const response = await fetch('/api/get-message-history', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ channelKey }),
        });

        if (response.ok) {
          const { messageHistory } = await response.json();
          if (messageHistory && messageHistory.length > 0) {
            setReceivedMessages(messageHistory);
            return true; // History was successfully fetched and set from MongoDB.
          }
        }
        return false; // MongoDB fetch was not successful or returned no messages.
      } catch (error) {
        console.error('Error fetching message history from MongoDB:', error);
        return false;
      }
    };

    const fetchAblyHistory = async () => {
      const historyPage = await channel.history({ limit: 199 });
      const historyMessages = historyPage.items.map(item => ({
        username: item.name,
        message: item.data.text,
        date: item.data.date,
        connectionId: item.clientId,
        data: item.data.text,
      }));
      setReceivedMessages(historyMessages.reverse());
    };

    // Attempt to fetch from MongoDB first. If that fails, fetch from Ably.
    const fetchHistory = async () => {
      const fetchedFromMongoDB = await fetchMongoDBHistory();
      if (!fetchedFromMongoDB && channel) {
        await fetchAblyHistory();
      }
    };

    fetchHistory().catch(console.error);
  }, [channel]);

  // Responsible for publishing new messages.
  // It uses the Ably Channel returned by the useChannel hook, clears the input, and focuses on the textarea so that users can type more messages.
  const sendChatMessage = async (messageText: string) => {
    const now = new Date();
    const dateStr = `${(now.getFullYear()).toString().padStart(4, '0')}/${(now.getMonth() + 1).toString().padStart(2, '0')}/${now.getDate().toString().padStart(2, '0')} ${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;
  
    const outgoingMessage = {
      username: sender, // NOTE: user1 is temporarily hardcoded as we need to implement site-wide user authentication.
      message: messageText,
      date: dateStr,
      data: messageText,
    };
  
    // Publish the message to the Ably channel. This is how we send messages to other users.
    // We don't specify who the message is for as the way we handle who receives messages is by subscribing certain users to certain channels.
    // That means when we publish a message to a channel, we need to the subscribe the other user who we are targeting to that channel.
    channel.publish({
      name: sender,
      data: { text: messageText, date: dateStr }
    });
  
    // Update local state with new message, no need to fetch history again.
    setReceivedMessages(prevMessages => [...prevMessages, outgoingMessage]); // NOTE: The plan is to send the data to MongoDB when the user switches tab.

    // IMPORTANT: Every time a new message is sent, we are also overwriting the chat history in the database.
    // We are doing this to ensure that the chat history is always up to date.
    if (!privateChat) {
      try {
        const updatedHistory = [...receivedMessages, outgoingMessage];
        await fetch('/api/update-message-history', {
          method: 'POST', // We are sending messages to the server, so we need to use the POST method. Sensitive data.
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            channelKey,
            messageHistory: updatedHistory,
          }),
        });
      } catch (error) {
        console.error('Error updating message history:', error);
      }
    }
  
    setMessageText("");
    if (inputBoxRef.current) {
      (inputBoxRef.current as HTMLTextAreaElement).focus();
    }
  };
  
  // This is triggered when the submit button is clicked and calls sendChatMessage, along with preventing a page reload.
  const handleFormSubmission = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    sendChatMessage(messageText);
  }

  // If a user presses the enter key, while there is text in the textarea, the sendCHatMessage fuction is triggered.
  const handleKeyPress = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'Enter' && !event.shiftKey && !messageTextIsEmpty) {
      event.preventDefault(); // Prevent default to avoid line break in textarea.
      sendChatMessage(messageText);
    }
  };

  // Wow we need to construct the UI elements to display the messages.
  // We are mapping the received Ably messages into HTML span elements.
  // Group messages by username and construct UI elements to display the messages.
  let lastUsername = '';
  const messages = receivedMessages.reduce<JSX.Element[]>((acc, message, index) => {
    const isFirstMessage = message.username !== lastUsername;
    if (isFirstMessage) {
      // Start a new message group
      lastUsername = message.username;
      acc.push(
        <Stack key={index} gap="0" justify="flex-start">
          <Message username={message.username} message={message.message} firstMessage={true} date={message.date} />
        </Stack>
      );
    } else {
      // Clone the last element and its children to create a new instance before modifying.
      const lastElement = React.cloneElement(
        acc[acc.length - 1],
        {},
        React.Children.toArray(acc[acc.length - 1].props.children).concat(
          <Message key={index} username={message.username} message={message.message} date={message.date} />
        )
      );
  
      // Replace the last element with the updated one.
      acc[acc.length - 1] = lastElement;
    }
    return acc;
  }, []);
  
  useEffect(() => {
    if (messageEnd) {
      messageEnd.scrollIntoView({ behavior: 'smooth' });
    }
  }, [receivedMessages]);

  useEffect(() => {
    setReceivedMessages(chatHistory);
  }, [chatHistory]);

  return (
    <div className="messaging-container">

      <Stack justify="space-between" style={{ height: '100%' }}>
        {/* First loading the message history */}
        <Flex component={ScrollArea}>{messages}</Flex>
        {/*
          Keeps the message box scrolled to the most recent message (the one on the bottom).
          This empty div is then scrolled into view whenever the component re-renders.
        */}
        <div ref={(element) => { messageEnd = element; }}></div>
          <form onSubmit={handleFormSubmission}>
            <Stack>
              <Group grow>
                <Textarea
                    ref={inputBoxRef}
                    placeholder="Message @user2"
                    autosize
                    minRows={1}
                    maxRows={10}
                    value={messageText}
                    onKeyDown={handleKeyPress}
                    onChange={(e) => setMessageText(e.target.value)}
                  />
                  <Button type="submit" disabled={messageTextIsEmpty}>Send</Button>
              </Group>
            </Stack>
          </form>
      </Stack>
    </div>
  );
}