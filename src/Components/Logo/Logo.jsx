import { Box, useBreakpointValue } from '@chakra-ui/react';
import React from 'react';

const Logo = () => {

  const heigthStyle = useBreakpointValue({
    base: '2rem',
    lg: '2.5rem',
  })

  const widthStyle = useBreakpointValue({
    base: '2rem',
    lg: '2.5rem',
  })

  const logoStyle = {
    height: heigthStyle,
    width: widthStyle,
    fontFamily: 'Pridi, serif',
    padding: '1rem',
    textAlign: 'center',
    border: ' 0.15rem solid transparent',
    background: 'linear-gradient(#111320, #111320)padding-box, linear-gradient(135deg, #61DAFB, #111320) border-box',
    borderRadius: '5rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }

  const LogoSpan ={
    background: 'linear-gradient(20deg, rgb(215, 102, 39), rgba(215, 102, 39, 0.1))',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    fontWeight: 'bold',
    fontSize: '1.2rem',
  }

  return (
    <>
      <Box
        style={logoStyle}>
        <h2>
          <span style={LogoSpan}>M</span>
        </h2>
      </Box>
    </>
  );
};

export { Logo };