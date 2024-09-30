import React, { useContext, useEffect } from 'react'
import { UserContext } from '../contexts/UserContext'

const Perfil = () => {
  const {user,logoutUsuario} = useContext(UserContext);
  
 
  return (
    <div>
      <h2>O {user && user.email} está logado</h2>
      <button onClick={logoutUsuario}>LOGOUT</button>
    </div>

  )
}

export default Perfil