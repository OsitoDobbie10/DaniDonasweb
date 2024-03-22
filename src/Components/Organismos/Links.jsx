import React from 'react'
import { NavLink } from 'react-router-dom'
const Links = () => {
  return (
    <>
    <NavLink to="/Login" style={{ animationDelay: "1s" }}><span className='link'>Iniciar Secion</span></NavLink>
    <NavLink to="/Login" style={{ animationDelay: "1s" }}><span className='link'>Registrarse</span></NavLink>
    </>
  )
}

export default Links
