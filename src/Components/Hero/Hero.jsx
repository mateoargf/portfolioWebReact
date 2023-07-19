import { Box, useBreakpointValue } from '@chakra-ui/react';
import React from 'react';
import { HeroMiNombre } from '../HeroMiNombre/HeroMiNombre';
import { DivHeroProgramador } from '../DivHeroProgramador/DivHeroProgramador';

const Hero = () => {
 const justifyResponse = useBreakpointValue({
  md: 'space-evenly',
  lg: '',
 })
 const directionResponse = useBreakpointValue({
  base: 'column',
  sm: '',
 })
 const itemsResponse = useBreakpointValue({
  base: 'center',
  sm: '',
 })
 const textResponse = useBreakpointValue({
  base: 'center',
  sm: '',
 })

 const heroStyle = {
  borderBottom: '0.2rem solid #D76627',
  marginTop: '6rem'
 }
 const divHero = {
  width: '85vw',
  margin: '0 auto',
  display: 'flex',
  justifyContent: justifyResponse,
  flexDirection: directionResponse,
  alignItems: itemsResponse,
  textAlign: textResponse
 }
 return (
  <Box
   as='section'
   style={heroStyle}>
   <div
    style={divHero}>
    <HeroMiNombre />
    <DivHeroProgramador/>
   </div>
  </Box>
 );
};

export { Hero };