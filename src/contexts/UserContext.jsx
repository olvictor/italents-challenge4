import {  createContext, useEffect, useState } from "react";
import React from 'react'
import { useNavigate } from "react-router-dom";



export const UserContext = createContext();

export const UserStorage = ({children}) => {
  
  const [user, setUser] = useState(null);
  const [logado,setLogado] = useState(false);

  const navigate = useNavigate();

  useEffect(()=>{
    const usuarioLogado = window.localStorage.getItem("usuario");  
    if(usuarioLogado != null){
      setUser(JSON.parse(usuarioLogado))
      navigate("/perfil")
    }else{
      navigate("/")
    }
  },[])

  const loginUsuario =  (user) =>{
    window.localStorage.setItem("usuario", JSON.stringify(user));
    setUser(user)
  }

  const logoutUsuario = () =>{
    window.localStorage.removeItem("usuario")
    navigate("/")
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
    <UserContext.Provider value={{loginUsuario, user , setUser ,buscarUsuario,logoutUsuario}}>
        {children}
    </UserContext.Provider>
  )
}


