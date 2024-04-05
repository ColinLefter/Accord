// NOTE: This file is kept in case I try once again to implement a fix for the following that appears in the terminal:
// Ably: Auth.requestToken(): token request signing call returned error; err = Error: `input` must not start with a slash when using `prefixUrl`
// This is not an error but rather something that is annoying to see in the terminal. I have tried to fix it but to no avail.
// This component is not being used anywhere as of now.
import { useEffect, useRef } from 'react';
import * as Ably from 'ably';

const createAblyRealtimeClient = () => new Ably.Realtime.Promise({
  authUrl: '/api/ably-auth',
  authMethod: 'POST',
  authHeaders: { 'Content-Type': 'application/json' },
});

/**
 * Provides a custom React hook, `useAblyRealtimeClient`, for creating and managing an Ably Realtime client instance with specific authentication settings.
 * This hook is designed to initialize the Ably Realtime client only in client-side environments (where `window` is defined)
 * to avoid server-side rendering issues and to ensure the client is properly closed and cleaned up
 * when the component using this hook unmounts or is re-rendered.
 *
 * This implementation is particularly aimed at addressing a known issue with Ably's token request
 * signing process that produces console warnings in development mode.
 * While the hook is not actively used in the current application, it serves as a potential solution to the mentioned Ably authentication warning.
 *
 * The Ably Realtime client is configured with an authentication URL pointing to an API endpoint (`/api/ably-auth`) that handles the token request.
 * The hook ensures that each instantiation of the Ably client is unique to the lifecycle of the component that utilizes this hook,
 * providing a fresh connection for every mount cycle and properly closing the connection to prevent memory leaks or multiple connections.
 *
 * Usage:
 * This hook can be imported and called within functional React components that require real-time capabilities facilitated by Ably.
 * The returned `clientRef.current` provides access to the Ably Realtime client instance, allowing the component to publish or subscribe to channels as needed.
 *
 * Note:
 * The actual implementation of the `/api/ably-auth` endpoint is not covered here and should be properly set up to return valid authentication tokens for Ably.
 *
 * @returns {Ably.Types.RealtimePromise | undefined} An Ably Realtime client instance if `window` is defined, otherwise `undefined`.
 */
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
