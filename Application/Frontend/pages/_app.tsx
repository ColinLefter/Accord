import "@mantine/core/styles.css";
import { AppProps } from "next/app";
import { MantineProvider, useComputedColorScheme } from "@mantine/core";
import { ClerkProvider } from '@clerk/nextjs';
import { dark } from '@clerk/themes';
import "../custom.css";

export default function App({ Component, pageProps }: AppProps) {
  // Define a wrapper component inside App to access the Mantine theme
  const WithProviders = () => {
    const theme = useComputedColorScheme() === 'dark' ? dark : undefined; // no need to specify anything for light theme
    const textColor = useComputedColorScheme() === 'dark' ? "white" : "black";

    return (
      <ClerkProvider
        appearance={{
          baseTheme: theme,
          variables: { colorPrimary: textColor },
        }}>
        <Component {...pageProps} />
      </ClerkProvider>
    );
  };

  return (
    <MantineProvider>
      <WithProviders />
    </MantineProvider>
  );
}
