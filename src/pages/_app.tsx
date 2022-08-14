import '../modules/core/styles/globals.css';
import type { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';
import { OverlayProvider, SSRProvider } from 'react-aria';
import { useRef } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const TEN_MINUTES = 60 * 10;

function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = useRef(new QueryClient());
  return (
    <SessionProvider
      session={pageProps.session}
      refetchOnWindowFocus
      refetchInterval={TEN_MINUTES}
    >
      <QueryClientProvider client={queryClient.current}>
        <SSRProvider>
          <OverlayProvider>
            <Component {...pageProps} />
          </OverlayProvider>
        </SSRProvider>
      </QueryClientProvider>
    </SessionProvider>
  );
}

export default MyApp;
