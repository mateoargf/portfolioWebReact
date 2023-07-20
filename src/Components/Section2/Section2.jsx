// import React from 'react'
// import { Box, useBreakpointValue } from '@chakra-ui/react';
// import { css } from '@emotion/react';
// import { Section2Titulo } from '../Section2Titulo/Section2Titulo'
// import { Section2Cuadros } from '../Section2Cuadros/Section2Cuadros'

// const Section2 = () => {
//  const section2Base = css`
//   background-color: #111320;
//   min-height: 90vh;
//   width: 85vw;
//   margin: 0 auto;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: space-evenly;
//   gap: 4rem;
//   z-index: 1;
// `
//  const section2Sm = css`
//  background-color: #111320;
//  min-height: 50vh;
//  width: 100vw;
//  margin: 0 auto;
//  display: flex;
//  flex-direction: column;
//  align-items: center;
//  justify-content: space-evenly;
//  gap: 0;
//  z-index: 1;
//  `
//  const section2Md = css`
//   background-color: #111320;
//   min-height: 50vh;
//   width: 100vw;
//   margin: 0;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: space-evenly;
//   gap: 0;
//   z-index: 1;
// `;

//  const section2Style = useBreakpointValue({
//   base: section2Base,
//   sm: section2Sm,
//   md: section2Md,
//  });
//  return (
//   <Box
//    css={section2Style}>
//    <Section2Titulo />
//    <Section2Cuadros />
//   </Box>
//  );
// };

// export { Section2 };