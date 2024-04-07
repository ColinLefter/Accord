"use client";

import React from "react";
import { ClerkProvider } from '@clerk/nextjs';
import { CacheProvider } from '@/contexts/queryCacheContext';
import { MantineProvider, useComputedColorScheme, createTheme, getThemeColor, MantineGradient, virtualColor } from "@mantine/core";
import * as Ably from 'ably';
import { AppProps } from "next/app";
import { dark } from '@clerk/themes';
import { AblyProvider } from 'ably/react';
import { useState, useEffect } from 'react';
import { Notifications } from '@mantine/notifications';
import '@mantine/notifications/styles.css';

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
  const [themePreference, setThemePreference] = useState<'light' | 'dark'>('light');

  const client = new Ably.Realtime.Promise({
    authUrl: '/api/ably-auth',
    authMethod: 'POST', // Explicitly specify to use POST
    authHeaders: { 'Content-Type': 'application/json' },
  });

  const customDarkTheme = createTheme({
    colors: {
      primary: virtualColor({
        name: 'primary',
        dark: 'orange',
        light: 'orange',
      }),
      dark: [
        '#FAFAFA',
        "#c9c9c9",
        '#FAFAFA',
        '#c9c9c9', // In-component text
        "#1F1F1F", // outlines
        "#040404",
        "#161616", // Accent
        "#101010", // Main background
        "#262626", // Primary color
        "#161616"
      ]
    },
    white: "#FAFAFA",
    autoContrast: true,
    defaultGradient: { from: "pink", to: "yellow" },
    shadows: {
      sm: '1px 1px 3px rgba(100, 100, 100, .25)',
      md: '1px 1px 3px rgba(100, 100, 100, .25)',
      xl: '5px 5px 3px rgba(40, 40, 40, .25)',
    },
    primaryColor: 'primary'
  });
  
  const WithProviders = () => {
    const theme = useComputedColorScheme() === 'dark' ? dark : undefined;
    const textColor = useComputedColorScheme() === 'dark' ? "white" : "black";
    useEffect(() => {
      const theme = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      setThemePreference(theme);
    }, []);
  
  
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
    <MantineProvider defaultColorScheme={themePreference} theme={customDarkTheme}>
      <Notifications />
      <WithProviders />
    </MantineProvider>
  );
}
