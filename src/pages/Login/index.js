import React, {useState} from 'react'
import api from '../../services/api'

export default function Login({history}){

    const [email, setEmail] = useState('')

    async function handleSubimit(event){
      event.preventDefault() //manter o usuario na mesma tela
  
      //chamando a api
      const response = await api.post('/sessions', {email})
      //pegando o id
      const { _id } = response.data
  
      //salvando no local storage
      localStorage.setItem('user', _id)

      history.push('/dashboard')
  
    }

    return (
        <>
            <p>
                Ofereça <strong>spots</strong> para programadores e encontre <strong>talentos</strong> para sua empresa.
            </p>
            <form onSubmit={handleSubimit}>
                <label htmlFor="email">E-MAIL *</label>
                <input
                id="email"
                type="email"
                placeholder="Seu melhor email"
                value={email}
                //recuperando valor digitado
                onChange={event => setEmail(event.target.value)}/> 
                <button type="subimit" className="btn">Entrar</button>
            </form>
        </>
    )
}