import React, { useState } from 'react'
import Form from '../components/Form/Form'
import InputBox from '../components/InputBox/InputBox'
import Button from '../components/Button/Button'
import { useNavigate } from 'react-router-dom';

const Cadastrar = () => {
  const navigate = useNavigate()

  const [email,setEmail] = useState("");
  const [senha,setSenha] = useState("");
  const [error,setError] = useState(null)

  const handleSubmit = (e) =>{
    e.preventDefault()
    console.log(email,senha)
    if(email == "" || senha == ""){
      return setError("Preencha todos os campos")
    }
    cadastrarUsuario({
      email,
      senha
    })

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

  const cadastrarUsuario = async (user) =>{
    const usuarios = await buscarUsuario();
    const usuarioExistente = usuarios.filter((u)=> u.email === user.email)

    if(usuarioExistente.length > 0){
      return setError("Email ja cadastrado.")
    }
    try{
      await fetch("http://localhost:3001/dados",{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      })
      navigate("/")
    }catch(e){
      console.log(e)
    }
  }

  return (
    <main>
        <Form handleSubmit={handleSubmit}>
            <InputBox label={"Digite seu email"} type={"email"}  funcao={setEmail} />
            <InputBox label={"Digite sua Senha"} type={"password"} funcao={setSenha} />

            <span>Ja possui uma conta? <a href="#" onClick={()=>navigate("/")}>LOGAR</a></span>
            {error && <p>{error}</p>}
            <Button  type={"submit"} text={"ENTRAR"}/>
          </Form>
    </main>
  )
}

export default Cadastrar