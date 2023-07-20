import React, { useState } from 'react';
import { Box, chakra, useBreakpointValue } from '@chakra-ui/react'
import { Link as ScrollLink } from 'react-scroll';
import linkedinImage from '../../Assets/icons8-linkedin.svg';
import gitHubImage from '../../Assets/icons8-github.svg';

const MenuHamburguesa = () => {

 const NavLink = chakra(ScrollLink);

 const menuResponse = useBreakpointValue({
  base: 'inline',
  md: 'none'
 })

 const menuStyle = {
  display: menuResponse,
  cursor: 'pointer'
 }

 const [showMenu, setShowMenu] = useState(false);

 const handleMenuClick = () => {
  setShowMenu(!showMenu);
 };
 const handleMenuItemClick = () => {
  setShowMenu(false);
 };

 const fontStyle = useBreakpointValue({
  lg: '1.5rem',
 });

 const navAStyle = {
  textDecoration: 'none',
  color: '#fff',
  padding: '0.2rem 0.8rem',
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
  setShowMenu(false);
 };

 const displayStyle = useBreakpointValue({
  md: 'flex',
 })


 const jsutifyStyle = useBreakpointValue({
  md: 'space-between',
  lg: 'space-evenly',
 })

 const widthStyle = useBreakpointValue({
  md: '35%',
  lg: '30%',
 })

 const marginStyle = useBreakpointValue({
  lg: 'auto'
 })

 const headerIcons = {
  display: displayStyle,
  alignItems: 'center',
  justifyContent: jsutifyStyle,
  minWidth: widthStyle,
  marginLeft: marginStyle
 }
 const alinear = {
  display: 'flex',
  alignContent: 'center'
 }

 const linkEdin = {
  height: '2.3rem',
  width: '2.3rem',
  backgroundImage: `url(${linkedinImage})`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundSize: '1.2rem'
 }

 const gitHub = {
  marginLeft: '1.5rem',
  height: '2.3rem',
  width: '2.3rem',
  backgroundImage: `url(${gitHubImage})`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundSize: '1.4rem'
 }

 const burbuja = {
  border: '0.12rem solid rgba(97, 218, 251, 0.2)',
  borderRadius: '100%',
  boxShadow: 'inset 0 -0.3rem 0.8rem rgba(97, 218, 251, 0.3)',
  padding: '1rem',
  _hover: {
   boxShadow: 'inset 0 -0.3rem 0.8rem #0772BB'
  },
  transition: 'all 0.3s ease-in-out',
  alignItems: 'center'
 }

 return (
  <Box>
   <i className='bi bi-list '
    style={menuStyle}
    onClick={handleMenuClick}></i>
   {showMenu ? (
    <div
     style={{
      position: 'fixed',
      top: 0,
      left: 0,
      height: '100vh',
      width: '100%',
      background: '#111320',
      zIndex: 9999,
      display: 'flex',
      justifyContent: 'center'
     }}
     onClick={handleMenuItemClick}
    >
     <ul
      style={{
       marginTop: '4rem',
       display: 'flex',
       flexDirection: 'column',
       gap: '2rem',
       listStyle: 'none'
      }}>

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
      <div
       style={headerIcons}>
       <div
        style={alinear}>
        <a
         onClick={handleMenuItemClick}
         href="https://www.linkedin.com/in/mateo-gomez-fleytas-579053221/" target="_blank" rel="noreferrer" style={{ ...burbuja, ...linkEdin }}></a>
        <a
         onClick={handleMenuItemClick}
         href="https://github.com/mateoargf" target="_blank" rel="noreferrer" style={{ ...burbuja, ...gitHub }}></a>
       </div>
      </div>
     </ul>
    </div>

   ) : null
   }
  </Box >
 );
};

export { MenuHamburguesa };