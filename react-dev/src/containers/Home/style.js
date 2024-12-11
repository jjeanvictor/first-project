import styled from "styled-components";
import background from '../../assets/backgroud.svg'

export const Conteiner = styled.div`
background: url(${background}) ;
background-size: cover;

display: flex;
flex-direction: column;
align-items: center;

gap: 35px;
`
export const Image = styled.img`
margin: 30px;
`

export const InputLabel = styled.p`
letter-spacing: -0.468;
font-style: normal;
font-weight: bold;
font-weight: 15px;
line-height: 22px; // AUMENTA ESPAÇO ENTRE OS INPUT
color: black;

margin-left: 25px;
`

export const Input = styled.input `
background: rgba(255, 255, 255, 0.15);
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 14px; // ARREDNODA OS INPUT

width: 300px; // AUMENTA LARGURA
height: 58px; // AUMENTA ALTURA
padding-left: 25px; //NOME PARA AO LADO ESQUERDO DENTRO DO INPUT
margin-bottom: 30px; // ESPAÇO ENTRE OS INPUT

border: none; // BORDA DOS INPUT
outline: none;
border-radius: 22px;

font-style: normal;
font-weight: normal;
font-size: 18px;
line-height: 28px;

color: #FFFFFF;
`
