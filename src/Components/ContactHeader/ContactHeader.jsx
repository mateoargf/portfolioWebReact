import { Box, FormControl, chakra, useBreakpointValue } from '@chakra-ui/react';
import React from 'react';
import linkedinImage from '../../Assets/icons8-linkedin.svg';
import gitHubImage from '../../Assets/icons8-github.svg';

const ContactHeader = () => {
 const NavLink = chakra.a

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

 const formResponse = useBreakpointValue({
  md: '12rem',
  lg: '15rem'
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
  transition:'all 0.3s ease-in-out',
  alignItems: 'center'
 }

 const burbujaEmail = {
  display: 'flex',
  justifyContent: 'center',
  alignContent: 'center',
  border: '0.12rem solid rgba(97, 218, 251, 0.2)',
  borderRadius: '100%',
  boxShadow: 'inset 0 -0.3rem 0.8rem rgba(97, 218, 251, 0.3)',
  padding: '0.6rem',
  _hover: {
   boxShadow: 'inset 0 -0.3rem 0.8rem #0772BB'
  },
  transition:'all 0.3s ease-in-out',
  background: ' linear-gradient(20deg, #00C9FF, #00C9FF, #00C9FF, #00546b, #00546b)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  fontSize: '1rem'
 }

 const headerDivEmail = {
  height: '3.4rem',
  width: formResponse,
  border: '0.1rem solid #d76527dc',
  borderRadius: '0.3rem',
  marginLeft: '1rem',
  padding: '0.1rem 1.5rem',
  backgroundColor: '#111320',
  display: 'flex',
  flexWrap: 'nowrap',
  alignItems: 'center',
  justifyContent: 'space-evenly',
  _hover: {
   boxShadow: '0.1rem 0.1rem 0.8rem #D76627',
   color: '#61DAFB',
   backgroundColor: 'transparent'
  },
  transition:'all 0.3s ease-in-out'
 }

 const emailBtn = {
  color: '#61DAFB',
  backgroundColor: 'transparent'
 }

 return (
  <Box
   sx={headerIcons}>
   <div
    style={alinear}>
    <NavLink href="https://www.linkedin.com/in/mateo-gomez-fleytas-579053221/" target="_blank" rel="noreferrer" __css={{ ...burbuja, ...linkEdin }}></NavLink>
    <NavLink href="https://github.com/mateoargf" target="_blank" rel="noreferrer" __css={{ ...burbuja, ...gitHub }}></NavLink>
   </div>
   <FormControl
    as='form'
    action="mailto:mateogf@hotmail.com"
    sx={headerDivEmail}>
    <p>Contactame <button
     style={emailBtn}>
     <NavLink className="bi bi-envelope-fill"
      __css={burbujaEmail}>
     </NavLink>
    </button>
    </p>
   </FormControl>
  </Box>
 );
};

export { ContactHeader };