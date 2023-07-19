import React from 'react';
import { Box, chakra, useBreakpointValue } from '@chakra-ui/react'

const NavBar = () => {

 const NavLink = chakra.a

 const marginStyle = useBreakpointValue({
  base: '0.5rem',
  md: '1rem',
  lg: '1.2rem',
 })

 const fontStyle = useBreakpointValue({
  lg: '1.5rem',
 })

 const navAStyle = {
  textDecoration: 'none',
  color: '#fff',
  padding: '0.2rem 0.8rem',
  marginLeft: marginStyle,
  _focus: {
   borderBottom: '0.2rem solid #D76627'
  },
  _hover: {
   borderBottom: '0.2rem solid #D76627',
   color: '#61DAFB',
  },
  transition:'all 0.3s ease-in-out',
  fontSize: fontStyle,
 }

 return (
  <Box
   as='nav'>
   <NavLink __css={navAStyle} href="#">Sobre Mí</NavLink>
   <NavLink __css={navAStyle} href="#">Habilidades</NavLink>
   <NavLink __css={navAStyle} href="#">Experiencia</NavLink>
  </Box>
 );
};

export { NavBar };