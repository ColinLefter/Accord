import dynamic from 'next/dynamic';
import { AblyProvider } from 'ably/react';
import * as Ably from 'ably';

const ablyClient = new Ably.Realtime.Promise({ authUrl: '/api' });

/**
 * Provides an Ably Realtime context to its children components, enabling them to use Ably's
 * real-time communication features. This component initializes an Ably client with authentication
 * managed through an API endpoint and wraps the given children components within the AblyProvider
 * to make the Ably client available throughout the component tree.
 * 
 * The component is dynamically imported without server-side rendering (ssr: false) to ensure
 * it only operates on the client side where real-time features are applicable.
 * 
 * @param {any} props - Component props containing children components.
 */
const AblyWrapper = ({ children }: any) => (
  <AblyProvider client={ablyClient}>
    {children}
  </AblyProvider>
);

export default dynamic(() => Promise.resolve(AblyWrapper), { ssr: false });