"use client";

import * as Ably from 'ably';
import { AblyProvider } from 'ably/react';
import { MessagingInterface } from '@/components/Messaging/MessagingInterface';
import { ChatProps } from '@/accordTypes';

/**
 * The Chat component sets up a communication channel between two users
 * and provides an interface for message exchange.
 * 
 * Props:
 * - sender: The identifier for the user who is sending the message.
 * - receiver: The identifier for the user who is receiving the message.
 * - privateChat: A boolean flag indicating whether the chat is private.
 * - onMessageExchange: A function that gets called when a message exchange occurs.
 * 
 * This component utilizes the Ably real-time messaging service for enabling
 * the real-time communication capabilities. It wraps the MessagingInterface component
 * with the AblyProvider, passing necessary props for the message exchange.
 * 
 * @param {ChatProps} props The properties passed to the Chat component.
 * @returns {JSX.Element} The rendered Chat component.
 */
export function Chat({ senderID, senderUsername, receiverIDs, privateChat, lastFetched, setLastFetched, onMessageExchange }: ChatProps) {
  return (
      <MessagingInterface 
        senderID={senderID}
        senderUsername={senderUsername}
        receiverIDs={receiverIDs}
        privateChat={privateChat}
        lastFetched={lastFetched}
        setLastFetched={setLastFetched}
        onMessageExchange={onMessageExchange}
      />
  );
}