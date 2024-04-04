"use client";

import { Message } from "@/components/Messaging/Message";
import { Stack, Group, Container, Flex, Textarea, Button, ScrollArea } from '@mantine/core';
import React, { useEffect, useState, useRef } from 'react';
import { useChannel } from "ably/react";
import { useChat } from "@/contexts/chatContext";
import { ChatProps, MessageProps, DisplayedMessageProps } from "@/accordTypes";
import { createHash } from 'crypto';
import { useUser } from '@clerk/nextjs';

const generateHash = (input: string) => {
  return createHash('sha256').update(input).digest('hex');
};

/**
 * Provides a comprehensive chat interface for real-time messaging within the application. This component integrates with Ably's real-time messaging service to manage and display interactive chat functionalities, such as sending and receiving messages, maintaining chat history, and providing a user-friendly messaging UI. It supports both private and group chat modes, enabling dynamic conversation flows.
 *
 * Key Features:
 * - Real-time messaging powered by Ably.
 * - Local and MongoDB-backed chat history management.
 * - Dynamic UI for message input and display, with auto-scrolling to the latest message.
 * - End-to-end privacy features for secure communications.
 *
 * Props:
 * - senderUsername: Username of the message sender.
 * - senderID: Unique identifier of the message sender.
 * - receiverIDs: Array of identifiers for the message recipients, supporting group chat functionality.
 * - privateChat: Boolean flag to indicate whether the chat is private, affecting chat history management.
 * - onMessageExchange: Callback function triggered on message send or receive, facilitating additional privacy controls.
 *
 * The component's design ensures a seamless chat experience, with features like message grouping by sender, automatic scrolling to the most recent message, and a privacy-first approach to message history. It leverages the useChannel hook from Ably for subscribing to and publishing messages on designated channels, hashed for security and uniqueness.
 *
 * @param {ChatProps} props - The properties defining the chat's configuration and behavior, including details about the participants, privacy settings, and messaging callbacks.
 * @returns {JSX.Element} A fully interactive chat interface component, ready for integration into the application's messaging feature set.
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
  const [myAblyClientID, setMyAblyClientID] = useState('');

  const [messageText, setMessageText] = useState(""); // messageText is bound to a textarea element where messages can be typed.
  const [receivedMessages, setReceivedMessages] = useState<DisplayedMessageProps[]>([]); // receivedMessages stores the on-screen chat history.
  const memberIDs = [senderID, ...receiverIDs] // / To allow for group chats, we are creating an array that contains the sender and the receivers.
  memberIDs.sort(); // CRITICAL: Sorts in-place. We need to sort the key to counteract the swapping mechanism where sender and receiver becomes flipped.
  // Retrieving the chat history and update function from the context
  const { chatHistory, updateChatHistory } = useChat();
  const messageTextIsEmpty = messageText.trim().length === 0; // messageTextIsEmpty is used to disable the send button when the textarea is empty.

  // useChannel is a react-hook API for subscribing to messages from an Ably channel.
  // You provide it with a channel name and a callback to be invoked whenever a message is received.
  // Both the channel instance and the Ably JavaScript SDK instance are returned from useChannel.
  const rawChannelKey = `chat:${memberIDs.join(",")}`;
  const channelKey = generateHash(rawChannelKey); // Generating a SHA-256 hash of a channel to compress it and also enforce security, privacy and uniqueness :D
  // Look at how we obtain Ably. It's by opening a stream. We can't just pass around the Ably object because it comes with opening a stream.
  // Therefore, we actually need to open it once and once only, which is why we need to pass the client associated with this stream to components that need it.
  // There isn't some Ably client ID associated with an account, but rather one that is associated with a stream.
  const { channel, ably } = useChannel(channelKey, (messageData) => {
    // This callback gets executed for any message received on this channel.
    // If the sender is the current user, don't add the message to receivedMessages because
    // it's already added to the state when the user sends the message.

    if (messageData.name === 'messageDeleted') {
      // console.log("Received message deletion event", messageData.data);
      // Message deletion event
      const { messageId } = messageData.data;
      setReceivedMessages(currentMessages => currentMessages.filter(message => message.id !== messageId)); // exclude the one we just got
    } else if (messageData.name !== senderUsername) {
        // We know that the message is not from ourselves because we would block double messages here.      
        // For any message received from others, update the state.
        const { text, date, id, clientID } = messageData.data;
        const incomingMessage: DisplayedMessageProps = {
          id: id,
          clientID: clientID, // Get the clientID of the user who sent the message. This is used to ensure that users can only delete their messages.
          privateChat: privateChat,
          onMessageExchange: onMessageExchange,
          username: messageData.name,
          message: text,
          date: date,
          connectionID: clientID,
          userProfileURL: messageData.data.userProfileURL,
          onDeleteMessage: () => deleteMessage(id)
        };
      
        setReceivedMessages((prevMessages) => [...prevMessages, incomingMessage]);
    
        // IMPORTANT: Privacy feature.
        // Every time we send receive a message, we call this function to let the parent component know that a message has been received. End-to-end privacy.
        // This prevents jailbreaking the privacy feature by sending a message to a user and then having them switch the toggle off to capture the message history.
        onMessageExchange();
    }
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
    const tempId = `temp-${now}`;
    const dateStr = `${now.getFullYear().toString().padStart(4, '0')}/${(now.getMonth() + 1).toString().padStart(2, '0')}/${now.getDate().toString().padStart(2, '0')} ${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;
    // NOTE: You may wask what's the difference between these two IDs? Well, clientID is not specific to each message, but to the user!
    const outgoingMessage = {
      id: tempId, // this needs to be replaced with the real one once it is known. This is done to satisfy TypeScript
      clientID: senderID, // This is OUR client id with respect to our presence in the text channel.
      privateChat: privateChat, // Bringing these two privacy features down to the message level unlocks immense possibilities for end-to-end privacy.
      onMessageExchange: onMessageExchange,
      username: senderUsername,
      message: messageText,
      date: dateStr,
      userProfileURL: userProfileURL,
      onDeleteMessage: deleteMessage, // replace with the actual function
    };
  
    // Publish the message to the Ably channel. This is how we send messages to other users.
    // We don't specify who the message is for as the way we handle who receives messages is by subscribing certain users to certain channels.
    // That means when we publish a message to a channel, we need to subscribe the other user who we are targeting to that channel.
    await channel.publish({ // Notice how we are not including the message ID when we publish a message. That is because it is set by Ably implicitly.
      name: senderUsername,
      data: { text: messageText, date: dateStr, userProfileURL: userProfileURL, clientID: senderID }
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
              channelKey: channelKey,
              messageHistory: updatedHistory,
              owner: senderID,
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
          <Message
            clientID={message.clientID} // Get the clientID of the user who sent the message. This is used to ensure that users can only delete their messages.
            id={message.id}
            privateChat={privateChat}
            onMessageExchange={onMessageExchange}
            username={message.username}
            message={message.message}
            firstMessage={isFirstMessage}
            date={message.date}
            userProfileURL={message.userProfileURL}
            onDeleteMessage={() => deleteMessage(message.id)}
          />
        </Stack>
      );
    } else {
      // Clone the last element and its children to create a new instance before modifying.
      const lastElement = React.cloneElement(
        acc[acc.length - 1],
        {},
        React.Children.toArray(acc[acc.length - 1].props.children).concat(
          <Message
            clientID={message.clientID}
            id={message.id}
            privateChat={privateChat}
            onMessageExchange={onMessageExchange}
            username={message.username}
            message={message.message}
            firstMessage={isFirstMessage}
            date={message.date}
            userProfileURL={message.userProfileURL}
            onDeleteMessage={() => deleteMessage(message.id)}
          />
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

  const deleteMessage = async (messageId: string) => {
    const response = await fetch('/api/delete-message', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ messageId, channelKey }),
    });
  
    if (response.ok) {
      // The way we are reflecting the message deletion in real-time is by publishing a special message-deleted event to the channel.
      // Publish a deletion event to the channel
      channel.publish({
        name: 'messageDeleted',
        data: { messageId },
      });
    }
  };
  
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
          </form>
      </Stack>
    </div>
  );
}