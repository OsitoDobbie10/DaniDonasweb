import React from 'react'
import styled from 'styled-components'
const BotomPedido = ({bgcolor,icono1,texto,icono2,funcion}) => {
  return (
    <Boton $bgcolor={bgcolor} onClick={funcion}>
      <span className='Icono1'>{icono1}</span>
      <span className='Texto'>{texto}</span>
      <span className='Icono2'>{icono2}</span>
    </Boton>
  )
}
const Boton = styled.button`
background-color: ${(props)=>props.$bgcolor};
width: 150px;
height: 35px;
border-radius: 25%;
display: flex;
align-items:center;
justify-content: space-around;
gap:4px;
color:white;
font-weight: bold;
.Icono1{
  font-size: 15px;
  font-weight: bold;
}
.Texto{
  font-size: 12px;
  font-weight: bold;
}
.Icono2{
  font-size: 25px;
  font-weight: bold;
}
&:hover{
  opacity: 0.6;
  cursor: pointer;
}
`
export default BotomPedido;
