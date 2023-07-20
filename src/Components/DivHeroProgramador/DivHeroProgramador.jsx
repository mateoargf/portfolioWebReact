import { Box, useBreakpointValue } from '@chakra-ui/react';
import React from 'react';
import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import yo from '../../Assets/MateoRecortado.png'
import nodeJS from '../../Assets/icons8-node-js-240.png'
import jS from '../../Assets/icons8-javascript-480.png'
import react from '../../Assets/icons8-reaccionar-480.png'

const DivHeroProgramador = () => {
 const divProWRes = useBreakpointValue({
  base: '90%',
  md: '',
 })
 const divProMRes = useBreakpointValue({
  base: '0 auto',
  md: '',
 })

 const proHRes = useBreakpointValue({
  base: '50vh',
  md: '72vh',
  lg: '85vh',
 })

 const divHeroProgramador = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  alignItems: 'end',
  position: 'relative',
  animation: 'invisible 2s linear',
  borderRadius: '50%',
  objectFit: 'cover',
  width: divProWRes,
  margin: divProMRes
 }

 const programador = {
  height: proHRes,
  position: 'relative',
  zIndex: '-5',
  margin: '0 auto'
 }

 const logos = {
  position: 'absolute',
  backgroundColor: '#1E2235',
  borderRadius: '50%'
 }

 const nodeJSStyle = {
  base: {
   padding: '0.5rem',
   height: '3rem',
   top: '7rem',
   right: '1.5rem',
  },
  sm: {
   padding: '0.7rem',
   height: '3.75rem',
   top: '8rem',
   right: '5rem',
  },
  md: {
   padding: '0.7rem',
   height: '3.75rem',
   top: '6rem',
   right: '4rem'
  },
  lg: {
   padding: '0.98rem',
   height: '5rem',
   top: '11rem',
   right: '6.5rem'
  },
  xl: {
   padding: '1rem',
   height: '7rem',
   top: '12rem',
   right: '7rem'
  },
 }

 const jsStyle = {
  base: {
   padding: '1rem',
   height: '4.5rem',
   top: '13rem',
   right: '-1.4rem'
  },
  sm: {
   padding: '1.2rem',
   height: '5.5rem',
   top: '14.5rem',
   right: '1rem'
  },
  md: {
   padding: '1rem',
   height: '5.7rem',
   top: '12.5rem',
   right: '-0.1rem'
  },
  lg: {
   padding: '1.5rem',
   height: '8rem',
   top: '21rem',
   right: '-0.2rem'
  },
  xl: {
   padding: '2rem',
   height: '10rem',
   top: '25rem',
   right: '-0.5rem'
  }
 }

 const reactStyle = {
  base: {
   padding: '1.2rem',
   height: '6rem',
   top: '',
   right: '-2rem'
  },
  sm: {
   padding: '1.7rem',
   height: '8rem',
  },
  md: {
   padding: '1.5rem',
   height: '8rem',
  },
  lg: {
   padding: '2.5rem',
   height: '12rem',
  },
  xl: {
   padding: '3rem',
   height: '15rem'
  }
 }

 const flickerAnimation = keyframes`
   0% {
     opacity: 0.1;
     boxShadow: 0 -1.5rem 10rem rgba(214, 100, 39, 0.9);
   }
   2% {
     opacity: 1;
     boxShadow: 0 -1.5rem 10rem rgba(214, 100, 39, 0.9);
   }
   4% {
     opacity: 0.1;
     boxShadow: 0 -1.5rem 10rem rgba(214, 100, 39, 0.9);
   }
   8% {
     opacity: 1;
     boxShadow: 0 -1.5rem 10rem rgba(214, 100, 39, 0.9);
   }
   70% {
     opacity: 0.7;
     boxShadow: 0 -1.5rem 10rem rgba(214, 100, 39, 0.9);
   }
   100% {
     opacity: 1;
     boxShadow: 0 -1.5rem 10rem rgba(214, 100, 39, 0.73);
   }`

 const circuloHeroRes = {
  base: {
   height: '80%',
   width: '100%',
   borderWidth: '1.5rem',
   backgroundColor: '#111320',
   borderColor: '#D76627',
   borderRadius: '50%',
   position: 'absolute',
   zIndex: '-10',
   left: '50%',
   transform: 'translateY(5%) translateX(-50%)',
   boxShadow: '0 -1.5rem 10rem #d865286c'
  },
  sm: {
   height: '85%',
   width: '85%',
   borderWidth: '1.9rem',
   backgroundColor: '#111320',
   borderColor: '#D76627',
   borderRadius: '100%',
   position: 'absolute',
   zIndex: '-10',
   left: '50%',
   transform: 'translateY(5%) translateX(-50%)',
   boxShadow: '0 -1.5rem 10rem #d865286c'
  },
  md: {
   height: '90%',
   width: '90%',
   borderWidth: '2rem',
   transform: 'translateY(5%) translateX(-50%)',
   backgroundColor: '#111320',
   borderColor: '#D76627',
   borderRadius: '100%',
   position: 'absolute',
   zIndex: '-10',
   left: '50%',
   boxShadow: '0 -1.5rem 10rem #d865286c'
  },
  lg: {
   height: '90%',
   width: '90%',
   borderWidth: '3rem',
   transform: 'translateY(5%) translateX(-50%)',
   backgroundColor: '#111320',
   borderColor: '#D76627',
   borderRadius: '100%',
   position: 'absolute',
   zIndex: '-10',
   left: '50%',
   boxShadow: '0 -1.5rem 10rem #d865286c'
  }
 }

 const sizeLenguajes = useBreakpointValue({
  base: 'base',
  sm: 'sm',
  md: 'md',
  lg: 'lg',
  xl: 'xl'
 })
 const size = useBreakpointValue({
  base: 'base',
  sm: 'sm',
  md: 'md',
  lg: 'lg'
 })

 const StyledCirculoHero = styled.div` 
   animation: ${flickerAnimation} 2s linear infinite
  `

 return (
  <Box
   style={divHeroProgramador}>
   <img src={yo} alt="programador"
    style={programador} />
   <img src={nodeJS} alt="nodeJS" 
    style={{ ...logos, ...nodeJSStyle[sizeLenguajes], objectFit: 'cover' }} />
   <img src={jS} alt="JS"
    style={{ ...logos, ...jsStyle[sizeLenguajes], objectFit: 'cover' }} />
   <img src={react} alt="React"
    style={{ ...logos, ...reactStyle[sizeLenguajes], objectFit: 'cover' }} />
   <StyledCirculoHero
    style={{ ...circuloHeroRes[size] }}>
   </StyledCirculoHero>
  </Box>
 );
};

export { DivHeroProgramador };