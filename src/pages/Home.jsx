import React, { useContext, useEffect, useState } from 'react'
import Form from '../components/Form/Form'
import InputBox from '../components/InputBox/InputBox'
import Button from '../components/Button/Button'
import { json, useNavigate } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';

const Home = () => {
  const [email,setEmail] = useState("")
  const [senha,setSenha] = useState("")
  const [error,setError] = useState(null)
  const navigate = useNavigate();
  const {loginUsuario} = useContext(UserContext);


  const handleSubmit = async (e) =>{
    e.preventDefault();
    const usuarios = await buscarUsuario();
    const usuarioLogando = usuarios.filter((u) =>  u.email === email )
    

    if(usuarioLogando.length < 1 || usuarioLogando[0].senha != senha){
      setError('Email ou senha incorretos.')
    }else{
      console.log("logou")
      loginUsuario({email,senha})
      navigate("/perfil")
    }
  
  }

  const buscarUsuario = async() =>{
    try{
      const response = await fetch('http://localhost:3001/dados')
      if(response.ok){
       const data = await response.json();
       return data
      }
    }catch(e){
     console.log(e)
    }
  }

  return (
    <main>
          <Form handleSubmit={handleSubmit}>
            <InputBox label={"Email"} type={"email"} funcao={setEmail} />
            <InputBox label={"Senha"} type={"password"} funcao={setSenha}/>

            <span>Não possui conta? <a href="#" onClick={()=>navigate("/cadastrar")}>Criar</a></span>
            {error && <p>{error}</p>}
            <Button  typ={"submit"} text={"ENTRAR"}/>
          </Form>
    </main> 
  )
}

export default Home