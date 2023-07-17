import { Box, useBreakpointValue } from '@chakra-ui/react';
import React from 'react';

const NavBar = () => {

 const displayStyle= useBreakpointValue({
  md:'flex',
 })

 const alignStyle = useBreakpointValue({
  md:'center',
 })

 const justifyStyle = useBreakpointValue({
  md:'space-between',
  lg:'space-evenly',
 })

 const widthStyle = useBreakpointValue({
  md:'80%',
  lg:'70%',
 })

 const divHeaderIcons ={
  display:displayStyle,
  alignItems:alignStyle,
  justifyContent:justifyStyle,
  width:widthStyle
 }

 return (
  <Box
  style={divHeaderIcons}>
  </Box>
 );
};

export { NavBar };