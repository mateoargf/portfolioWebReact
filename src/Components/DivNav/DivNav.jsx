import { Box, useBreakpointValue } from '@chakra-ui/react';
import React from 'react';
import { NavBar } from '../NavBar/NavBar'
import { ContactHeader } from '../ContactHeader/ContactHeader'

const DivNav = () => {

 const displayStyle = useBreakpointValue({
  base: 'none',
  md: 'flex',
 })

 const alignStyle = useBreakpointValue({
  md: 'center',
 })

 const divHeaderIcons = {
  display: displayStyle,
  alignItems: alignStyle,
  justifyContent: 'space-between',
  width: '80%'
 }

 return (
  <Box
   style={divHeaderIcons}>
   <NavBar />
   <ContactHeader />
  </Box>
 );
};

export { DivNav };