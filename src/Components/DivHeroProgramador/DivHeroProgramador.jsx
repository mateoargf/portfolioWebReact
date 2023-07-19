import { Box, useBreakpointValue } from '@chakra-ui/react';
import React from 'react';
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

 const nodePRes = useBreakpointValue({
  base: '0.5rem',
  sm: '0.7rem',
  lg: '0.98rem',
 })
 const nodeHRes = useBreakpointValue({
  base: '2.7rem',
  sm: '3.75rem',
  lg: '5rem',
 })
 const nodeTRes = useBreakpointValue({
  base: '0.4rem',
  sm: '2.5rem',
  md: '5rem',
  lg: 'calc(22%*0.3)',
 })
 const nodeRRes = useBreakpointValue({
  base: '1.2rem',
  sm: '2.1rem',
  md: '3.3rem'
 })

 const jsTRes = useBreakpointValue({
  base: '11rem',
  sm: '14rem',
  md: '13.1rem',
  lg: 'calc(22%*2.1)'
 })
 const jsRRes = useBreakpointValue({
  base: '-2rem',
  sm: '-3rem',
  md: '-3rem',
  lg: '-4rem'
 })
 const jsPRes = useBreakpointValue({
  base: 'calc(0.7rem*0.9)',
  sm: 'calc(0.7rem*1.4)',
  md: 'calc(0.7rem*1.5)',
  lg: ' calc(0.7rem*2)'
 })
 const jsHRes = useBreakpointValue({
  base: '3.3rem',
  sm: '5rem',
  md: '6rem',
  lg: '9rem'
 })

 const reactPRes = useBreakpointValue({
  base: '1rem',
  md: '1.5rem',
  lg: '2rem'
 })
 const reactHRes = useBreakpointValue({
  base: '7rem',
  md: '8.5rem',
  lg: '13rem'
 })
 const reactTRes = useBreakpointValue({
  base: '',
 })
 const reactRRes = useBreakpointValue({
  base: '-2rem',
  md: '-1.5rem',
 })

 const divHeroProgramador = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  alignItems: 'end',
  position: 'relative',
  animation: 'invisible 2s linear',
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
  padding: nodePRes,
  height: nodeHRes,
  top: nodeTRes,
  right: nodeRRes
 }

 const jsStyle = {
  padding: jsPRes,
  height: jsHRes,
  top: jsTRes,
  right: jsRRes
 }

 const reactStyle = {
  padding: reactPRes,
  height: reactHRes,
  top: reactTRes,
  right: reactRRes
 }

 // const flickerAnimation = keyframes`
 //  0% {
 //    opacity: 0.1;
 //    boxShadow: 0 -1.5rem 10rem rgba(214, 100, 39, 0.9);
 //  }
 //  2% {
 //    opacity: 1;
 //    boxShadow: 0 -1.5rem 10rem rgba(214, 100, 39, 0.9);
 //  }
 //  4% {
 //    opacity: 0.1;
 //    boxShadow: 0 -1.5rem 10rem rgba(214, 100, 39, 0.9);
 //  }
 //  8% {
 //    opacity: 1;
 //    boxShadow: 0 -1.5rem 10rem rgba(214, 100, 39, 0.9);
 //  }
 //  70% {
 //    opacity: 0.7;
 //    boxShadow: 0 -1.5rem 10rem rgba(214, 100, 39, 0.9);
 //  }
 //  100% {
 //    opacity: 1;
 //    boxShadow: 0 -1.5rem 10rem rgba(214, 100, 39, 0.73);
 //  }`

 const circuloHero = {
  height: '80%',
  width: '78%',
  backgroundColor: '#111320',
  borderWidth: '2rem',
  borderColor: '#D76627',
  borderRadius: '50%',
  position: 'absolute',
  zIndex: '-10',
  left: '50%',
  transform: 'translateX(-50%)'
 }
 return (
  <Box
   style={divHeroProgramador}>
   <img src={yo} alt="programador"
    style={programador} />
   <img src={nodeJS} alt="nodeJS"
    style={{ ...logos, ...nodeJSStyle }} />
   <img src={jS} alt="JS"
    style={{ ...logos, ...jsStyle }} />
   <img src={react} alt="React"
    style={{ ...logos, ...reactStyle }} />
   <div
    style={circuloHero}></div>
  </Box>
 );
};

export { DivHeroProgramador };