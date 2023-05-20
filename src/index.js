import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { QueryClientProvider, QueryClient } from 'react-query';

import { BrowserRouter } from 'react-router-dom';

import { DataProvider } from "./contextProvider/DataProvider";

import ScrollToTop from './helpers/ScrollToTop'
import { AuthContext, AuthContextProvider } from './contextProvider/AuthContext';
import { ReactQueryDevtools } from 'react-query/devtools';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnmount: false,
      refetchOnReconnect: false,
      retry: 2,
      staleTime: 30 * 60 * 1000,
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>

      <DataProvider>
        <AuthContextProvider>
          <App />
        </AuthContextProvider>
      </DataProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  </React.StrictMode>
);

