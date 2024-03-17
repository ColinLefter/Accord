'use client'

import * as Ably from 'ably';
import { AblyProvider } from 'ably/react';
import { MessagingInterface } from '@/components/Messaging/MessagingInterface';

export function Chat() {

  const client = new Ably.Realtime.Promise({
    authUrl: '/api/ably-auth', // Must not start with a leading slash
    authMethod: 'POST' // We need to match the server-side expectation
  })

  return (
    <AblyProvider client={ client }>
      <MessagingInterface/>
    </AblyProvider>
  )
}