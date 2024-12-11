import styled from "styled-components";

export const Button = styled.button `

width: 300px;
height: 58px;
margin-top: 125px;

background-color: ${ props => props.$isBack ? 'transparent' : 'rgba(0, 0, 0, 0.8);'};
border-radius: 14px;
border: ${props => props.$isBack ? '1px solid #ffff' : 'none'};

font-style: normal;
font-weight: bold;
font-size:  15px;
line-height: 26px;

color: #FFF;

cursor: pointer;

// BUTTON NO CENTRO
display: flex;
align-items: center;
justify-content: center;
gap: 20px;

&:hover{
  opacity: 0.5;
}

&:active{
  opacity: 0.5;
}

img {
  transform: ${ props => props.$isBack && 'rotateY(180deg)'};
}

`
