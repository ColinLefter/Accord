"use client"

import { Message } from './Message';
import { Stack, Group, Textarea, Button } from '@mantine/core';
import React, { useEffect, useState, useRef } from 'react';
import { useChannel } from "ably/react";
import * as Ably from 'ably';

interface Message {
  username: string,
  message: string,
  firstMessage?: boolean,
  date?: string,
  connectionId?: string, // Add this if you receive it from Ably messages
  data?: string, // The actual message content from Ably
}

export function MessagingInterface() {
  let inputBox = null;
  let messageEnd: HTMLDivElement | null = null;

  const [messageText, setMessageText] = useState(""); // messageText is bound to a textarea element where messages can be typed
  const [receivedMessages, setMessages] = useState<Message[]>([]); // receivedMessages stores the on-screen chat history
  const messageTextIsEmpty = messageText.trim().length === 0; // messageTextIsEmpty is used to disable the send button when the textarea is empty

  const inputBoxRef = useRef(null);

  // useChannel is a react-hook API for subscribing to messages from an Ably channel
  // You provide it with a channel name and a callback to be invoked whenever a message is received
  // Both the channel instance and the Ably JavaScript SDK instance are returned from useChannel
  const { channel, ably } = useChannel("chat", (messageData) => {
    const { text, date } = messageData.data;
    const incomingMessage: Message = {
      username: messageData.name,
      message: text,
      date: date,
      connectionId: messageData.clientId,
      data: text,
    };
    const history = receivedMessages.slice(-199); // we will always have up to 199 messages + 1 new message, stored using the setMessages React useState hook
    setMessages([...history, incomingMessage]);
  });

  // Responsible for publishing new messages
  // It uses the Ably Channel returned by the useChannel hook, clears the input, and focuses on the textarea so that users can type more messages
  const sendChatMessage = (messageText: string) => {
    const now = new Date();
    const dateStr = `${(now.getFullYear()).toString().padStart(2, '0')}/${(now.getMonth() + 1).toString().padStart(2, '0')}/${now.getDate().toString().padStart(2, '0')} ${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;
  
    channel.publish({
      name: "user1", // NOTE: user1 is temporarily hardcoded as we need to implement site-wide user authentication
      data: { text: messageText, date: dateStr }
    });
    setMessageText("");
    if (inputBoxRef.current) {
      (inputBoxRef.current as HTMLTextAreaElement).focus();
    }
  };
  
  // This is triggered when the submit button is clicked and calls sendChatMessage, along with preventing a page reload
  const handleFormSubmission = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    sendChatMessage(messageText);
  }

  // If a user presses the enter key, while there is text in the textarea, the sendCHatMessage fuction is triggered
  const handleKeyPress = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'Enter' && !event.shiftKey && !messageTextIsEmpty) {
      event.preventDefault(); // Prevent default to avoid line break in textarea
      sendChatMessage(messageText);
    }
  };

  // Wow we need to construct the UI elements to display the messages
  // We are mapping the received Ably messages into HTML span elements
  // Group messages by username and construct UI elements to display the messages
  let lastUsername = '';
  const messages = receivedMessages.reduce<JSX.Element[]>((acc, message, index) => {
    const isFirstMessage = message.username !== lastUsername;
    if (isFirstMessage) {
      // Start a new message group
      lastUsername = message.username;
      acc.push(
        <Stack key={index} gap="0">
          <Message username={message.username} message={message.message} firstMessage={true} date={message.date} />
        </Stack>
      );
    } else {
      // Clone the last element and its children to create a new instance before modifying
      const lastElement = React.cloneElement(
        acc[acc.length - 1],
        {},
        React.Children.toArray(acc[acc.length - 1].props.children).concat(
          <Message key={index} username={message.username} message={message.message} date={message.date} />
        )
      );
  
      // Replace the last element with the updated one
      acc[acc.length - 1] = lastElement;
    }
    return acc;
  }, []);
  
  useEffect(() => {
    if (messageEnd) {
      messageEnd.scrollIntoView({ behavior: 'smooth' });
    }
  }, [receivedMessages]);

  return (
    <div className="messaging-container">
      <Stack justify="space-between" style={{ height: '100%' }}>
        {/* First loading the message history */}
        {messages}
        {/*
          Keeps the message box scrolled to the most recent message (the one on the bottom).
          This empty div is then scrolled into view whenever the component re-renders.
        */}
        <div ref={(element) => { messageEnd = element; }}></div>
          <form onSubmit={handleFormSubmission}>
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
          </form>
      </Stack>
    </div>
  );
}