import React from 'react';
import { Box, useBreakpointValue  } from '@chakra-ui/react';
import { Logo } from '../Logo/Logo'
import { NavBar } from '../NavBar/NavBar'

const Header = () => {
  
  const heightStyle = useBreakpointValue({
    lg:'5rem',
  })

  const fontStyle = useBreakpointValue({
    lg:'1.3rem',
  })

  const headerStyles ={
    pt: '2rem',
    display:'flex',
    justifyContent: 'space-between',
    pos: 'sticky',
    top: 0,
    zIndex: 10,
    width: '85vw',
    margin: '0 auto',
    animation: 'invisible 2s linear',
    height:heightStyle,
    fontSize: fontStyle
  }
  return (
    <>
      <Box
        style={headerStyles}>
         <Logo></Logo>
         <NavBar></NavBar>
      </Box>
    </>
  );
};

export { Header };