import React from 'react'
import styled from 'styled-components'
import {BotomPedido,BotonHome,Pedido,v,Menu,UseGlobal,Botondireccion} from "../../index"
const Header = ({funciongis,texto1,texto2,funciongis2}) => {
  const {token} = UseGlobal();
  return (
    <Encabezado>
    <div className="left">
    <Menu boton = {<v.Menu/>}/>
    <BotonHome texto={texto1} icono={<v.Comida/>}/>
    {token ? <Botondireccion funcion={funciongis2}/> : null } 
    </div>
    <div className="right">
    <BotomPedido bgcolor="red" icono1={<v.Locacion/>} 
      texto={texto2} icono2={<v.FlechaBoton/>} funcion={funciongis}/>
    </div>
    </Encabezado>
  )
}
const Encabezado = styled.header`
display: grid;
grid-template-columns: repeat(16 , 1fr);
.left{
display:flex;
justify-content: space-around;
margin-left: 15px;
align-items: center;
grid-column: 1/4;
gap:40px;
}
.right{
display: flex;
margin-left: 15px;
align-items: center;
grid-column: 15/17;
}
`;
export default Header
