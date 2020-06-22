import styled from '@emotion/styled'
import { breakpoints } from '../../utils/styles'


export const DropDownWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;

    & * {
        font-family: 'Telegraf Regular';
    }
    
    
    @media (max-width: ${breakpoints.s}px){
        flex-direction: column;    
    }
`

export const DropDown = styled.select`

    font-family: 'Telegraf Regular';
    height: 35px;
    width: 190px;
    margin-top: .3rem;
    border-radius: 2px;
    border: 1px solid black;
    transition: 0.3s;

    /* replace default arrow */
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    background-image: url('data:image/svg+xml;utf8, <svg xmlns="http://www.w3.org/2000/svg" width="100" height="50"><polygon points="0,0 100,0 50,50" style="fill: black;" /></svg>');
    background-position: right 10px top 50%;
    background-repeat: no-repeat;
    background-size: 10px;
    &:hover, :focus {
        outline: none;
    }
    & option {
        background-color: white;
        color: black;
    }
`
export const QuantityBoxStyled = styled.input`
    text-align: center;
    height: 31px;
    width: 100px;
    margin-right: 1.5rem;
    margin-top: .3rem;
    border-radius: 2px;
    border: 1px solid black;
    transition: 0.3s;
    &:hover, 
    :focus {
        outline: none;
    }
`

export const CartButton = styled.button`
    border-radius: 5px;
    border: 1px solid black;
    width: 100%;
    height: 45px;
    font-size: 1.2rem;
    background-color: black;
    color: white;
    transition: 0.3s;
    &:hover, 
    :focus {
        background-color: #97CC04;
    }
`


export const Spacer = styled.div`
    padding: .5em 0;
`
