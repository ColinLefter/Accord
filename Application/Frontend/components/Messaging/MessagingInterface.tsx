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
  onMessageExchange: () => void; // Include in the props of MessagingInterface
}

/**
 * The MessagingInterface component manages and displays the chat interface, allowing users to send and receive messages.
 * It utilizes Ably's real-time messaging service for communication and maintains the chat history both locally and in MongoDB.
 *
 * Props:
 * - sender: The username of the user who is sending the message.
 * - receiver: The username of the user who is receiving the message.
 * - privateChat: A boolean indicating whether the chat is private.
 * - onMessageExchange: A callback function that is invoked whenever a message is sent or received, supporting end-to-end privacy features.
 *
 * The component listens for incoming messages via the Ably channel, maintains local message history state, and provides a UI for sending new messages.
 * It also interacts with backend APIs to fetch and update message history in MongoDB based on the chat's privacy settings.
 */
export function MessagingInterface({ sender, receiver, privateChat, onMessageExchange  }: MessagingInterfaceProps) {
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
  const { channel, ably } = useChannel(channelKey, (messageData) => {
    // This callback gets executed for any message received on this channel.
    // If the sender is the current user, don't add the message to receivedMessages because
    // it's already added to the state when the user sends the message.
    if (messageData.name === sender) {
      return;
    }
  
    // For any message received from others, update the state.
    const { text, date } = messageData.data;
    const incomingMessage: Message = {
      username: messageData.name,
      message: text,
      date: date,
      connectionId: messageData.clientId,
      data: text,
    };
  
    setReceivedMessages((prevMessages) => [...prevMessages, incomingMessage]);

    // IMPORTANT: Privacy feature.
    // Every time we send receive a message, we call this function to let the parent component know that a message has been received. End-to-end privacy.
    // This prevents jailbreaking the privacy feature by sending a message to a user and then having them switch the toggle off to capture the message history.
    onMessageExchange();
  });

  // IMPORTANT: We need to fetch chat history when the component mounts. This is how we do it. We always fetch from MongoDB.
  // In terms of the privacy toggle, if we refresh our page, we load from MongoDB. That means if the toggle was on, no data was sent.
  // Hence, data will effectively be "Wiped" if you refresh your page. This is a privacy feature.
  // It will, however, not be "Wiped" if you refresh your page and all the messages were sent while the toggle was off.
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
        const data = await response.json();
        if (data.messageHistory && data.messageHistory.length > 0) {
          setReceivedMessages(data.messageHistory);
        }
      } else {
        console.error('Failed to fetch message history from MongoDB.');
      }
    } catch (error) {
      console.error('Error fetching message history from MongoDB:', error);
    }
  };

  // Always fetch history from MongoDB.
    useEffect(() => {
      const fetchHistory = async () => {
        // Always try to fetch from MongoDB upon component mounting or updates related to channel and privateChat state
        await fetchMongoDBHistory();
      };
    
      fetchHistory().catch(console.error);
    }, [channel]); // Depend on the channel. If the channel changes, we need to fetch the history again. Reserved for future use when we target different users.

  // Responsible for publishing new messages.
  // It uses the Ably Channel returned by the useChannel hook, clears the input, and focuses on the textarea so that users can type more messages.
  /**
   * Publishes a new chat message to the Ably channel and updates local and remote message histories.
   * This function is triggered when the user sends a message, handling the publishing process,
   * updating local state, and potentially updating the message history stored in MongoDB.
   *
   * @param {string} messageText The text of the message to be sent.
   */
  const sendChatMessage = async (messageText: string) => {
    const now = new Date();
    const dateStr = `${now.getFullYear().toString().padStart(4, '0')}/${(now.getMonth() + 1).toString().padStart(2, '0')}/${now.getDate().toString().padStart(2, '0')} ${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;
  
    const outgoingMessage = {
      username: sender, // NOTE: user1 is temporarily hardcoded as we need to implement site-wide user authentication.
      message: messageText,
      date: dateStr,
      data: messageText,
    };
  
    // Publish the message to the Ably channel. This is how we send messages to other users.
    // We don't specify who the message is for as the way we handle who receives messages is by subscribing certain users to certain channels.
    // That means when we publish a message to a channel, we need to subscribe the other user who we are targeting to that channel.
    await channel.publish({
      name: sender,
      data: { text: messageText, date: dateStr }
    });
  
    // Update the local state for the sender's UI. The message for the receiver
    // will be handled by the useChannel callback.
    setReceivedMessages(prevMessages => {
      const updatedHistory = [...prevMessages, outgoingMessage];
  
      // IMPORTANT: Every time a new message is sent, we are also overwriting the chat history in the database.
      // We are doing this to ensure that the chat history is always up to date.
      if (!privateChat) {
        try {
          fetch('/api/update-message-history', {
            method: 'POST', // We are sending messages to the server, so we need to use the POST method. Sensitive data.
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              channelKey,
              messageHistory: updatedHistory,
              owner: "user1", // hard-coded until we implement site-wide user authentication
              members: ["user1", "user2"] // hard-coded until we implement site-wide user authentication
            }),
          });
        } catch (error) {
          console.error('Error updating message history:', error);
        }
      }
  
      return updatedHistory; // Update state with the latest messages.
    });
  
    onMessageExchange(); // IMPORTANT: We also call this message exchange feature every time we send a message. End-to-end privacy.
  
    setMessageText("");
    if (inputBoxRef.current) {
      (inputBoxRef.current as HTMLTextAreaElement).focus();
    }
  };  
  
  // This is triggered when the submit button is clicked and calls sendChatMessage, along with preventing a page reload.
  /**
   * Handles the form submission event when sending a message.
   * It prevents the default form submission behavior, calls sendChatMessage to publish the message,
   * and ensures the user interface reflects this action properly.
   *
   * @param {React.FormEvent<HTMLFormElement>} event The form submission event.
   */
  const handleFormSubmission = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    sendChatMessage(messageText);
  }

  // If a user presses the enter key, while there is text in the textarea, the sendCHatMessage fuction is triggered.
  /**
   * Triggers message sending when the Enter key is pressed in the message input box,
   * provided that the message text is not empty. It prevents the default action of adding
   * a new line to the text area, maintaining a single-line input for message sending.
   *
   * @param {React.KeyboardEvent<HTMLTextAreaElement>} event The keyboard event.
   */
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
        {/* All the message components exist here */}
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