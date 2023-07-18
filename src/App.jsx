import React from 'react';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import './Fonts.css'
import { Header } from './Components/Header/Header'


function App() {
  const theme = extendTheme({
    styles: {
      global: {
        body: {
          bg: '#111320',
          m: 0,
          p: 0,
          color:'#fff'
        }
      }
    },
    fonts: {
      heading: 'Inconsolata, monospace',
      body: 'Pridi, serif'
    },
    breakpoints: {
      base: '100%',
      sm: '768px',
      md: '1024px',
      lg: '1440px',
      xl: '1920px',
    },
    transition:{
      transition:'all 0.3s ease-in-out'
    }
  });
  return (
    <>
      <ChakraProvider theme={theme}>
        <Header>

        </Header>
      </ChakraProvider>
    </>
  );
}

export default App;
