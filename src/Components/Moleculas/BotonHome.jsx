import React from 'react'
import styled from 'styled-components'
const BotonHome = ({icono,texto}) => {
  return (
   <Container>
    <span className='boton'>{icono}</span>
    <span className='texto'>{texto}</span>
    </Container>
  )
}
const Container =  styled.div`
display: flex;
gap:10px;
font-size: 25px;
color:gray;
font-weight: 900;
align-items: center;
.boton{
  font-size: 25px;
  font-weight: bold;
  color: gray;
}
.texto{
  font-size: 10px;
  font-weight: bold;
  text-align: center;
}
`
export default BotonHome
