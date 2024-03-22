import React from 'react'
import styled from 'styled-components'
import {UseGlobal,FuncionesModal} from "../../index"
const Encargar = ({title, funcion}) => {
  const {getencargar} = UseGlobal();
  const {closeDireccion} = FuncionesModal();
  const subirEncargar = (e)=>{
    e.preventDefault();
    closeDireccion();
    
  }
  return (
    <Container onSubmit={subirEncargar}>
     <span className='Titulo'>{title}</span>
     <span className='Fecha'>Nombre de la persona que encarga un producto</span>
     <input type='text' name="nombre" className='input1' onChange={funcion}/>
     <span className='Fecha'>Escribe tu direccion de entrega</span>
     <input type='text' name="dir" className='input1' onChange={funcion}/>
     <span className='hora'>Hora para dejarte tu pedido</span>
     <input type="time" name="hora" className='input2' onChange={funcion}/>
     <input type="submit" value="Continuar" className='guardar' />
    </Container>
  )
}
const Container = styled.form`
display: flex; 
flex-direction: column;
justify-content: center;
width: 100%;
height: 100%;
gap:10px;
.Titulo{
  font-size: 22px;
  color: red;
  font-weight: 900;
  text-align: center;
}
.Info{
  font-size:15px;
  font-weight: 400;
  color: black;
  text-align: center;
}

.Fecha{
  font-size: 15px;
  font-weight: 400;
  color: black;
  text-align: center;
}

.hora{
  font-size: 15px;
  font-weight: 400;
  color: black;
  text-align: center;
}

.input1{
  width: 50%;
  margin: 5px auto;
}

.input2{
  width: 50%;
  margin: 5px auto;
}

.guardar{
  background-color: red;
  color:white;
  display: block;
  margin: 30px auto;
  width: 250px;
  font-size: 20px;
  font-weight: bold;
  border-radius: 15px;
  &:hover{
    opacity: 0.7;
  }
}

`;
export default Encargar
