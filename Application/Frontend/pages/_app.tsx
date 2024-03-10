/*
This file reflects changes across all of the frontend components.
Including any components on this page will result in them being visible across all pages.
*/
import "@mantine/core/styles.css";
// import "../global.css";
import { AppProps } from "next/app";
import { MantineProvider } from "@mantine/core";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider>
      <Component {...pageProps} />
    </MantineProvider>
  );
}
