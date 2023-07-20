// import { Box, useBreakpointValue } from '@chakra-ui/react';
// import { css } from '@emotion/react';
// import React from 'react';

// const Section2Cuadros = () => {

//   const commonDivSection2 = css`
//   display: flex;
//   justify-content: space-evenly;
//   align-items: center;
//   background-color: red;
// `;

//   const divSection2 = useBreakpointValue({
//     base: css`
//       ${commonDivSection2}
//       width: 90%;
//       margin: 0 auto;
// `,
//     md: css`
//   ${commonDivSection2}
//   width: 100%;
//   background-color: red;
//   `
//   });

//   const commonFlecha1Section2 = css`

//   background-color: yellow;
//   height: 5rem; 
//   width: 5rem;
//  `
//   const flecha1Section2 = useBreakpointValue({
//     lg: css`
//    ${commonFlecha1Section2}
//    display: flex;
//    align-items: center;
//   `
//   })



//   return (
//     <Box
//       css={divSection2}>
//       <Box
//         css={flecha1Section2}>

//       </Box>
//     </Box>
//   );
// };

// export { Section2Cuadros };