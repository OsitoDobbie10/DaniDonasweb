import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import {Global} from "./index.js";
import "./App.css"
const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <QueryClientProvider client={queryClient}>
  <Global>
  <App/>
  </Global>
  </QueryClientProvider>
  </React.StrictMode>, 
)
