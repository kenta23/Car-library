'use client';

import React from 'react'
import { defaultShouldDehydrateQuery, isServer, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

export default function Provider({ children } : { children: Readonly<React.ReactNode> }) {
     
    const makeQueryClient = () => new QueryClient({
        defaultOptions: { 
            queries: { 
                staleTime: 1000 * 60,
            },
            dehydrate: {
               // include pending queries in dehydration
               shouldDehydrateQuery: (query) =>
                 defaultShouldDehydrateQuery(query) ||
                 query.state.status === 'pending',
             },
        }
   });


 let browserQueryClient: QueryClient | undefined = undefined;

  function getQueryClient() {
      if (isServer) { 
        // Server: always make a new query client
        return makeQueryClient();
      } else {
        // Browser: make a new query client if we don't already have one
        // This is very important, so we don't re-make a new client if React
        // suspends during the initial render. This may not be needed if we
        // have a suspense boundary BELOW the creation of the query client
        if (!browserQueryClient) browserQueryClient = makeQueryClient();
        return browserQueryClient;
      }
    }

    
  return (
    <QueryClientProvider client={getQueryClient()}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
