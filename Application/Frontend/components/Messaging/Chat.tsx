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
  // Although this component seems a bit redundant, it still exists because we will perform some additional functionality here in the future.
  // Namely, the migration of the privacy toggle to this component as currently it is in the main application shell.
  // The reason we need to migrate that here is becuase it is currently acting as a global setting, but we need to make it a per-chat setting.
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