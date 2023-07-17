import React from 'react';
import { Box, useBreakpointValue  } from '@chakra-ui/react';


const Header = () => {
  const backgroundColors = useBreakpointValue({
    base: 'orange',
    sm: 'yellow',
    md: 'red',
    lg: 'violet',
    xl: 'grey',
  });

  const headerStyles ={
    pt: '2rem',
    display:'flex',
    justifyContent: 'space-between',
    pos: 'sticky',
    top: 0,
    zIndex: 10,
    w: '85vw',
    m: '0 auto',
    animation: 'invisible 2s linear',
    background: backgroundColors
  }
  return (
    <>
      <Box
        style={headerStyles}>
          <h1>hola</h1>
          <h1>mundo</h1>
          <h1>!</h1>
      </Box>
    </>
  );
};

export { Header };