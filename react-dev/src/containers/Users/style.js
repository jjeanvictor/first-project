import styled from "styled-components";
import background from '../../assets/fundo.svg'

export const Conteiner = styled.div`
background: url(${background}) ;
background-size: cover;

display: flex;
flex-direction: column;
align-items: center;

gap: 50px;
`
export const Image = styled.img`
margin: 30px;
`

export const User = styled.li`
display: flex;
justify-content: space-around;
align-self: center;
margin-top: 20px;

background: rgba(255, 255, 255, 0.10);
box-shadow: 0px 4px 4px rgb(0, 0, 0, 0.25);
border-radius: 12px;

width: 300px;
height: 58px;

border: none;
outline: none;

P {
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 30px;
}

button{
  background: none;
  border: none;
  cursor: pointer;
}
`
