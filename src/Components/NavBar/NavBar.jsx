import React, { useState } from 'react';
import { Box, chakra, useBreakpointValue } from '@chakra-ui/react';
import { Link as ScrollLink } from 'react-scroll';

const NavBar = () => {
 const NavLink = chakra(ScrollLink);

 const marginStyle = useBreakpointValue({
  base: '0.5rem',
  md: '1rem',
  lg: '1.2rem',
 });

 const fontStyle = useBreakpointValue({
  lg: '1.5rem',
 });

 const navAStyle = {
  textDecoration: 'none',
  color: '#fff',
  padding: '0.2rem 0.8rem',
  marginLeft: marginStyle,
  _focus: {
   borderBottom: '0.2rem solid #D76627',
  },
  _hover: {
   borderBottom: '0.2rem solid #D76627',
   color: '#61DAFB',
  },
  "&.active": {
   borderBottom: '0.2rem solid #D76627',
   color: '#61DAFB',
  },
  transition: 'all 0.3s ease-in-out',
  fontSize: fontStyle,
  cursor: 'pointer'
 };

 const [activeLink, setActiveLink] = useState(null);

 const handleNavLinkClick = (index) => {
  setActiveLink(index);
 };

 return (
  <Box as='nav'>
   <NavLink
    __css={navAStyle}
    to="section2" 
    spy={true}
    smooth={true}
    duration={1000}
    activeClass
    className={activeLink === 0 ? 'active' : ''}
    onClick={() => handleNavLinkClick(0)}
   >
    Sobre Mí
   </NavLink>
   <NavLink
    __css={navAStyle}
    to="section3" 
    spy={true}
    smooth={true}
    duration={1000}
    activeClass
    offset={1}
    className={activeLink === 1 ? 'active' : ''}
    onClick={() => handleNavLinkClick(1)}
   >
    Habilidades
   </NavLink>
   <NavLink
    __css={navAStyle}
    to="section4" 
    spy={true}
    smooth={true}
    duration={1000}
    activeClass
    offset={-100}
    className={activeLink === 2 ? 'active' : ''}
    onClick={() => handleNavLinkClick(2)}
   >
    Experiencia
   </NavLink>
  </Box>
 );
};

export { NavBar };
