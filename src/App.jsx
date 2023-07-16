import React from 'react';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import './Fonts.css'
import { Header } from './Components/Header/Header'

function App() {
  const fondoEstilo = extendTheme({
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
    }
  });
  return (
    <>
      <ChakraProvider theme={fondoEstilo}>
        <Header>

        </Header>
      </ChakraProvider>
    </>
  );
}

export default App;
