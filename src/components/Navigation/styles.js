import styled from '@emotion/styled'
import { Link } from 'gatsby'

import { breakpoints } from '../../utils/styles'

export const Wrapper = styled.div`
  //background-color: white;
  margin-bottom: 1.45rem;
  //border-bottom: 1px solid #EFEFEF;
  top: 0;
  position: fixed;
  width: 100vw;
  z-index: 100;
  font-family: 'Telegraf Regular';
`

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 3.5rem;
  align-items: center;

  padding: 1.45rem;
  margin: 0 auto;
  max-width: 97vw;
`

export const MenuLink = styled(Link)`
  //border: 2px solid red;
  //color: #29BF12;
  margin: .1em;

  mix-blend-mode: difference;
  color: black;
  text-decoration: none;
  font-weight: 300;

  @media only screen and (max-width: ${breakpoints.s}px) {
    font-size: 1.1rem;
    /* color: red; */
  }
  @media only screen and (min-width: ${breakpoints.s}px) and (max-width: ${breakpoints.l}px) {
    font-size: 2.5rem;
    /* color: green; */
  }
`

export const CartCounter = styled.div`
  font-family: 'Telegraf Regular';
  font-size: 1.5rem;
  color: #272D2D;
  background-color: #CBF511;
  
  border-radius: 100px;
  
  
  padding: 3px 9px;

  margin-right: 2rem;
  
  /* width: .9rem;
  height: .9rem; */


  /* top: 1vw;
  right: 1vw;
  position: absolute; */
  z-index: 20;

  -webkit-box-shadow: 0px 0px 19px 0px rgba(255,255,255,1);
  -moz-box-shadow: 0px 0px 19px 0px rgba(255,255,255,1);
  box-shadow: 0px 0px 19px 0px rgba(255,255,255,1);

  
  @media only screen and (max-width: ${breakpoints.s}px) {
      font-size: .8rem;
      margin-right: 0rem;
  }
  @media only screen and (min-width: ${breakpoints.s}px) and (max-width: ${breakpoints.l}px) {
      font-size: 1rem;
      margin-right: 0rem;
  }

`
