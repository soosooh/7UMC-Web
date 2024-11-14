import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import TokenRefresher from './api/TokenRefresher'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <TokenRefresher>
        <App />
        {/* <ReactQueryDevtools initialIsOpen={false} /> */}
      </TokenRefresher>
    </QueryClientProvider>
  </React.StrictMode>
)
