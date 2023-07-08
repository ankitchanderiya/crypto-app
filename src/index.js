import React ,{StrictMode} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ColorModeScript,ChakraProvider,theme } from '@chakra-ui/react';
import ColorModeSwitcher from './ColorModeSwitcher';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
      <ColorModeScript />
      <ChakraProvider theme={theme}>
        <ColorModeSwitcher />
        <App />
      </ChakraProvider>
  </StrictMode>
);

export const server = `https://api.coingecko.com/api/v3`;
