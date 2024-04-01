"use client";

import React from "react";
import { ClerkProvider } from '@clerk/nextjs';
import { CacheProvider } from '@/contexts/queryCacheContext';
import { MantineProvider, useComputedColorScheme } from "@mantine/core";
import * as Ably from 'ably';
import { AppProps } from "next/app";
import { dark } from '@clerk/themes';
import { AblyProvider } from 'ably/react';

/**
 * RootLayout wraps the entire application with necessary providers and theme configurations.
 * It uses the ClerkProvider for authentication, CacheProvider for managing global fetch cache state,
 * AblyProvider for real-time messaging, and MantineProvider for UI theming. This setup ensures all
 * pages and components in the application have access to these contexts and themes.
 *
 * @param {ReactNode} children The child components to be rendered inside the RootLayout.
 * This typically includes the entire application UI rendered by Next.js.
 *
 * @returns A component that provides Clerk, Cache, Ably, and Mantine contexts to the application.
 * It automatically configures the theme based on the user's system preference and sets up
 * real-time messaging and authentication services.
 */
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
