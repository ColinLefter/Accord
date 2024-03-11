import "@mantine/core/styles.css";
import { AppProps } from "next/app";
import { MantineProvider } from "@mantine/core";
import "../custom.css";

/**
 * This is the custom App component for the Next.js application. It wraps every page and is the
 * ideal place to set global configurations, styles, and layout components that should persist
 * across all pages. The usage of the MantineProvider at this top level ensures that Mantine
 * styles and theming are consistently applied throughout the application.
 *
 * @module App
 * @param {AppProps} props - The properties passed to the App component, including the specific
 * page to be rendered (`Component`) and the page's properties (`pageProps`).
 * 
 * Usage:
 * - This custom App component is automatically used by Next.js to initialize pages.
 * - The `MantineProvider` is utilized without any theme modification, but it can be customized
 *   to apply global theme changes if needed.
 * - Any global CSS imports should be included here to ensure they are applied universally.
 *
 * Note:
 * - Since this file affects all pages, be cautious about adding components here to avoid
 *   unnecessary re-renders or bloating every page with unwarranted content.
 */
export default function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider>
      <Component {...pageProps} />
    </MantineProvider>
  );
}