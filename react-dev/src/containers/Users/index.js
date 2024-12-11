import React, {useState, useEffect} from 'react'
import { useHistory } from 'react-router-dom'

import axios from 'axios'

import Avatar from '../../assets/avatar.svg'
import Arrow from '../../assets/arrow.svg'
import Trush from '../../assets/trush.svg'

import H1 from "../../components/Title"
import ContinerIntens from "../../components/ContainersItem"
import Button from '../../components/Button'

import {
  Conteiner,
  Image,
  User

} from './style'


function Users() {
  const [users, setUsers] = useState([])
  const history = useHistory()

useEffect(() => {

  async function fecthUsers () {
    const { data: newUsers } = await axios.get("http://localhost:3001/users")

    setUsers(newUsers)
  }

  fecthUsers()
}, [])

async function deleteUser(userId) {
  await axios.delete(`http://localhost:3001/users/${userId}`)

  const newUser = users.filter(user => user.id !== userId)

  setUsers(newUser)
}

function goBackPages(){
   history.push("/")
}

  return (
    <Conteiner>
    <Image src={Avatar} alt="fundo" />
    <ContinerIntens $isBlur={true}>
    <H1>Usuários</H1>

    <ul>
      {users.map((user ) =>(
       <User key={user.id}>
        <p>{user.name}</p>  <p>{user.age}</p>
        <button onClick={() => deleteUser(user.id)}> <img alt='lixo' src={Trush} /> </button>
        </User>
    ))}
    </ul>

      <Button $isBack={true} onClick={goBackPages} ><img alt='seta' src={Arrow}/>Voltar</Button>

    </ContinerIntens>
    </Conteiner>
  )
}
export default Users
