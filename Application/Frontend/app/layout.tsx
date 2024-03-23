import "@mantine/core/styles.css";
import React from "react";
import { MantineProvider, ColorSchemeScript } from "@mantine/core";
import { theme } from "../theme";
import { ClerkProvider } from '@clerk/nextjs';
import { dark } from '@clerk/themes';
// import "../global.css";

import * as Ably from 'ably';
import { AblyProvider } from 'ably/react';

export const metadata = {
  title: "Mantine Next.js template",
  description: "I am using Mantine with Next.js!",
};

export default function RootLayout({ children }: { children: any }) {
  const client = new Ably.Realtime.Promise({ authUrl: '/api' });

  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          <link rel="shortcut icon" href="/favicon.svg" />
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
          />
        </head>
        <body>
          <MantineProvider theme={theme}>
            <AblyProvider client={ client }>
              {children}
            </AblyProvider>
          </MantineProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
