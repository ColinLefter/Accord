'use client'

import * as Ably from 'ably';
import { AblyProvider } from 'ably/react';
import { MessagingInterface } from '@/components/Messaging/MessagingInterface';

export function Chat() {

  const client = new Ably.Realtime.Promise({
    authUrl: 'api/ably-auth', // must not start with a leading slash
    authMethod: 'POST' // we need to match the server-side expectation
  })

  return (
    <AblyProvider client={ client }>
      <MessagingInterface/>
    </AblyProvider>
  )
}