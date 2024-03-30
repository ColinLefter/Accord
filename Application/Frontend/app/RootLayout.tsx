"use client";

import React from "react";
import { ClerkProvider } from '@clerk/nextjs';
import { CacheProvider } from '@/contexts/queryCacheContext';
import { MantineProvider, useComputedColorScheme } from "@mantine/core";
import * as Ably from 'ably';
import { AppProps } from "next/app";
import { dark } from '@clerk/themes';
import { AblyProvider } from 'ably/react';

export default function RootLayout({ children }: any) { // The one time where 'any' is actually justified
  const client = new Ably.Realtime.Promise({
    authUrl: '/api/ably-auth',
    authMethod: 'POST', // Explicitly specify to use POST
    authHeaders: { 'Content-Type': 'application/json' },
  });
    // Define a wrapper component inside App to access the Mantine theme
    const WithProviders = () => {
      const theme = useComputedColorScheme() === 'dark' ? dark : undefined;
      const textColor = useComputedColorScheme() === 'dark' ? "white" : "black";
    
      return (
        <ClerkProvider
          appearance={{
            baseTheme: theme,
            variables: { colorPrimary: textColor },
          }}>
            <CacheProvider>
              <AblyProvider client={ client }>
                {children}
              </AblyProvider>              
            </CacheProvider>
        </ClerkProvider>
      );
    }

    return (
      <MantineProvider>
        <WithProviders />
      </MantineProvider>
    );
}
