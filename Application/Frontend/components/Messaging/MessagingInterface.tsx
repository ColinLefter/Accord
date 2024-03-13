import { Message } from './Message';
import { Stack, Textarea } from '@mantine/core';
import React, { useEffect, useState, useRef } from 'react';
import { useChannel } from "ably/react";

interface Message {
  username: string,
  message: string,
  firstMessage?: boolean,
  date?: string
}

export function MessagingInterface() {
  const [messageText, setMessageText] = useState("");
  const [receivedMessages, setMessages] = useState<Message[]>([]);    
  const messageTextIsEmpty = messageText.trim().length === 0;

  const inputBoxRef = useRef(null);

  const { channel, ably } = useChannel("chat-demo", (messageData) => {
    const incomingMessage: Message = {
      username: "default", // You might want to extract this from messageData
      message: messageData.data, // Assuming messageData.data contains the message text
      // Add other fields or logic to extract them as necessary
    };

    const history = receivedMessages.slice(-199);
    setMessages([...history, incomingMessage]);
  });

  const sendChatMessage = (messageText: string) => {
    channel.publish({ name: "chat-message", data: messageText });
    setMessageText("");
    if (inputBoxRef.current) {
      (inputBoxRef.current as HTMLTextAreaElement).focus();
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key !== 'Enter' || messageTextIsEmpty) {
      return;
    }
    sendChatMessage(messageText);
    event.preventDefault();
  };  

  return (
    <div className="messaging-container">
      <Stack justify="space-between" style={{ height: '100%' }}>
        <Stack gap="md">
          <Stack gap="0">
            <Message username="user1" message="Hello from user 1" firstMessage date="Today at 16:38" />
            <Message username="user1" message="This is my second message" date="Today at 16:39" />
            <Message username="user1" message="And now my third" date="Today at 16:40" />
          </Stack>
        
          <Stack gap="0">
            <Message username="user2" message="User 2 joins the chat" firstMessage date="Today at 16:41" />
            <Message username="user2" message="User 2's second message" date="Today at 16:42" />
            <Message username="user2" message="More from user 2" date="Today at 16:43" />
          </Stack>
          
          <Stack gap="0">
            <Message username="user3" message="User 3 here, hi!" firstMessage date="Today at 16:44" />
            <Message username="user3" message="Another from user 3" date="Today at 16:45" />
            <Message username="user3" message="User 3's message again" date="Today at 16:46" />
          </Stack>
        </Stack>

        <Textarea
          ref={inputBoxRef}
          placeholder="Message @user2"
          autosize
          minRows={1}
          maxRows={10}
          value={messageText}
          onKeyPress={handleKeyPress}
          onChange={(e) => setMessageText(e.target.value)}
        />
      </Stack>
    </div>
  );
}
