import React from 'react'
import styled from 'styled-components'
import {v} from "../../index"
const Botondireccion = ({funcion}) => {
  return (
    <Container onClick={funcion}>
     <span className='icono'>{<v.agregar/>}</span>
    </Container>
  )
}
const Container = styled.div`
width: 30px;
height: 30px;
border-radius:50%;
background-color: orange;
display:flex;
justify-content: center;
.icono{
  font-size: 20px;
  color:black;
  text-align: center;
  &:hover{
    cursor: pointer;
  }
}

`
export default Botondireccion
