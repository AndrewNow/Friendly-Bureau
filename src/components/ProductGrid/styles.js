import styled from '@emotion/styled'
import { breakpoints } from '../../utils/styles'


export const Grid = styled.div`
  display: grid;
  /* grid-template-columns: repeat(2, 1fr); */
  grid-template-columns: repeat(1, 1fr);
  gap: 2.5rem;
  padding: 5rem;
  /* padding-top: 12vh; */

  /* this was commented out before the misu image */
  position: absolute;
  right: 0;
  /* margin: 0 auto; */
  /* width: 39%; */
  width: 42%;
  margin-left: 10%;
  padding-top: 10vh;
  
  
  /* padding-right:  6rem; */
  /* margin-left: 50vw; */
  
  @media (max-width: ${breakpoints.s}px){
    grid-template-columns: repeat(1, 1fr);
    position: static;
    /* margin-top: 27rem; */
    padding: 0;
    margin-left: 0;
    width: 100%;
    display: -moz-inline-grid;
    background-color: white;
  }
`


export const Product = styled.div`
  display: flex;
  /* min-height: 100%; */
  flex-direction: column;
  /* border: 1px dotted silver; */
  /* padding-top: 10px; */
  color:  black;

  font-family: 'Telegraf Regular';
`
  
export const TitleFlexWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 1em;
  `
  
export const Title = styled.span`
  font-size: 1rem;
  // text-align: center;
  `
  
export const PriceTag = styled.span`  
  font-size: 1rem;
  // text-align: center;
  // margin-top: 15px;

  :before {
    content: ''
    /* content: '' */
  }
`