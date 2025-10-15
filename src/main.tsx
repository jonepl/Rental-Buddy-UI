import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import App from './App';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import './index.css';

const queryClient = new QueryClient();

const path = window.location.pathname;
const view = path.startsWith('/search')
  ? <App />
  : path.startsWith('/signup')
    ? <SignUp />
    : path.startsWith('/signin')
      ? <SignIn />
      : <Home />;

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      {view}
    </QueryClientProvider>
  </React.StrictMode>
);
