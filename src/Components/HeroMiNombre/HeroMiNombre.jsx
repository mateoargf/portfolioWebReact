// import React from 'react';
// import { Box, useBreakpointValue, chakra } from '@chakra-ui/react'

// const HeroMiNombre = () => {

//   const NavLink = chakra.a

//   const nombreWidthRes = useBreakpointValue({
//     base: '90%',
//     md: '',
//     lg: '30%',
//   })

//   const nombreMarginRes = useBreakpointValue({
//     base: '0 auto',
//     md: '',
//   })

//   const h2FontRes = useBreakpointValue({
//     base: '2.2rem',
//     lg: '2.5rem',
//   })

//   const h1FontRes = useBreakpointValue({
//     base: '3rem',
//     lg: '4rem',
//   })

//   const btnAlignRes = useBreakpointValue({
//     base: 'center',
//     md: '',
//   })

//   const btnFontRes = useBreakpointValue({
//     base: '1.2rem',
//     md: '0.8rem'
//   })

//   const btnHeightRes = useBreakpointValue({
//     base: '7vh',
//     sm: '6vh',
//     md: '2.3rem',
//   })

//   const btnWRes = useBreakpointValue({
//     base: '45%',
//     sm: '25%',
//     md: '6rem',
//   })

//   const btnMRes = useBreakpointValue({
//     base: '4rem',
//     md: 0,
//   })

//   const heroMiNombre = {
//     alignItems: 'center',
//     marginBottom: '17vh',
//     animation: 'invisible 2s linear',
//     width: nombreWidthRes,
//     margin: nombreMarginRes
//   }
//   const h2Style = {
//     marginBottom: '1rem',
//     fontSize: h2FontRes
//   }
//   const hStart ={
//     textAlign: 'left'
//   }
//   const h1Style = {
//     color: '#61DAFB',
//     fontSize: h1FontRes,
//     fontWeight: 'bold'
//   }
//   const spanNaranja = {
//     color: '#D76627',
//     fontSize: '4.5rem',
//     fontWeight: 'bold'
//   }

//   const heroDivDerecha = {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'end'
//   }

//   const btn = {
//     height: btnHeightRes,
//     width: btnWRes,
//     marginBottom: btnMRes,
//     background: '#D76627',
//     color: '#fff',
//     border: '0.12rem solid #fff',
//     outline: 'none',
//     boxShadow: 'none',
//     borderRadius: '0.25rem',
//     display: 'flex',
//     justifyContent: 'space-evenly',
//     alignItems: 'center',
//     alignSelf: btnAlignRes,
//     flexWrap: 'nowrap',
//     fontSize: btnFontRes,
//     fontFamily: 'Pridi, serif',
//     _hover: {
//       background: '#ffffffab',
//       color: '#D76627',
//       boxShadow: '0.1rem 0.1rem 0.8rem #ffffff34',
//     },
//     transition: 'all 0.3s ease-in-out'
//   }

//   const nube = {
//     _hover: {
//       color: '#D76627'
//     }
//   }

//   return (
//     <Box
//       style={heroMiNombre}>
//       <h2
//         style={{...h2Style,...hStart}}>Hola, Soy</h2>
//       <h1
//         style={{...h1Style, ...hStart}}>
//         <span
//           style={spanNaranja}> &lt; </span>Gómez Fleytas</h1>
//       <div
//         style={heroDivDerecha}>
//         <h1
//           style={h1Style}>Mateo <span
//             style={spanNaranja}>/&gt;</span></h1>
//         <h2 style={h2Style}>Desarrollador Web</h2>
//         <NavLink
//         href='#'
//           __css={btn}><i className='bi bi-cloud-arrow-down'
//             style={nube}></i> Resumen</NavLink>
//       </div>
//     </Box>
//   );
// };

// export { HeroMiNombre };