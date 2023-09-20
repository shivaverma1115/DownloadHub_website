import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { sendToVercelAnalytics } from './vitals';
import ContextProvider from './AuthContextApi/ContextProvider';
import {BrowserRouter} from "react-router-dom"
import { ChakraProvider } from '@chakra-ui/react'

ReactDOM.render(
  <ContextProvider>
    <BrowserRouter>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </BrowserRouter>
  </ContextProvider>,
  document.getElementById('root')
);

reportWebVitals(sendToVercelAnalytics);
