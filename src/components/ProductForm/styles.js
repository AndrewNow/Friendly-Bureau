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
    width: 200px;
    margin-top: .3rem;
    padding-left: .5rem;
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
export const SoldOutButton = styled.button`
    border-radius: 5px;
    border: 1px solid black;
    width: 100%;
    height: 45px;
    font-size: 1.2rem;
    background-color: black;
    color: white;
    transition: 0.3s;
    margin: .4em 0;
    &:hover,
    :focus {
        animation: shake .3s; 
        animation-iteration-count: infinite; 
        outline: 1px solid transparent;
    }
    @keyframes shake {
    0% { transform: translate(1px, 1px) rotate(0deg); }
    10% { transform: translate(-1px, -2px) rotate(-1deg); }
    20% { transform: translate(-3px, 0px) rotate(1deg); }
    30% { transform: translate(3px, 2px) rotate(0deg); }
    40% { transform: translate(1px, -1px) rotate(1deg); }
    50% { transform: translate(-1px, 2px) rotate(-1deg); }
    60% { transform: translate(-3px, 1px) rotate(0deg); }
    70% { transform: translate(3px, 1px) rotate(-1deg); }
    80% { transform: translate(-1px, -1px) rotate(1deg); }
    90% { transform: translate(1px, 2px) rotate(0deg); }
    100% { transform: translate(1px, -2px) rotate(-1deg); }
}

@media (max-width: ${breakpoints.l}px){
    outline: 1px solid transparent;
    animation: shake .3s;
    animation-iteration-count: infinite;
    background-color: black;
    color: white;    
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
    margin: .4em 0;
    &:hover, 
    :focus {
        background-color: white;
        color: black;
    }

@media (max-width: ${breakpoints.l}px){
    animation-name: colorshadow;
    animation-duration: 2s;
    animation-timing-function: cubic-bezier(0.420, 0.000, 0.580, 1.000);
    animation-direction: alternate;
    animation-iteration-count: infinite;
    color: black;
    background-color: white;
    &:hover, 
    :focus {
        background-color: black;
        color: white;
    
    @keyframes colorshadow  {
    from {-webkit-box-shadow: 0px 0px 25px -0px rgba(200,255,0,0.28);
    -moz-box-shadow: 0px 0px 25px -0px rgba(200,255,0,0.28);
    box-shadow: 0px 0px 25px -0px rgba(200,255,0,0.28);
        }    
    to {
    -webkit-box-shadow: 0px 0px 25px -9px rgba(0,212,235,0.62);
    -moz-box-shadow: 0px 0px 25px -9px rgba(0,212,235,0.62);
    box-shadow: 0px 0px 25px -9px rgba(0,212,235,0.62);
        }
    }
    }
}
`

export const Spacer = styled.div`
    padding: .5em 0;
`
