'use client'

import * as Ably from 'ably';
import { AblyProvider } from 'ably/react';
import { MessagingInterface } from '@/components/Messaging/MessagingInterface';

interface ChatProps {
  sender: string;
  receiver: string;
}

export function Chat({ sender, receiver }: ChatProps) {
  const client = new Ably.Realtime.Promise({
    authUrl: '/api/ably-auth',
    authMethod: 'POST' // We need to match the server-side expectation
  })

  return (
    <AblyProvider client={ client }>
      <MessagingInterface sender={sender} receiver={receiver} />
    </AblyProvider>
  )
}