import "@mantine/core/styles.css";
import { AppProps } from "next/app";
import RootLayout from '@/app/RootLayout'; // Make sure the path is correct
import "../custom.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RootLayout>
      <Component {...pageProps} />
    </RootLayout>
  );
}