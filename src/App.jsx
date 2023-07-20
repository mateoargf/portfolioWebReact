import React from "react";
import { Box, ChakraProvider, extendTheme } from "@chakra-ui/react";
import "./Fonts.css";
import { css } from "@emotion/react";
import yo from './Assets/MateoRecortado.png'
import node from './Assets/icons8-node-js-240.png'
import js from './Assets/icons8-javascript-480.png'
import react from './Assets/icons8-reaccionar-480.png'
import flecha from './Assets/icons8-flecha-60.png'
import argentina from './Assets/icons8-argentina-96.png'
import utn from './Assets/LogoUTN_nvgsb.png'
import inglish from './Assets/icons8-gran-bretaña-96Recorte.png'
import html from './Assets/icons8-html5-480.png'
import cssImg from './Assets/icons8-css3-480.png'
import mongo from './Assets/icons8-mongodb-a-cross-platform-document-oriented-database-program-96 (1).png'
import ts from './Assets/icons8-typescript-480.png'
import git from './Assets/icons8-git-480.png'
import flechaLarga from './Assets/icons8-flecha-arriba-larga-50.png'
import linkImg from './Assets/icons8-linkedin.svg'
import github from './Assets/icons8-github.svg'
import { Header } from "./Components/Header/Header";
// import { Main } from "./Components/Main/Main";
import { FormularioFooter } from "./Components/FormularioFooter/FormularioFooter";
// TEXT


