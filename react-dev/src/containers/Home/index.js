import React, {useState, useRef} from 'react'
import { useHistory } from 'react-router-dom/'

import axios from 'axios'

import Poeple from '../../assets/peolple.svg'
import Arrow from '../../assets/arrow.svg'

import H1 from "../../components/Title"
import ConteinerItens from "../../components/ContainersItem"
import Button from '../../components/Button'


import {
  Conteiner,
  Image,
  InputLabel,
  Input,
} from './style'


function App() {
const [users, setUsers] = useState([])
const history = useHistory()

const inputName = useRef()
const inputAge = useRef()

async function addNewuser () {

 const { data : newUsers } = await axios.post("http://localhost:3001/users" , {
    name: inputName.current.value,
    age: inputAge.current.value
  })
  setUsers([...users, newUsers])

  history.push("/usuarios")

}

  return (
    <Conteiner>
    <Image src={Poeple} alt="fundo" />
    <ConteinerItens>
    <H1>3J Salgados</H1>

    <InputLabel>Nome</InputLabel>
    <Input ref = {inputName}  placeholder='Nome' />

    <InputLabel>Idade</InputLabel>
    <Input ref = {inputAge} placeholder='Idade' />

    <Button onClick={addNewuser}>Cadastrar <img alt='seta' src={Arrow}/></Button>

    </ConteinerItens>
    </Conteiner>
  )
}
export default App
