import React from 'react';
import { Box, useBreakpointValue } from '@chakra-ui/react';
import { Logo } from '../Logo/Logo'
import { DivNav } from '../DivNav/DivNav'

const Header = () => {

  const heightStyle = useBreakpointValue({
    lg: '5rem',
  })

  const fontStyle = useBreakpointValue({
    lg: '1.3rem',
  })

  const menuResponse = useBreakpointValue({
    base: 'inline',
    md: 'none'
  })

  const headerStyles = {
    pt: '2rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    pos: 'sticky',
    top: 0,
    zIndex: 10,
    width: '85vw',
    margin: '0 auto',
    animation: 'invisible 2s linear',
    height: heightStyle,
    fontSize: fontStyle
  }

  const menuStyle = {
    display: menuResponse
  }
  return (
    <>
      <Box
        sx={headerStyles}>
        <Logo></Logo>
        <div>
          <i className='bi bi-list '
            style={menuStyle}></i>
        </div>
        <DivNav></DivNav>

      </Box>
    </>
  );
};

export { Header };