function App() {
  const theme = extendTheme({
    styles: {
      global: {
        body: {
          bg: "#111320",
          m: 0,
          p: 0,
          color: "#fff",
        },
      },
    },
    fonts: {
      heading: "Inconsolata, monospace",
      body: "Pridi, serif",
    },
    breakpoints: {
      base: "200px",
      sm: "768px",
      md: "1024px",
      lg: "1440px",
      xl: "1920px",
    },
    transition: {
      transition: "all 0.3s ease-in-out",
    },
  });
  const appCSS = css`
    @import url("https://fonts.googleapis.com/css2?family=Inconsolata&family=Pridi:wght@300&display=swap");

    * {
      margin: 0;
      padding: 0;
    }

    body {
      font-family: "Inconsolata", monospace;
      background-color: #111320;
    }

    /* comienza el header */

    header {
      padding-top: 2rem;
      justify-content: space-between;
      position: sticky;
      top: 0;
      z-index: 10;
      width: 85vw;
      margin: 0 auto;
      animation: invisible 2s linear;
    }

    nav a {
      text-decoration: none;
      color: #fff;
      padding: 0.2rem 0.8rem;
      margin-left: 0.5rem;
    }

    nav a:focus {
      border-bottom: 0.2rem solid #d76627;
    }

    nav a:hover {
      border-bottom: 0.2rem solid #d76627;
      color: #61dafb;
    }

    .headerDivEmail:hover {
      box-shadow: 0.1rem 0.1rem 0.8rem #d76627;
    }

    .headerDivEmail:hover p {
      color: #61dafb;
    }

    .burbuja:hover,
    .burbujaFooter:hover {
      box-shadow: inset 0 -0.3rem 0.8rem #0772bb;
    }

    .burbujaFooterWapp:hover {
      box-shadow: inset 0 -0.3rem 0.8rem #0ea991;
    }

    .heroDivDerecha button:hover,
    .divBtnFormulario button:hover {
      background-color: #ffffffab;
      color: #d76627;
      box-shadow: 0.1rem 0.1rem 0.8rem #ffffff34;
    }

    .heroDivDerecha button:hover i,
    .divBtnFormulario button:hover {
      color: #d76627;
    }

    .cuadroUnoSection2:hover span {
      text-shadow: 0 0 0.5rem #61dafb;
    }

    .cuadroDosSection2:hover span {
      text-shadow: 0 0 0.5rem #61dafb;
    }

    .bordeBottom:focus,
    .bordeBottom:hover {
      box-shadow: 0 0.8rem 0.8rem -0.8rem #00c8ffbd;
    }

    .bordeTodo:focus,
    .bordeTodo:hover {
      box-shadow: 0 0 0.8rem #00c8ffbd;
    }

    .div a {
      text-shadow: 0 -4rem 0 #d76627;
    }

    .row {
      display: flex;
      flex-direction: row;
      align-items: center;
    }

    .logo {
      height: 2rem;
      width: 2rem;
      font-family: "Pridi", serif;
      padding: 0.2rem;
      text-align: center;
      border: 0.15rem solid transparent;
      background: linear-gradient(#111320, #111320) padding-box,
        linear-gradient(135deg, #61dafb, #111320) border-box;
      border-radius: 5rem;
    }

    .logo span {
      background: linear-gradient(
        20deg,
        rgb(215, 102, 39),
        rgba(215, 102, 39, 0.1)
      );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .navABorde {
      border-bottom: 0.2rem solid #d76627;
    }

    .alinear {
      display: flex;
      align-items: center;
    }
    .contactA{
      gap: 2rem;
    }

    .linkEdin {
      height: 2.5rem;
      width: 2.5rem;
      background-image: url(${linkImg});
      background-repeat: no-repeat;
      background-position: center;
      background-size: 1.5rem;
    }

    .github {   
      height: 2.5rem;
      width: 2.5rem;   
      background-image: url(${github});
      background-repeat: no-repeat;
      background-position: center;
      background-size: 1.5rem;
    }

    .headerDivEmail {
      height: 2.5rem;
      border: 0.1rem solid #d76527dc;
      border-radius: 0.3rem;
      margin-left: 1rem;
      padding: 0.1rem 1.3rem;
      background-color: #111320;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
    }

    .headerDivEmail p {
      color: #fff;
    }

    .headerDivEmail button {
      color: #61dafb;
      background-color: transparent;
    }

    .linkEmail {
      margin-left: 1rem;
    }

    .linkEmail i {
      background: linear-gradient(
        20deg,
        #00c9ff,
        #00c9ff,
        #00c9ff,
        #00546b,
        #00546b
      );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      font-size: 1rem;
    }

    .burbuja {
      border: 0.12rem solid rgba(97, 218, 251, 0.2);
      border-radius: 50%;
      box-shadow: inset 0 -0.3rem 0.8rem rgba(97, 218, 251, 0.3);
      padding: 0.4rem;
    }

    nav a,
    .burbuja,
    .headerDivEmail,
    .headerDivEmail p,
    .heroDivDerecha button,
    .heroDivDerecha button i,
    .cuadroUnoSection2 span,
    .cuadroDosSection2 span,
    .divBtnFormulario button,
    .bordeBottom,
    .bordeTodo,
    .burbujaFooterWapp,
    .burbujaFooter,
    .divBack a {
      transition: all 0.3s ease-in-out;
    }

    .menuIcon {
      display: none;
    }

    /* comienza el hero */

    .hero {
      border-bottom: 0.2rem solid #d76627;
      margin-top: 6rem;
    }

    .divHero {
      width: 85vw;
      margin: 0 auto;
      display: flex;
      justify-content: space-evenly;
    }

    .heroMiNombre {
      align-self: flex-end;
      margin-bottom: 17vh;
      animation: invisible 2s linear;
    }

    .heroMiNombre h2 {
      font-size: 2.2rem;
      font-weight: 48;
    }

    .fuenteBlanca {
      color: #fff;
    }

    .heroMiNombre h1 {
      font-size: 3rem;
      font-weight: bold;
    }

    .heroDivDerecha {
      display: flex;
      flex-direction: column;
      align-items: end;
    }

    .heroCode {
      font-size: 4.5rem;
      font-weight: bold;
    }

    .fuenteNaranja {
      color: #d76627;
    }

    .fuenteCeleste {
      color: #61dafb;
    }

    .heroDivDerecha button {
      height: 2.3rem;
      width: 6rem;
      background-color: #d76627;
      color: #fff;
      border: 0.12rem solid #fff;
      outline: none;
      box-shadow: none;
      border-radius: 0.25rem;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      flex-wrap: nowrap;
      font-size: 0.8rem;
      font-family: "Pridi", serif;
    }

    .heroDivDerecha i {
      color: #fff;
    }

    .marginBtm {
      margin-bottom: 1rem;
    }

    .divHeroImagenes {
      display: flex;
    }

    .divHeroProgramador {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      align-items: end;
      position: relative;
      animation: invisible 2s linear;
      object-fit: cover;
    }

    .programador {
      height: 85vh;
      position: relative;
      z-index: -5;
      margin: 0 auto;
    }

    .circuloHero {
      height: 80%;
      width: 78%;
      background-color: #111320;
      border: 2rem solid #d76627;
      border-radius: 50%;
      position: absolute;
      z-index: -10;
      left: 50%;
      transform: translateX(-50%);
      animation: border-flicker 2.5s linear infinite;
    }

    .heroNodeJs,
    .heroJS,
    .heroReact {
      position: absolute;
      background-color: #1e2235;
      border-radius: 50%;
    }

    .heroNodeJs {
      top: 6rem;
      right: 4rem;
      padding: 0.7rem;
      height: 3.75rem;
    }

    .heroJS {
      top: 12.5rem;
      right: -0.1rem;
      padding: 1rem;
      height: 6rem;
    }

    .heroReact {
      padding: 1.5rem;
      height: 8rem;
    }

    /* comienza section 2 */

    .section2 {
      background-color: #111320;
      min-height: 90vh;
      width: 85vw;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-evenly;
      gap: 4rem;
      z-index: 1;
    }

    .flecha1Section2,
    .flecha2Section2 {
      display: none;
    }

    .section2 h2,
    .section3 h2 {
      margin-top: 5rem;
    }

    .section2 h2,
    .section3 h2,
    .section4 h2 {
      color: #61dafb;
      font-weight: 48;
      font-size: 2.3rem;
    }

    .section2 h2 span,
    .section3 h2 span,
    .section4 h2 span {
      color: #fff;
      font-size: 2.2rem;
    }

    .divSection2 {
      width: 100%;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
    }

    .divSection2 h3 {
      color: #d76627;
      font-size: 2rem;
    }

    .divSection2 span {
      color: #61dafb;
    }

    .section2ImgUno {
      height: calc(var(--section2HeightIcons) * 1.4);
    }

    .section2ImgDos {
      height: calc(var(--section2HeightIcons) * 1.6);
    }

    .section2ImgTres {
      height: var(--section2HeightIcons);
    }

    .divSection2 p {
      color: #fff;
      font-size: 1.3rem;
      text-align: center;
      line-height: 2rem;
    }

    .centradoSection2 {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-evenly;
    }

    .cuadroUnoSection2 {
      border: 0.15rem solid #61dafb;
      border-radius: 1rem;
      height: 17rem;
      width: 18rem;
      padding: 0 1rem 0 1rem;
    }

    .cuadroDosSection2 {
      border: 0.15rem solid #d76627;
      border-radius: 1rem;
      height: 22rem;
      width: 21rem;
      padding: 0 1rem 0 1rem;
    }

    /* cominza section 3*/

    .section3 {
      min-height: 90vh;
      width: 85vw;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-evenly;
    }

    .section3 h2 {
      margin-bottom: 5rem;
    }

    .containerFlexSection3 {
      display: flex;
      justify-content: space-evenly;
      width: 100%;
    }

    .containerGridSection3 {
      min-height: 60vh;
      display: grid;
      grid-template-columns: repeat(3, 3fr);
      grid-auto-rows: 5rem ;
      grid-gap: 1rem 2rem;
    }

    .cuadradosSection3 {
      height: 6rem;
      background-color: #1e2235;
      border-radius: 0.5rem;
      padding: 1.1rem;
      align-items: center;
      box-shadow: 0.4rem 0.4rem 0.2rem #0d0e1a;
    }

    /* comienza el section 4 */

    .section4 {
      min-height: 100vh;
      width: 85vw;
      margin: 0 auto;
    }

    .section4 h2 {
      text-align: center;
      margin-top: 7rem;
      margin-bottom: 5rem;
    }

    .timeLine {
      display: grid;
      grid-template-columns: 1fr 0.2rem 1fr;
      min-height: 100vh;
      grid-gap: 0 7rem;
    }

    .timeLineComponent {
      height: 20rem;
      margin-top: 2rem;
      display: flex;
      flex-direction: column;
    }

    .componentLeft {
      margin-left: 5rem;
    }

    .anioContainerRight {
      width: 100%;
      display: flex;
    }

    .anioContainerLeft {
      width: 100%;
      display: flex;
      justify-content: flex-end;
    }

    .anioUno {
      clip-path: polygon(100% 0%, 85% 50%, 100% 100%, 0 100%, 0% 50%, 0 0);
    }

    .anioDos {
      clip-path: polygon(100% 0, 100% 50%, 100% 100%, 15% 100%, 0 50%, 15% 0);
    }

    .anioContainerRight,
    .section4H3,
    .letraMaquinaEscribir {
      margin-bottom: 1rem;
    }

    .anio {
      height: 1.3rem;
      width: 4rem;
      background-color: #f17128;
      color: #fff;
      font-weight: 80;
      font-size: 1rem;
      padding: 0.1rem 0.5rem;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .tiuloCelesteSection4 {
      color: #61dafb;
      font-size: 1.5rem;
      font-weight: 38;
    }

    .tituloBlancoSection4 {
      color: #fff;
      font-size: 1.6rem;
      font-weight: 38;
    }

    .blancoResponabilidades {
      color: #a7a8ad;
      font-size: 1.2rem;
      font-weight: 15;
      letter-spacing: 0.1rem;
    }

    .letraMaquinaEscribir {
      font-family: "Pridi", serif;
    }

    .timeLineComponent ul {
      margin-left: 1rem;
      color: #e4e4e6;
      font-size: 1.2rem;
      font-weight: 15;
      letter-spacing: 0.1rem;
    }

    .timeLineMiddle {
      position: relative;
      background-color: #f17128;
    }

    .timeLinePoint {
      margin-top: 2rem;
      height: 1.5rem;
      width: 1.5rem;
      position: absolute;
      background-color: #111320;
      border: 0.2rem solid #f17128;
      border-radius: 50%;
      left: 50%;
      transform: translateX(-50%);
    }

    /* comienza el footer */

    footer {
      margin-top: 6rem;
      display: flex;
      flex-direction: column;
      position: relative;
      overflow: hidden;
    }

    footer section {
      min-height: 70vh;
      width: 90vw;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-evenly;
    }

    footer section h1 {
      color: #d76627;
      font-size: 3.3rem;
    }

    footer section h1 span {
      color: #fff;
    }

    .formulario {
      min-height: 90vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-evenly;
    }

    .bordeBottom,
    .bordeTodo {
      background-color: #111320;
      color: #a7a8ad;
      border: none;
      font-family: "Pridi", serif;
      font-size: 1.2rem;
      font-weight: 15;
      letter-spacing: 0.1rem;
      width: 30vw;
      padding: 0.5rem 0.5rem 0.3rem 0.6rem;
      outline: none;
    }

    .bordeBottom {
      border-bottom: 0.15rem solid transparent;
      background: linear-gradient(#111320, #111320) padding-box,
        linear-gradient(45deg, #00c8ffbd, #00c8ffb6, #00c8ffbd, #00c8ffb6)
          border-box;
    }

    .bordeTodo {
      padding-top: 1rem;
      padding-bottom: 20vh;
      border: 0.15rem solid transparent;
      border-radius: 0.5rem;
      background: linear-gradient(#111320, #111320) padding-box,
        linear-gradient(45deg, #00c8ffbd, #00c8ffb6, #00c8ffbd, #00c8ffb6)
          border-box;
    }

    .divBtnFormulario {
      width: 100%;
      display: flex;
      justify-content: end;
    }

    .divBtnFormulario button {
      height: 2.5rem;
      width: 7rem;
      background-color: #d76627;
      color: #fff;
      border: 0.12rem solid #fff;
      outline: none;
      border-radius: 0.30rem;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      font-size: 0.8rem;
      font-family: "Pridi", serif;
      letter-spacing: 0.01rem;
    }

    .orUno {
      color: #fff;
      font-size: 2.3rem;
      font-weight: 48;
      margin-top: 3rem;
    }

    .orDos {
      color: #d76627;
      font-size: 2.4rem;
      font-weight: 48;
    }

    .orUno,
    .orDos {
      margin-bottom: 1rem;
    }

    .orDos span {
      color: #fff;
    }

    .divBurbujasFooter {
      width: 19%;
      display: flex;
      justify-content: space-evenly;
    }

    .burbujaFooterWapp {
      border: 0.12rem solid rgba(14, 169, 145, 0.2);
      border-radius: 50%;
      box-shadow: inset 0 -0.3rem 0.8rem rgba(14, 169, 145, 0.3);
      padding: 0.9rem;
      color: #1bcd6b;
      font-size: 1.9rem;
    }

    .burbujaFooter {
      border: 0.12rem solid rgba(97, 218, 251, 0.2);
      border-radius: 50%;
      box-shadow: inset 0 -0.3rem 0.8rem rgba(97, 218, 251, 0.3);
      padding: 0.9rem;
      color: #61dafc;
      font-size: 1.9rem;
    }

    .divBack {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: end;
      margin-bottom: 1rem;
    }

    .subDivBack {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .divBack img {
      height: 2rem;
    }

    .divBack a {
      color: #d76627;
      text-decoration: none;
      border-bottom: 0.1rem solid #d76627;
    }

    .circuloFooterUno {
      position: absolute;
      height: 50rem;
      width: 50rem;
      border: 2rem solid #1e2235;
      border-radius: 50%;
      z-index: -10;
      left: -35%;
    }

    .circuloFooterDos {
      position: absolute;
      height: 50rem;
      width: 50rem;
      border: 2rem solid #1e2235;
      border-radius: 50%;
      z-index: -10;
      left: 72%;
      top: 40%;
    }

    /* comienza animaciones */

    @keyframes invisible {
      0% {
        opacity: 0;
      }

      10% {
        opacity: 0.1;
      }

      25% {
        opacity: 0.2;
      }

      50% {
        opacity: 0.5;
      }

      75% {
        opacity: 0.7;
      }

      80% {
        opacity: 0.8;
      }

      90% {
        opacity: 0.9;
      }

      100% {
        opacity: 1;
      }
    }

    @keyframes border-flicker {
      0% {
        opacity: 0.1;
        -webkit-box-shadow: 0 0 2rem 0.4rem rgba(214, 100, 39, 0.9);
        -moz-box-shadow: 0 0 2rem 0.4rem rgba(214, 100, 39, 0.9);
        box-shadow: 0 -1.5rem 10rem #d865286c;
      }

      2% {
        opacity: 1;
        -webkit-box-shadow: 0 0 2rem 0.4rem rgba(214, 100, 39, 0.9);
        -moz-box-shadow: 0 0 2rem 0.4rem rgba(214, 100, 39, 0.9);
        box-shadow: 0 -1.5rem 10rem #d865286c;
      }

      4% {
        opacity: 0.1;
        -webkit-box-shadow: 0 0 2rem 0.4rem rgba(214, 100, 39, 0.9);
        -moz-box-shadow: 0 0 2rem 0.4rem rgba(214, 100, 39, 0.9);
        box-shadow: 0 -1.5rem 10rem #d66427e6;
      }

      8% {
        opacity: 1;
        -webkit-box-shadow: 0 0 2rem 0.4rem rgba(214, 100, 39, 0.9);
        -moz-box-shadow: 0 0 2rem 0.4rem rgba(214, 100, 39, 0.9);
        box-shadow: 0 -1.5rem 10rem #d66427e6;
      }

      70% {
        opacity: 0.7;
        -webkit-box-shadow: 0 0 2rem 0.4rem rgba(214, 100, 39, 0.9);
        -moz-box-shadow: 0 0 2rem 0.4rem rgba(214, 100, 39, 0.9);
        box-shadow: 0 -1.5rem 10rem #d66427e6;
      }

      100% {
        opacity: 1;
        -webkit-box-shadow: 0 0 2rem 0.4rem rgba(214, 100, 39, 0.73);
        -moz-box-shadow: 0 0 2rem 0.4rem rgba(214, 100, 39, 0.73);
        box-shadow: 0 -1.5rem 10rem #d66427e6;
      }
    }

    /* comienza media */

    @media screen and (max-width: 767px) {
      body {
        width: 100vw;
      }

      /* header */

      header {
        justify-content: space-between;
        width: 85vw;
        margin: 0 auto;
      }

      .ocultarPhone {
        display: none;
      }

      .menuIcon {
        display: flex;
        font-size: 2.5rem;
        color: #fff;
      }

      /* hero */

      .divHero {
        flex-direction: column;
        align-items: center;
        text-align: center;
        width: 85vw;
        margin: 0 auto;
      }

      .heroMiNombre {
        width: 90%;
        margin: 0 auto;
      }

      .heroDivDerecha button {
        align-self: center;
        font-size: 150%;
        height: 7vh;
        width: 50%;
        margin-bottom: 4rem;
      }

      .divHeroProgramador {
        width: 90%;
        margin: 0 auto;
      }

      .programador {
        height: 50vh;
        position: relative;
        left: 50%;
        transform: translateX(-50%);
      }
      // 767px = base
      .heroNodeJs,
      .heroJS,
      .heroReact {
        position: absolute;
        background-color: #1e2235;
        border-radius: 50%;
      }

      .heroNodeJs {
        top: 7rem;
        right: 1.5rem;
        padding: 0.5rem;
        height: 3rem;
      }

      .heroJS {
        padding: 1rem;
        height: 4.5rem;
        top: 13rem;
        right: -1.4rem;
      }

      .heroReact {
        padding: 1.2rem;
        height: 6rem;
        right: -2rem;
      }

      .circuloHero {
        height: 80%;
        width: 100%;
        border-width: 1.5rem;
      }

      /* comienza section2 */

      .section2 {
        width: 100vw;
        min-height: 50vh;
        gap: 0;
      }

      .section2 h2,
      .section3 h2 {
        margin-bottom: 2rem;
      }

      .divSection2 {
        width: 90%;
        margin: 0 auto;
      }

      .flecha1Section2,
      .flecha2Section2 {
        display: flex;
        align-items: center;
      }

      .flecha1Section2 img,
      .flecha2Section2 img {
        height: 2rem;
      }

      .flecha2Section2 {
        transform: rotate(180deg);
      }

      .cuadroDosSection2 {
        margin-right: 1rem;
      }

      .cuadroDosSection2,
      .cuadroUnoSection2 {
        width: 13rem;
        height: 13rem;
      }

      .cuadroDosSection2 h3,
      .cuadroUnoSection2 h3 {
        font-size: 0.7rem;
      }

      .cuadroDosSection2 p,
      .cuadroUnoSection2 p {
        font-size: 0.7rem;
      }

      .cuadroDosSection2 img,
      .cuadroUnoSection2 img {
        height: 3.5rem;
      }

      /* comienza section3 */

      .containerFlexSection3 {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 85%;
        gap: 5rem;
      }

      .containerGridSection3 {
        min-height: 50%;
        display: grid;
        grid-template-columns: repeat(3, 3fr);
        grid-auto-rows: 0.7rem;
        grid-gap: 3.5rem 1.5rem;
      }

      .cuadradosSection3 {
        height: 3.6rem;
        padding: 0.85rem;
      }

      /* comienza section4 */

      .timeLine {
        height: 120vh;
        grid-template-columns: 0.2rem 1fr;
        min-height: 70vh;
        grid-gap: 0 3rem;
        grid-template-areas:
          "line event1"
          "line2 event2"
          "line3 event3";
      }

      .linea {
        grid-area: line;
      }

      .lineaDos {
        grid-area: line2;
      }

      .lineaTres {
        grid-area: line3;
      }

      .event1 {
        grid-area: event1;
      }

      .event2 {
        grid-area: event2;
      }

      .event3 {
        grid-area: event3;
      }

      .vacio {
        grid-area: event0;
      }

      .timeLineComponent h3 {
        font-size: 1.5rem;
      }

      .componentLeft {
        margin-left: 0;
      }

      .anioContainerLeft {
        justify-content: flex-start;
      }

      .letraMaquinaEscribir,
      .letraMaquinaEscribir li {
        font-size: 0.9rem;
      }

      /* comienza el footer */
      footer{
        margin-top: 12rem;
      }

      footer section h1 {
        font-size: 2rem;
        text-align: center;
      }

      footer section h2 {
        text-align: center;
      }

      .bordeBottom,
      .bordeTodo {
        font-size: 1.2rem;
        width: 100%;
      }

      .bordeTodo {
        padding-bottom: 40%;
      }

      .divBtnFormulario {
        justify-content: center;
      }

      .divBtnFormulario button {
        width: 100%;
      }

      .orUno {
        font-size: 1.8rem;
        margin-top: 5rem;
      }

      .orDos {
        font-size: 1.5rem;
      }

      .divBurbujasFooter {
        width: 70%;
        margin-bottom: 1rem;
      }

      .circuloFooterDos {
        height: 50rem;
        width: 50rem;
        border: 1.5rem solid #1e2235;
        border-radius: 50%;
        z-index: -10;
        left: 50%;
        top: 76%;
        transform: translateX(-50%);
      }
    }

    @media screen and (min-width: 768px) and (max-width: 1023px) {
      /* header */

      header {
        justify-content: space-between;
        width: 85vw;
        margin: 0 auto;
      }

      .ocultarPhone {
        display: none;
      }

      .menuIcon {
        display: flex;
        font-size: 2.5rem;
        color: #fff;
      }

      /* hero */

      .divHero {
        flex-direction: column;
        align-items: center;
        width: 85vw;
        margin: 0 auto;
      }

      .heroMiNombre {
        width: 90%;
        margin: 0 auto;
      }

      .heroDivDerecha button {
        align-self: center;
        font-size: 150%;
        height: 6vh;
        width: 27%;
        margin-bottom: 4rem;
      }

      .divHeroProgramador {
        width: 90%;
        margin: 0 auto;
      }

      .programador {
        height: 50vh;
        position: relative;
        left: 50%;
        transform: translateX(-50%);
      }

      // min 768px = sm

      .heroNodeJs,
      .heroJS,
      .heroReact {
        position: absolute;
        background-color: #1e2235;
        border-radius: 50%;
      }

      .heroNodeJs {
        top: 7rem;
        right: 5rem;
      }

      .heroJS {
        top: 13rem;
        right: 1rem;
        padding: 1rem;
        height: 5.5rem;
      }

      .heroReact {
        right: -1rem;
        padding: 1.7rem;
        height: 10rem;
      }

      .circuloHero {
        height: 85%;
        width: 85%;
        border-width: 1.9rem;
      }

      /* comienza section2 */

      .section2 {
        width: 100vw;
        min-height: 50vh;
        gap: 0;
      }

      .section2 h2,
      .section3 h2 {
        margin-top: 0;
      }

      .divSection2 {
        width: 90%;
        margin: 0 auto;
      }

      .flecha1Section2,
      .flecha2Section2 {
        display: flex;
        align-items: center;
      }

      .flecha1Section2 img,
      .flecha2Section2 img {
        height: 2rem;
      }

      .flecha2Section2 {
        transform: rotate(180deg);
      }

      .cuadroDosSection2 {
        margin-right: 1rem;
      }

      .cuadroDosSection2,
      .cuadroUnoSection2 {
        width: 13rem;
        height: 13rem;
      }

      .cuadroDosSection2 h3,
      .cuadroUnoSection2 h3 {
        font-size: 1rem;
      }

      .cuadroDosSection2 p,
      .cuadroUnoSection2 p {
        font-size: 0.8rem;
      }

      .cuadroDosSection2 img,
      .cuadroUnoSection2 img {
        height: 5rem;
      }

      /* comienza section3 */

      .containerFlexSection3 {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 85%;
        min-height: 70vh;
        max-height: 100vh;
        gap: 9rem;
        margin-bottom: 5rem;
      }

      .containerGridSection3 {
        min-height: 50%;
        display: grid;
        grid-template-columns: repeat(3, 3fr);
        grid-auto-rows: 0.7rem;
        grid-gap: 6rem 2rem;
      }

      /* comienza section4 */

      .timeLine {
        height: 120vh;
        grid-template-columns: 0.2rem 1fr;
        min-height: 70vh;
        grid-gap: 0 3rem;
        grid-template-areas:
          "line event1"
          "line2 event2"
          "line3 event3";
      }

      .linea {
        grid-area: line;
      }

      .lineaDos {
        grid-area: line2;
      }

      .lineaTres {
        grid-area: line3;
      }

      .event1 {
        grid-area: event1;
      }

      .event2 {
        grid-area: event2;
      }

      .event3 {
        grid-area: event3;
      }

      .vacio {
        grid-area: event0;
      }

      .timeLineComponent h3 {
        font-size: 1.8rem;
      }

      .componentLeft {
        margin-left: 0;
      }

      .anioContainerLeft {
        justify-content: flex-start;
      }

      .letraMaquinaEscribir,
      .letraMaquinaEscribir li {
        font-size: 1.2rem;
      }

      /* comienza el footer */

      footer section h1 {
        font-size: 2.5rem;
        text-align: center;
      }

      footer section h2 {
        text-align: center;
      }

      .bordeBottom,
      .bordeTodo {
        font-size: 1.45rem;
        width: 60vw;
      }

      .bordeTodo {
        padding-bottom: 40%;
      }

      .divBtnFormulario {
        justify-content: center;
      }

      .divBtnFormulario button {
        width: 10rem;
      }

      .orUno {
        font-size: 2rem;
        margin-top: 7rem;
      }

      .orDos {
        font-size: 1.7rem;
      }

      .divBurbujasFooter {
        width: 30%;
        margin-bottom: 1rem;
      }

      .circuloFooterDos {
        height: 50rem;
        width: 50rem;
        border: 1.5rem solid #1e2235;
        border-radius: 50%;
        z-index: -10;
        left: 50%;
        top: 76%;
        transform: translateX(-50%);
      }
    }

    @media screen and (min-width: 1024px) and (max-width: 1439px) {
      .divHeaderIcons {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 80%;
      }

      /* hero */

      .programador {
        height: 70vh;
        position: relative;
        left: 50%;
        transform: translateX(-50%);
      }

      .heroNodeJs {
        right: calc(var(--heroLenguajesRight) * 0.8);
      }

      .heroJS {
        right: calc(var(--heroLenguajesRight) * -0.4);
      }

      .circuloHero {
        height: 90%;
        width: 90%;
        border-width: 2rem;
        transform: translateY(10%) translateX(-50%);
      }
    }
    

    @media screen and (min-width: 1440px) and (max-width: 1919px) {
      /* header */

      header {
        width: 85vw;
        height: 5rem;
        font-size: 1.3rem;
      }

      header nav {
        font-size: 1.5rem;
        margin-left: 1.2rem;
      }

      .divHeaderIcons {
        width: 70%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
      }

      .logo {
        height: 2.5rem;
        width: 2.5rem;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .headerIcons {
        margin-left: auto;
      }

      .headerDivEmail {
        height: 3rem;
      }

      /* hero */

      .divHero {
        justify-content: unset;
      }

      .heroMiNombre {
        width: 30%;
        margin-right: 10rem;
      }

      .heroMiNombre h2 {
        font-size: 2.5rem;
      }

      .heroMiNombre h1 {
        font-size: 4rem;
      }

      .programador {
        height: 70vh;
        position: relative;
        left: 50%;
        transform: translateX(-50%);
      }

      // min 1440 px = lg/xl

      .heroNodeJs {
        right: 5rem;
        top: 11rem;
        height: 5rem;
        padding: 0.98rem;
      }

      .heroJS {
        top: 19rem;
        right: 0.5rem;
        padding: 1.5rem;
        height: 7.5rem;
      }

      .heroReact {
        right: -1rem;
        padding: 2.5rem;
        height: 12rem;
      }

      .circuloHero {
        height: 90%;
        width: 90%;
        border-width: 3rem;
        transform: translateY(10%) translateX(-50%);
      }

      /* section2 */
      .section2{
        justify-content: space-between;
        align-content: space-around;
      }

      .divSection2{
        gap: 2.5rem;
      }

      .section2 h2,
      .section2 h2 span,
      .section3 h2,
      .section3 h2 span,
      .section4 h2,
      .section4 h2 span {
        font-size: 3rem;
      }

      .cuadroUnoSection2 {
        height: 25rem;
        width: 25rem;
        border-radius: 1rem;
        border-width: 0.2rem;
      }

      .cuadroDosSection2 {
        height: 30rem;
        width: 30rem;
        border-radius: 1rem;
        border-width: 0.2rem;
      }

      .cuadroUnoSection2 h3,
      .cuadroDosSection2 h3 {
        font-size: 2.2rem;
      }

      .cuadroUnoSection2 img {
        height: 10rem;
      }

      .cuadroDosSection2 img {
        height: 8.5rem;
      }

      .cuadroUnoSection2 p,
      .cuadroDosSection2 p {
        font-size: 1.7rem;
      }

      /* section3 */

      .containerFlexSection3 {
        min-height: 30vh;
        margin-bottom: 5rem;
      }

      .containerGridSection3 {
        grid-auto-rows: 0.7rem;
        grid-gap: 8.2rem 2rem;
      }

      .cuadradosSection3 {
        height: 8rem;
        border-radius: 10%;
        padding: 1.8rem;
      }

      /* section4 */
      .anioContainerRight p,
      .anioContainerLeft p {
        font-size: 1.5rem;
        width: 6rem;
        height: 2rem;
      }

      .timeLineComponent h3,
      .timeLineComponent h3 span {
        font-size: 2.2rem;
        font-weight: bold;
      }

      .timeLineComponent p {
        font-size: 1.8rem;
      }

      .timeLineComponent ul li {
        margin-left: 0.9rem;
        font-size: 1.8rem;
        line-height: unset;
        font-weight: 15;
      }

      /* footer */

      footer {
        margin-top: 15rem;
      }

      footer section h1 {
        font-size: 4.5rem;
        margin-bottom: 2rem;
      }

      .bordeBottom,
      .bordeTodo {
        font-size: 1.2rem;
        width: 30vw;
      }

      .bordeTodo input,
      .bordeBottom input {
        font-size: 1.2rem;
        border-bottom-width: 0.2rem;
      }

      .divBtnFormulario {
        width: 100%;
        display: flex;
        justify-content: end;
      }

      .divBtnFormulario button {
        width: 10rem;
        height: 3.3rem;
        font-size: 1.1rem;
      }

      .orUno {
        font-size: 3.5rem;
      }

      .orDos {
        font-size: 3rem;
        margin-bottom: 2rem;
      }

      .burbujaFooterWapp {
        padding: 1.5rem;
        font-size: 3rem;
      }

      .burbujaFooter {
        padding: 1.5rem;
        font-size: 3rem;
      }

      .divBack img {
        height: 3rem;
      }

      .divBack a {
        font-size: 1.5rem;
      }

      .circuloFooterUno {
        height: 90rem;
        width: 90rem;
        border-width: 3.3rem;
        left: -55%;
      }

      .circuloFooterDos {
        height: 90rem;
        width: 90rem;
        border-width: 3.3rem;
      }
    }
    @media screen and (min-width: 1920px) and (max-width: 2000px) {
      /* header */

      header {
        width: 85vw;
        height: 5rem;
        font-size: 1.3rem;
      }

      header nav {
        font-size: 1.5rem;
        margin-left: 1.2rem;
      }

      .divHeaderIcons {
        width: 70%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
      }

      .logo {
        height: 2.5rem;
        width: 2.5rem;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .headerIcons {
        margin-left: auto;
      }

      .headerDivEmail {
        height: 3rem;
      }

      /* hero */

      .divHero {
        justify-content: unset;
      }

      .heroMiNombre {
        width: 30%;
        margin-right: 10rem;
      }

      .heroMiNombre h2 {
        font-size: 2.5rem;
      }

      .heroMiNombre h1 {
        font-size: 4rem;
      }

      .programador {
        height: 70vh;
        position: relative;
        left: 50%;
        transform: translateX(-50%);
      }

      .heroNodeJs {
        right: 7rem;
        top: 12rem;
        height: 5rem;
        padding: 1rem;
      }

      .heroJS {
        top: 20rem;
        right: 1rem;
        padding: 2rem;
        height: 8rem;
      }

      .heroReact {
        right: -1rem;
        padding: 3rem;
        height: 15rem;
      }  
      
      .circuloHero {
        height: 90%;
        width: 90%;
        border-width: 3rem;
        transform: translateY(10%) translateX(-50%);
      }

      /* section2 */

      .section2 h2,
      .section2 h2 span,
      .section3 h2,
      .section3 h2 span,
      .section4 h2,
      .section4 h2 span {
        font-size: 3rem;
      }

      .cuadroUnoSection2 {
        height: 30rem;
        width: 27rem;
        border-radius: 1rem;
        border-width: 0.2rem;
      }

      .cuadroDosSection2 {
        height: 35rem;
        width: 32rem;
        border-radius: 1rem;
        border-width: 0.2rem;
      }

      .cuadroUnoSection2 h3,
      .cuadroDosSection2 h3 {
        font-size: 2.9rem;
      }

      .cuadroUnoSection2 img {
        height: 9rem;
      }

      .cuadroDosSection2 img {
        height: 12rem;
      }

      .cuadroUnoSection2 p,
      .cuadroDosSection2 p {
        font-size: 2.2rem;
      }

      /* section3 */

      .containerFlexSection3 {
        min-height: 40vh;
        margin-bottom: 5rem;
      }

      .containerGridSection3 {
        grid-auto-rows: 0.3rem;
        grid-gap: 14rem 1.5rem;
      }

      .cuadradosSection3 {
        height: 8rem;
        border-radius: 10%;
        padding: 1.8rem;
      }

      /* section4 */
      .anioContainerRight p,
      .anioContainerLeft p {
        font-size: 1.5rem;
        width: 6rem;
        height: 2rem;
      }

      .timeLineComponent h3,
      .timeLineComponent h3 span {
        font-size: 2.2rem;
        font-weight: bold;
      }

      .timeLineComponent p {
        font-size: 1.8rem;
      }

      .timeLineComponent ul li {
        margin-left: 0.9rem;
        font-size: 1.8rem;
        line-height: unset;
        font-weight: 15;
      }

      /* footer */

      footer {
        margin-top: 7rem;
      }

      footer section h1 {
        font-size: 4.5rem;
        margin-bottom: 2rem;
      }

      .bordeBottom,
      .bordeTodo {
        font-size: 1.2rem;
        width: 30vw;
      }

      .bordeTodo input,
      .bordeBottom input {
        font-size: 1.2rem;
        border-bottom-width: 0.2rem;
      }

      .divBtnFormulario {
        width: 100%;
        display: flex;
        justify-content: end;
      }

      .divBtnFormulario button {
        width: 20%;
        height: 3.5rem;
        font-size: 1.1rem;
      }

      .orUno {
        font-size: 3.5rem;
      }

      .orDos {
        font-size: 3rem;
        margin-bottom: 2rem;
      }

      .burbujaFooterWapp {
        padding: 1.5rem;
        font-size: 3rem;
      }

      .burbujaFooter {
        padding: 1.5rem;
        font-size: 3rem;
      }

      .divBack img {
        height: 3rem;
      }

      .divBack a {
        font-size: 1.5rem;
      }

      .circuloFooterUno {
        height: 90rem;
        width: 90rem;
        border-width: 3.3rem;
        left: -55%;
      }

      .circuloFooterDos {
        height: 90rem;
        width: 90rem;
        border-width: 3.3rem;
      }
    }
    }
  `;
  return (
    <>
      <ChakraProvider theme={theme}>
        {/* <Header />
        <Main /> */}
        <Box 
        css={appCSS}>
        <Header/>
        <main>
          <section className="hero">
            <div className="divHero">
              <div className="heroMiNombre">
                <h2 className="fuenteBlanca marginBtm">Hola, Soy</h2>
                <h1 className="fuenteCeleste">
                  <span className="fuenteNaranja heroCode">&lt; </span>Gómez
                  Fleytas
                </h1>
                <div className="heroDivDerecha">
                  <h1 className="fuenteCeleste marginBtm">
                    Mateo <span className="fuenteNaranja heroCode">/&gt;</span>
                  </h1>
                  <h2 className="fuenteBlanca marginBtm">Desarrollador Web</h2>
                  <button>
                    <i className="bi bi-cloud-arrow-down"></i> Resumen
                  </button>
                </div>
              </div>
              <div className="divHeroProgramador">
                <img
                  src={yo}
                  alt="programador"
                  className="programador"
                />
                <img
                  className="heroNodeJs"
                  src={node}
                  alt="nodeJS"
                />
                <img
                  className="heroJS"
                  src={js}
                  alt="javaScript"
                />
                <img
                  className="heroReact"
                  src={react}
                  alt="React"
                />
                <div className="circuloHero"></div>
              </div>
            </div>
          </section>
          <section className="section2">
            <h2>
              SobreMí<span>()</span>
            </h2>
            <div className="divSection2">
              <div className="flecha1Section2">
                <img src={flecha} alt="flecha" />
              </div>
              <div className="cuadroUnoSection2 centradoSection2 ocultarPhone">
                <h3>
                  <span>&lt;</span>Nacionalidad <span> / &gt;</span>
                </h3>
                <img
                  className="section2ImgUno"
                  src={argentina}
                  alt="argentina"
                />
                <p>Argentino</p>
              </div>
              <div className="cuadroDosSection2 centradoSection2">
                <h3>
                  <span>&lt; </span>Formación <span>/&gt;</span>
                </h3>
                <img
                  className="section2ImgDos"
                  src={utn}
                  alt="UTN"
                />
                <p>Universidad Tecnológica Nacional</p>
              </div>
              <div className="cuadroUnoSection2 centradoSection2">
                <h3>
                  <span>&lt; </span>Lenguajes <span>/&gt;</span>
                </h3>
                <img
                  className="section2ImgTres"
                  src={inglish}
                  alt="ingles"
                />
                <p>Intermedio</p>
              </div>
              <div className="flecha2Section2">
                <img src={flecha} alt="" />
              </div>
            </div>
          </section>
          <section className="section3">
            <h2>
              Habilidades<span>()</span>
            </h2>
            <div className="containerFlexSection3">
              <div className="containerGridSection3">
                <img
                  className="cuadradosSection3"
                  src={html}
                  alt="HTML5"
                />
                <img
                  className="cuadradosSection3"
                  src={cssImg}
                  alt="CSS3"
                />
                <img
                  className="cuadradosSection3"
                  src={js}
                  alt="JavaScript"
                />
                <img
                  className="cuadradosSection3"
                  src={react}
                  alt="React"
                />
                <img
                  className="cuadradosSection3"
                  src={html}
                  alt="HTML5"
                />
                <img
                  className="cuadradosSection3"
                  src={cssImg}
                  alt="CSS3"
                />
                <img
                  className="cuadradosSection3"
                  src={js}
                  alt="JavaScript"
                />
                <img
                  className="cuadradosSection3"
                  src={react}
                  alt="React"
                />
                <img
                  className="cuadradosSection3"
                  src={html}
                  alt="HTML5"
                />
              </div>
              <div className="containerGridSection3">
                <img
                  className="cuadradosSection3"
                  src={mongo}
                  alt="MongoDB"
                />
                <img
                  className="cuadradosSection3"
                  src={ts}
                  alt="TypeScript"
                />
                <img
                  className="cuadradosSection3"
                  src={node}
                  alt="NodeJS"
                />
                <img
                  className="cuadradosSection3"
                  src={git}
                  alt="GIT"
                />
                <img
                  className="cuadradosSection3"
                  src={mongo}
                  alt="MongoDB"
                />
                <img
                  className="cuadradosSection3"
                  src={ts}
                  alt="TypeScript"
                />
                <img
                  className="cuadradosSection3"
                  src={node}
                  alt="NodeJS"
                />
                <img
                  className="cuadradosSection3"
                  src={git}
                  alt="GIT"
                />
                <img
                  className="cuadradosSection3"
                  src={mongo}
                  alt="MongoDB"
                />
              </div>
            </div>
          </section>
          <section className="section4">
            <h2>
              Experiencia<span>()</span>
            </h2>
            <div className="timeLine">
              <div className="ocultarPhone vacio"></div>
              <div className="timeLineMiddle linea">
                <div className="timeLinePoint"></div>
              </div>
              <div className="timeLineComponent componentRight event1">
                <div className="anioContainerRight">
                  <p className="anio anioUno">2023</p>
                  <p className="anio anioDos">Ahora</p>
                </div>
                <h3 className="tituloBlancoSection4">Estudio</h3>
                <h3 className="tiuloCelesteSection4 section4H3">
                  <span className="tituloBlancoSection4">(</span>Certificado en
                  Desarrollo Web FullStack
                  <span className="tituloBlancoSection4">)</span>
                </h3>
                <p className="blancoResponabilidades letraMaquinaEscribir">
                  Responsabilidades:
                </p>
                <ul className="letraMaquinaEscribir">
                  <li>Me recibí en la UTN</li>
                  <li>Creando mi portfolio web</li>
                  <li>Aprendí HTML5, CSS3 y JavaScript</li>
                </ul>
              </div>
              <div className="timeLineComponent componentLeft event2">
                <div className="anioContainerLeft">
                  <p className="anio anioUno">2021 </p>
                  <p className="anio anioDos">2022</p>
                </div>
                <h3 className="tituloBlancoSection4">Estudio</h3>
                <h3 className="tiuloCelesteSection4 section4H3">
                  <span className="tituloBlancoSection4">(</span>Autodidacta
                  <span className="tituloBlancoSection4">)</span>
                </h3>
                <p className="blancoResponabilidades letraMaquinaEscribir">
                  Responsabilidades:
                </p>
                <ul className="letraMaquinaEscribir">
                  <li>Entendimiento básico de Lógica y Programación</li>
                  <li>Entendimiento básico HTML5, CSS3 y JS</li>
                </ul>
              </div>
              <div className="timeLineMiddle lineaDos">
                <div className="timeLinePoint puntoDos"></div>
              </div>
              <div className="ocultarPhone vacio"></div>
              <div className="ocultarPhone vacio"></div>
              <div className="timeLineMiddle lineaTres">
                <div className="timeLinePoint puntoTres"></div>
              </div>
              <div className="timeLineComponent componentRight event3">
                <div className="anioContainerRight">
                  <p className="anio anioUno">2019</p>
                  <p className="anio anioDos">2020</p>
                </div>
                <h3 className="tituloBlancoSection4">Estudio</h3>
                <h3 className="tiuloCelesteSection4 section4H3">
                  <span className="tituloBlancoSection4">(</span>Descubrimiento
                  de Programación<span className="tituloBlancoSection4">)</span>
                </h3>
                <p className="blancoResponabilidades letraMaquinaEscribir">
                  Responsabilidades:
                </p>
                <ul className="letraMaquinaEscribir">
                  <li>Viendo tutoriales en YouTube</li>
                  <li>Descubrí que es la programación</li>
                  <li>Me interesé en Desarrollo Web</li>
                </ul>
              </div>
            </div>
          </section>
        </main>
        <footer id="footer">
          <section>
            <h1>
              TE INTERESA TRABAJAR <span>JUNTOS</span>?
            </h1>
            <FormularioFooter/>
            <h2 className="orUno">O</h2>
            <h2 className="orDos">
              Usa <span>Link</span>s de Redes Sociales
            </h2>
            <div className="divBurbujasFooter">
              <a
                className="burbujaFooterWapp"
                href="https://wa.me/5491136548828"
                rel="noreferrer"
                target="_blank"
              >
                <i className="bi bi-whatsapp" rel="noreferrer"></i>
              </a>
              <a
                className="burbujaFooter"
                href="https://www.instagram.com/mateo_fleytas/"
                rel="noreferrer"
                target="_blank"
              >
                <i className="bi bi-instagram" rel="noreferrer"></i>
              </a>
            </div>
            <div className="divBack">
              <div className="subDivBack ocultarPhone">
                <img
                  src={flechaLarga}
                  alt="flecha"
                />
                <a href="#" rel="noreferrer">
                  De vuelta
                </a>
              </div>
            </div>
          </section>
          <div className="circuloFooterUno ocultarPhone"></div>
          <div className="circuloFooterDos"></div>
        </footer>
        </Box>
      </ChakraProvider>
    </>
  );
}

export default App;
