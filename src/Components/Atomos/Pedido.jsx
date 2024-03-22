import React from 'react'
import styled from 'styled-components'
const Pedido = ({color,icono,funcion}) => {
  return (
    <Boton $color={color}>
     <span className='IconoMenu'>{icono}</span>
    </Boton>
  )
}
const Boton = styled.button`
border-radius: 50%;
width: 25px;
height: 25px;
color:${(props)=>props.$color};
.IconoMenu{
  font-size: 20px;
  font-weight: bold;
  color: gray;
}

`
export default Pedido
