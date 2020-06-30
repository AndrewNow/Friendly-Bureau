import React from 'react'
import Image from 'gatsby-image'
import styled from '@emotion/styled'
import { Global, css } from "@emotion/core"

export const breakpoints = {
  s: 576,
  m: 768,
  l: 992,
  xl: 1200,
}

export const GlobalStyle = props => (
  <Global
    {...props}
    styles={css`
    
  
    @import url('https://fonts.googleapis.com/css2?family=Space+Mono&display=swap');
    
      body {
        margin: 0;
      }
      html {
        //background-color: white;
        font-family: sans-serif;
        -ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
      }

    `}
  />
)

export const Img = styled(Image)`
  border-radius: 10px;
  -moz-border-radius: 10px;
  -webkit-border-radius: 10px;

  //border: 2px solid #000000;
  // -webkit-box-shadow: 0px 0px 19px 0px rgba(171,255,79,0.61);
  // -moz-box-shadow: 0px 0px 19px 0px rgba(171,255,79,0.61);
  // box-shadow: 0px 0px 19px 0px rgba(171,255,79,0.61);

  max-width: 100%;
  margin: 0 auto;
  /* margin-left: 0;
  margin-right: 0;
  margin-top: 0; */
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  margin-bottom: 1.25rem;
`

export const Container = styled.div`
  margin: 0 auto;
  max-width: 100vw;
  text-align: left;
  `

export const CartContainer = styled.div`
  margin: 0 auto;
  max-width: 100vw;
  text-align: left;
  `

export const CartTableHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

`

export const CartTableItem = styled.div`
  border-top: 3px solid black;
  border-bottom: 3px solid black;
  padding: 5px;
  flex-grow: 2;
`

export const CartTableOther = styled.div`
  border-top: 2px solid black;
  border-bottom: 2px solid black;
  flex-grow: 1;
`

export const TwoColumnGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 2rem 1fr;
  grid-template-rows: 1 auto;
  grid-template-areas: "left . right";

  @media (max-width: ${breakpoints.l}px){
    display: block;
  }
`

export const GridLeft = styled.div`
  grid-area: left;
  margin-left: 3vw;
  margin-top: 5vh;
  padding: 4vw; 
  width: 80%;

    @media (min-width: ${breakpoints.m}px){
      width: 100%;
      margin-top: 5em;
      margin-left: 0;
      padding: 0;
  }

  @media (max-width: ${breakpoints.l}px) {
    width: 100%;
      margin-top: 5em;
      margin-left: 0;
      padding: 0;

      border: 1px solid red;
  }
`

export const GridRight = styled.div`
  grid-area: right;
  background-color: white;
  border-radius: 10px;
  -moz-border-radius: 10px;
  -webkit-border-radius: 10px;
  border: 1px solid black;

  padding: 2em;
  margin-bottom: 4em;
  margin-top: 6em;
  top: 20vh;
  /* top: 35vh; */
  /* position: fixed; */
  position: absolute;
  width: 30%;
  left: 60%;
  /* top: 55%;
  transform: translateY(-50%); */


  animation-name: colorshadow;
  animation-duration: 2s;
  animation-timing-function: cubic-bezier(0.420, 0.000, 0.580, 1.000);
  animation-direction: alternate;
  animation-iteration-count: infinite;
  
/* -webkit-box-shadow: 0px 0px 55px -1px rgba(200,255,0,0.28);
-moz-box-shadow: 0px 0px 55px -1px rgba(200,255,0,0.28);
box-shadow: 0px 0px 55px -1px rgba(200,255,0,0.28); */

  @keyframes colorshadow  {
    from {-webkit-box-shadow: 0px 0px 40px -0px rgba(200,255,0,0.28);
  -moz-box-shadow: 0px 0px 40px -0px rgba(200,255,0,0.28);
  box-shadow: 0px 0px 40px -0px rgba(200,255,0,0.28);}

    to {
  -webkit-box-shadow: 0px 0px 40px -9px rgba(0,212,235,0.62);
  -moz-box-shadow: 0px 0px 40px -9px rgba(0,212,235,0.62);
  box-shadow: 0px 0px 40px -9px rgba(0,212,235,0.62);
    }


  }

  & * {
    font-family: 'Telegraf Regular';
  }


    @media (max-width: ${breakpoints.m}px){
    top: 0;
    transform: none;
    border: none;
    padding: 0;
    margin: 0;
    position: static;
    width: 100%;
  
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
    animation: none;
  
  }
  @media (max-width: ${breakpoints.l}px){
    top: 0;
    transform: none;
    border: none;
    padding: 0;
    margin: 0;
    position: static;
    width: 100%;
  
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
    animation: none;
  
  }
`

export const MainContent = styled.main`
  margin-top: 80px;
  margin-bottom: 40px;

  @media (max-width: ${breakpoints.l}px){
    margin-top: 20px;
    margin-bottom: 20px;
  }
`
