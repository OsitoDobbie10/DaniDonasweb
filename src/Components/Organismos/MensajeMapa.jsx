import React from 'react'
import styled from 'styled-components'
const MensajeMapa = () => {
  return (
    <Container>
    <span className='MSN'>No hay ubicacion disponible para recoger y encargar pedido.</span>
    </Container>
  )
}
const Container = styled.div`
width: 90%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
margin:auto;
.MSN{
    color: orange;
    font-weight: 800;
    font-size: 30px;
    text-align: center;
}
`;
export default MensajeMapa
