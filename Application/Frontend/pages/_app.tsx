import "@mantine/core/styles.css";
import { AppProps } from "next/app";
import RootLayout from '@/app/RootLayout'; // Make sure the path is correct
import "../custom.css";

/**
 * The main application component that wraps all pages in the application.
 * It imports global styles from Mantine and custom CSS, and wraps every page with the RootLayout component.
 * This setup ensures that every page has consistent styling and layout behavior.

 * The App component is the top-level component in Next.js applications. It's used to initialize pages.
 * You can override it and control the page initialization, which allows you to do amazing things like:
 * - Persisting layout between page changes
 * - Keeping state when navigating pages
 * - Custom error handling using componentDidCatch
 * - Inject additional data into pages
 * - Add global CSS

 * @param {AppProps} { Component, pageProps } Destructured props object containing the active page and its props.
 * Component: The active page that’s being rendered. This changes as you navigate between pages.
 * pageProps: An object with the initial props that were preloaded for your page by one of Next.js' data fetching methods, if any.

 * @returns A RootLayout component wrapping the active page.
 */
export default function App({ Component, pageProps }: AppProps) {
  return (
    <RootLayout>
      <Component {...pageProps} />
    </RootLayout>
  );
}