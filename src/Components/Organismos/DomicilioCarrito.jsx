import React from 'react'
import styled from 'styled-components'
const DomicilioCarrito = ({ciudad,colonia}) => {
  return (
    <Container>
    <button type="button" class="btn btn-success">Recibido</button>
    <span className='TipoPago' >Pago con: </span>
    <span className='TextoPagociudad'>Ciudad: {ciudad}</span>
    <span className='textopagocolonia'>Colonia: {colonia}</span>
    </Container>
  )
}
const Container = styled.div`
  width:30%;
  height: 100%;
  margin-top:20px;
  display: flex;
  flex-direction: column;
  gap:20px;
  .TipoPago{
    font-size: 20px;
    color: black;
    font-weight: 600;
    text-align: center;
  }
  .TextoPagociudad{
  font-size: 20px;
  color: black;
  font-weight: 500;
  text-align: center;
  }
.textopagocolonia{
  font-size: 20px;
  color: black;
  font-weight: 500;
  text-align: center;
}

`
export default DomicilioCarrito
