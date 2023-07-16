import React from 'react';
import { Box } from '@chakra-ui/react';


const Header = () => {
  const headerStyles = {
    pt: '2rem',
    display:'flex',
    justifyContent: 'space-between',
    pos: 'sticky',
    top: 0,
    zIndices: 10,
    w: '85vw',
    m: '0 auto',
    animation: 'invisible 2s linear'
  }
  return (
    <>
      <Box
        sx={headerStyles}>
          <h1>hola</h1>
          <h1>mundo</h1>
          <h1>!</h1>
      </Box>
    </>
  );
};

export { Header };