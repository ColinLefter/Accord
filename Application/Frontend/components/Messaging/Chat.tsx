'use client'

import * as Ably from 'ably';
import { AblyProvider } from 'ably/react';
import { MessagingInterface } from '@/components/Messaging/MessagingInterface';

interface ChatProps {
  sender: string;
  receiver: string;
  privateChat: boolean;
  onMessageExchange: () => void; // Function type that doesn't take arguments and returns void
}

export function Chat({ sender, receiver, privateChat, onMessageExchange }: ChatProps) {
  const client = new Ably.Realtime.Promise({
    authUrl: '/api/ably-auth',
    authMethod: 'POST' // We need to match the server-side expectation
  })

  return (
    <AblyProvider client={ client }>
      <MessagingInterface 
        sender={sender} 
        receiver={receiver} 
        privateChat={privateChat} 
        onMessageExchange={onMessageExchange} // Pass down the function to MessagingInterface
      />
    </AblyProvider>
  );
}