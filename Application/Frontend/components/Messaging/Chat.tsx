'use client'

import * as Ably from 'ably';
import { AblyProvider } from 'ably/react';
import { MessagingInterface } from '@/components/Messaging/MessagingInterface';

export function Chat() {

  const client = new Ably.Realtime.Promise({ authUrl: '/api' })

  return (
    <AblyProvider client={ client }>
      <MessagingInterface/>
    </AblyProvider>
  )
}