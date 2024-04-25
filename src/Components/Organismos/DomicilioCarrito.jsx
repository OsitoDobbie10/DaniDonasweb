import React from 'react'
import styled from 'styled-components'
const DomicilioCarrito = ({spanciudad,spancolonia,ciudad,colonia,
                          Nombre,direccion,Hora1,personaencarga,dir,horaencago,Fecha,Hora2,fecharecoger,horarecoger}) => {
  return (
    <Container>
    <button type="button" class="btn btn-success">Recibido</button> 
    <span className='TipoPago' >Pago con: </span>
    {
      ciudad && <>
                  <span className='TextoPagociudad'>{spanciudad}: {ciudad}</span>
                  <span className='textopagocolonia'>{spancolonia}: {colonia}</span>
                </>
    }
    {
      Nombre &&  <>
                  <span className='TextoNombreEncargo'>{Nombre}: {personaencarga}</span>
                  <span className='TextoDireccionRecoger'>{direccion}: {dir}</span>
                  <span className='TextoHoraRecoger'>{Hora1}:{horaencago}</span>
                  </>
    }
    {
      fecharecoger && <>
                       <span className='TextoFechorecoger'>{Fecha}: {fecharecoger}</span>
                       <span className='Textohorarecoger'>{Hora2}: {horarecoger}</span>
                     </>
    }
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
  font-size: 15px;
  color: black;
  font-weight: 500;
  text-align: center;
  }
.textopagocolonia{
  font-size: 15px;
  color: black;
  font-weight: 500;
  text-align: center;
}
.TextoNombreEncargo{
  font-size: 15px;
  color: black;
  font-weight: 500;
  text-align: center;
}
.TextoDireccionRecoger{
  font-size: 15px;
  color: black;
  font-weight: 500;
  text-align: center;
} 

.TextoHoraRecoger{
  font-size: 15px;
  color: black;
  font-weight: 500;
  text-align: center;
}
.TextoFechorecoger{
  font-size: 15px;
  color: black;
  font-weight: 500;
  text-align: center;
}

.Textohorarecoger{
  font-size: 15px;
  color: black;
  font-weight: 500;
  text-align: center;
}

`
export default DomicilioCarrito
