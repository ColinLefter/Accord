import dynamic from 'next/dynamic';
import { AblyProvider } from 'ably/react';
import * as Ably from 'ably';

const ablyClient = new Ably.Realtime.Promise({ authUrl: '/api' });

const AblyWrapper = ({ children }: any) => (
  <AblyProvider client={ablyClient}>
    {children}
  </AblyProvider>
);

export default dynamic(() => Promise.resolve(AblyWrapper), { ssr: false });