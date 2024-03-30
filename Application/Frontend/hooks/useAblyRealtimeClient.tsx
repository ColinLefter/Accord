// NOTE: This file is kept in case I try once again to implement a fix for the following that appears in the terminal:
// Ably: Auth.requestToken(): token request signing call returned error; err = Error: `input` must not start with a slash when using `prefixUrl`
// This is not an error but rather something that is annoying to see in the terminal. I have tried to fix it but to no avail. This component is not being used anywhere as of now.
import { useEffect, useRef } from 'react';
import * as Ably from 'ably';

const createAblyRealtimeClient = () => new Ably.Realtime.Promise({
  authUrl: '/api/ably-auth',
  authMethod: 'POST',
  authHeaders: { 'Content-Type': 'application/json' },
});

export const useAblyRealtimeClient = () => {
  const clientRef = useRef<Ably.Types.RealtimePromise | undefined>(undefined);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      clientRef.current?.close();
      clientRef.current = createAblyRealtimeClient();
    }

    return () => {
      clientRef.current?.close();
      clientRef.current = undefined;
    };
  }, []);

  return clientRef.current;
};
