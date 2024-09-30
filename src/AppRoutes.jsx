import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Cadastrar from './pages/Cadastrar'
import Perfil from './pages/Perfil'
import { UserStorage } from './contexts/UserContext'
const AppRoutes = () => {
  return (
    <BrowserRouter>
      <UserStorage>
          <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/cadastrar' element={<Cadastrar />} />
              <Route path='/perfil' element={<Perfil />} />
          </Routes>
      </UserStorage>   
    </BrowserRouter>
  )
}

export default AppRoutes