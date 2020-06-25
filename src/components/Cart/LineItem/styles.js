import styled from '@emotion/styled'

export const breakpoints = {
  s: 576,
  m: 768,
  l: 992,
  xl: 1200,
}

export const Wrapper = styled.div`
  /* display: flex;
  justify-content: space-between;
  flex-wrap: wrap; */
  padding: 0rem 0 0rem 0;
`

export const CartWrapper = styled.div`
  padding-top: 7rem;
  margin: 0 auto;
  width: 80%;
  background-color: white;
  & h1 {
    font-size: 3rem;
  }
  & h2 {
    font-size: 1.6rem;
  }
  @media (max-width: ${breakpoints.l}px) {
    width: 100%;
    padding-top: 3rem;
    background-color: white;
    
    & span:nth-child(even) {
      margin-top: 1rem;
      background-color: rgba(0, 0, 0, 0.025);
      & button {
        background-color: rgba(0, 0, 0, 0.005);
        border: 1px solid rgba(0, 0, 0, 0.005);
      }
    }
    & h1 {
      font-size: 3rem;
      margin-bottom: 0.7rem;
    }
    & h2 {
      font-size: 1rem;
    }
    & p {
      margin: 0;
    }
  }
`

export const CartTotalsWrapper = styled.table`
  width: 30%;
  right: 0;

  & p {
    margin: 1rem;
    align-self: flex-end;
  }  
  & tr {
    display: flex;
    justify-content: space-between;
    border-top: 1px solid lightgray;
    border-left: 1px solid lightgrey;
    border-right: 1px solid lightgrey;
  }
  & tr:nth-last-child(1) {
    border-bottom: 1px solid lightgrey;
  }

  @media (max-width: ${breakpoints.l}px){
    width: 100%;

    & tr > p {
      font-size: .9rem;
      margin: 0;
    }
    & tr {
      display: flex;
      justify-content: space-between;
      padding: .7rem;
    }
  }
`

export const CartFlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
  position: relative;
  border-radius: 1px;
  font-size: 1.6rem;
  background-color: white;
`

export const CartHeadFlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid lightgrey;
  width: 100%;
  margin: 0 auto;
  border-radius: 1px;
  @media (max-width: ${breakpoints.l}px) {
    font-size: 1rem;
    display: none;
  }
`

export const LineItemFlexContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  
  align-items: center;

  position: relative;
  margin: 0 auto;
  width: 100%;
  border-bottom: 1px solid lightgrey;
  border-left: 1px solid lightgrey;
  border-right: 1px solid lightgrey;
  border-radius: 1px;
  font-size: 1.6rem;
  
  @media (max-width: ${breakpoints.l}px) {
    font-size: 1rem;
    display: none;
  }
`

export const ImageHeader = styled.div`
  text-align: center;
  flex: 1.5;
`
export const ProductHeader = styled.div`
  flex: 2;
  align-items: center;
`
export const ColorHeader = styled.div`
  /* text-align: center; */
  flex: 2;
`
export const QtyHeader = styled.div`
  text-align: center;
  flex: 2;
`
export const PriceHeader = styled.div`
  text-align: center;
  flex: 1;
`
export const ButtonHeader = styled.div`
  text-align: center;
  flex: 1;
`

export const CartImage = styled.img`
  height: 80px;
  width: 80px;
  padding: 0.5rem;
  margin: 0 auto;
  display: inline-block;
  /* @media only screen and (max-width: 320px) {
    height: 80vw;
    width: 80vw;
    padding: 0;
  } */

  @media only screen and (min-width: 320px) and (max-width: ${breakpoints.l}px) {
    height: 80vw;
    width: 80vw;
    padding: 0;
  }
`


export const MobileLineItemFlexContainer = styled.span`
  display: none;

  @media (max-width: ${breakpoints.l}px) {
    display: flex;
    flex-direction: column;
    font-size: 1rem;
    width: 100%;
    border-bottom: 1px solid lightgrey;

  & div > p {
    font-size: .9rem;
    margin: 0;
  }
}
`

export const MobileFlexRow = styled.div`
  display: none;
  @media (max-width: ${breakpoints.l}px) {
    display: flex;
    justify-content: space-between;
    padding: .7rem;
    border-top: 1px solid lightgray;
    border-left: 1px solid lightgrey;
    border-right: 1px solid lightgrey;
}
`

export const MobileImageRow = styled.div`
  display: none;
  @media (max-width: ${breakpoints.l}px) {
    display: flex;
    justify-content: space-between;
    padding: 0.7rem;
    border-top: 1px solid lightgray;
    border-left: 1px solid lightgrey;
    border-right: 1px solid lightgrey;
  }
`









export const CartTableHead = styled.thead`
  display: grid;
  position: relative;
  margin: 0 auto;
  width: 100%;
  grid-template-columns: 10% 10% 40% 17% 13% 10%;
  border: 1px solid lightgrey; 
  border-radius: 1px;
  font-size: 1.6rem;

@media(max-width: ${ breakpoints.l }px) {
    font-size: 1rem;
    display: none;
  }
`

export const CartTableMobile = styled.table` 
  display: none; 
  @media (max-width: ${breakpoints.l}px){
    display: grid;
    font-size: 1rem;
    grid-template-rows: 10% 10% 40% 17% 13% 10%;
    width: 100%;
  }
  & tr > p {
    font-size: .9rem;
    margin: 0;
  }
  & tr {
    display: flex;
    justify-content: space-between;
    padding: .7rem;
    border-top: 1px solid lightgray;
    border-left: 1px solid lightgrey;
    border-right: 1px solid lightgrey;
  }  & tr:nth-last-child(1) {
    border-bottom: 1px solid lightgrey;
  }
  & th {
    border-top: 1px solid lightgray;
    border-left: 1px solid lightgrey;
    border-right: 1px solid lightgrey;
    justify-content: space-between;
    padding: .7rem;
  }
`


export const CartImageRowMobile = styled.tr`  
  @media only screen and (max-width: 320px) {
    /* height: 200px; */
  }
  @media only screen and (min-width: 320px) and (max-width: ${breakpoints.l}px) {
    /* height: 240px; */
  }
`


export const CartTableBody = styled.tbody`
  display: grid;
  position: relative;
  margin: 0 auto;
  width: 100%;
  grid-template-columns: 10% 10% 40% 17% 13% 10%;
  border-bottom: 1px solid lightgrey; 
  border-left: 1px solid lightgrey;
  border-right: 1px solid lightgrey;
  border-radius: 1px;
  font-size: 1.6rem;
  @media (max-width: ${breakpoints.l}px){
    font-size: 1rem;
    display: none;
  }
`

export const CartButton = styled.button`
  background-color: white;
  margin: 0 auto;
  padding: 0 auto;
  height: 25px;
  width: 25px;
  border: 1px solid white;
  border-radius: 100px;
  color: #e71d36;

  &:hover,
  :focus {
    border: 1px solid #e71d36;
    background-color: #e71d36;
    color: white;
    transition: 0.8s;
  }

  @media (max-width: ${breakpoints.l}px){
    color: #e71d36;
    width: 40px;
    margin: 0 auto;
    padding: 0;
  }
`

export const CheckoutButton = styled.button`
  font-family: 'Telegraf Regular';
  font-size: 1rem;

  background-color: black;
  border: 1px solid black;
  color: white;

  margin: 0 auto;
  padding: 0 auto;
  width: 30%;
  height: 50px;

  &:hover,
  :focus {
    transition: 0.8s;
    background-color: #97CC04;
  }

  @media (max-width: ${breakpoints.l}px){
    width: 100%;
  }
`
