"use client";

import { Message } from "@/components/Messaging/Message";
import { Stack, Group, Container, Flex, Textarea, Button, ScrollArea } from '@mantine/core';
import React, { useEffect, useState, useRef } from 'react';
import { useChannel } from "ably/react";
import { useChat } from "@/contexts/chatContext";
import { ChatProps, MessageProps } from "@/accordTypes";
import { createHash } from 'crypto';
import { useUser } from '@clerk/nextjs';

const generateHash = (input: string) => {
  return createHash('sha256').update(input).digest('hex');
};

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
export function MessagingInterface({ senderUsername, senderID, receiverIDs, privateChat, onMessageExchange }: ChatProps) {
  const { user } = useUser();
  const [userProfileURL, setUserProfileURL] = useState<string>(''); 

  useEffect(() => {
    if (user && user.imageUrl) {
      // Set sender to user's username if user exists and username is not null/undefined
      setUserProfileURL(user.imageUrl);
    }
  }, [user]); // Dependency array ensures this runs whenever `user` changes

  let messageEnd: HTMLDivElement | null = null;
  const inputBoxRef = useRef(null);
  const messageEndRef = React.useRef<HTMLDivElement>(null);; // Updated to use useRef

  const [messageText, setMessageText] = useState(""); // messageText is bound to a textarea element where messages can be typed.
  const [receivedMessages, setReceivedMessages] = useState<MessageProps[]>([]); // receivedMessages stores the on-screen chat history.
  const memberIDs = [senderID, ...receiverIDs] // / To allow for group chats, we are creating an array that contains the sender and the receivers.
  memberIDs.sort(); // CRITICAL: Sorts in-place. We need to sort the key to counteract the swapping mechanism where sender and receiver becomes flipped.
  console.log(memberIDs);
  // Retrieving the chat history and update function from the context
  const { chatHistory, updateChatHistory } = useChat();
  const messageTextIsEmpty = messageText.trim().length === 0; // messageTextIsEmpty is used to disable the send button when the textarea is empty.

  // useChannel is a react-hook API for subscribing to messages from an Ably channel.
  // You provide it with a channel name and a callback to be invoked whenever a message is received.
  // Both the channel instance and the Ably JavaScript SDK instance are returned from useChannel.

  const rawChannelKey = `chat:${memberIDs.join(",")}`;
  const channelKey = generateHash(rawChannelKey); // Generating a SHA-256 hash of a channel to compress it and also enforce security, privacy and uniqueness :D
  const { channel, ably } = useChannel(channelKey, (messageData) => {
    // This callback gets executed for any message received on this channel.
    // If the sender is the current user, don't add the message to receivedMessages because
    // it's already added to the state when the user sends the message.
    if (messageData.name === senderUsername) {
      return;
    }
  
    // For any message received from others, update the state.
    const { text, date } = messageData.data;
    const incomingMessage: MessageProps = {
      username: messageData.name,
      message: text,
      date: date,
      connectionId: messageData.clientId,
      userProfileURL: messageData.data.userProfileURL
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
      } else if (response.status === 404) {
        console.error("Chat history not found");
      } else if (response.status === 500) {
        console.error("Error fetching message history");
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
      username: senderUsername,
      message: messageText,
      date: dateStr,
      userProfileURL: userProfileURL
    };
  
    // Publish the message to the Ably channel. This is how we send messages to other users.
    // We don't specify who the message is for as the way we handle who receives messages is by subscribing certain users to certain channels.
    // That means when we publish a message to a channel, we need to subscribe the other user who we are targeting to that channel.
    await channel.publish({
      name: senderUsername,
      data: { text: messageText, date: dateStr, userProfileURL: userProfileURL }
    });
  
    // Update the local state for the sender's UI. The message for the receiver
    // will be handled by the useChannel callback.
    setReceivedMessages(prevMessages => {
      const updatedHistory = [...prevMessages, outgoingMessage];
  
      // IMPORTANT: Every time a new message is sent, we are also overwriting the chat history in the database.
      // We are doing this to ensure that the chat history is always up to date.
      console.log("Is chat private?", privateChat);
      if (!privateChat) {
        try {
          fetch('/api/update-message-history', {
            method: 'POST', // We are sending messages to the server, so we need to use the POST method. Sensitive data.
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              channelKey: channelKey,
              messageHistory: updatedHistory,
              owner: senderUsername,
              memberIDs: memberIDs
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
          <Message username={message.username} message={message.message} firstMessage={true} date={message.date} userProfileURL={message.userProfileURL} />
        </Stack>
      );
    } else {
      // Clone the last element and its children to create a new instance before modifying.
      const lastElement = React.cloneElement(
        acc[acc.length - 1],
        {},
        React.Children.toArray(acc[acc.length - 1].props.children).concat(
          <Message key={index} username={message.username} message={message.message} date={message.date} userProfileURL={message.userProfileURL} />
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

  const messageLabel = receiverIDs.length > 1 ? `Message everyone in the group` : `Send a DM`;

  useEffect(() => {
    if (messageEndRef.current) {
      messageEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [receivedMessages]); // Scrolls when receivedMessages updates  

  return (
    <div className="messaging-container">
      <Stack justify="space-between" style={{ height: '100%' }}>
        {/* All the message components exist here */}
        <Flex component={ScrollArea}>{messages}</Flex>
        {/*
          Keeps the message box scrolled to the most recent message (the one on the bottom).
          This empty div is then scrolled into view whenever the component re-renders.
        */}
        <div ref={messageEndRef}></div>
          <form onSubmit={handleFormSubmission}>
            <Stack>
              <Group grow>
                <Textarea
                    ref={inputBoxRef}
                    placeholder={messageLabel}
                    autosize
                    minRows={1}
                    maxRows={10}
                    value={messageText}
                    onKeyDown={handleKeyPress}
                    onChange={(e) => setMessageText(e.target.value)}
                  />
              </Group>
            </Stack>
          </form>
      </Stack>
    </div>
  );
}