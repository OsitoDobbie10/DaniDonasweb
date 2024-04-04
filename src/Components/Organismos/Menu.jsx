import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import {Navigation} from "swiper/modules"
import "swiper/css";
import "swiper/css/navigation";
import { useState } from "react";
import { NavLink } from 'react-router-dom';
import "../../Style/Menu.css";
import {v,UseGlobal,Logico,Links} from "../../index"
const Menu = ({boton}) => {
  const {token} = UseGlobal();
  const navs = [
    <div style={{color:'white'}}>
    {
       token ?
       <h2 style={{color:'red',fontSize:'45px',marginBottom:'25px',
                    fontWeight:'bolder', textAlign:'center',fontWeight:'bold',marginTop:'90px'}}>Bienvenido {token.user.user_metadata.first_name}</h2>:
        <Logico/>
    }
   </div>,
  <div>
    <h2>Menu</h2> 
    <nav>
      <NavLink to="/" style={{ animationDelay: "0.8s" }}><span className='link'>Inicio</span></NavLink>
      <NavLink to="/Pedidos" style={{ animationDelay: "0.9s" }}><span className='link'>Mis pedidos</span></NavLink>
      <NavLink to="/Favoritos" style={{ animationDelay: "1s" }}><span className='link'>Productos Favoritos</span></NavLink>
      <NavLink to="/Chats" style={{ animationDelay: "1s" }}><span className='link'>Chat</span></NavLink>
    </nav>
  </div>,
  <div>
    <h2>Preferencias del sistema</h2>
    <nav>
      <NavLink to="/AtencionCliente" style={{ animationDelay: "0.8s" }}><span className='link'>Atencion al cliente</span></NavLink>
      <NavLink to="/Preguntas" style={{ animationDelay: "0.9s" }}><span className='link'>Preguntas</span></NavLink>
      <NavLink to="/Configuracion" style={{ animationDelay: "1s" }}><span className='link'>Configuraciones</span></NavLink>
      {
        token ? null:
        <Links/>
      }
    </nav> 

  </div>
  ];
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const openClass = isOpen ? "open" : "";
  return (
      <>
      <div className={`background ${openClass}`}></div>
      <button className={`burger ${openClass}`} onClick={toggleMenu}>{boton}</button>
      {isOpen ? <button className={`cerrar ${openClass}`} onClick={toggleMenu}>{<v.Cerrar/>}</button>:<div></div>}
      <div className={`menu ${openClass}`}>
        <Swiper speed={750} modules={[Navigation]} navigation>
          {navs.map((nav,index) => (
            <SwiperSlide key={index}>{nav}</SwiperSlide>
          ))}
        </Swiper>
      </div> 
    </>
  )
}

export default Menu;
