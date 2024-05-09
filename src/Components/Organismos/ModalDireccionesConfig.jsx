import React from 'react';
import styled from 'styled-components';
import BTNCerrar from '../../Assets/close.svg';
import {v,Formularioedutarconfiguracion,EditarCuenta} from '../../index';
const ModalDireccionesConfig = ({cerrar,animacion,funcion,objeto,id}) => {
const edit = async(p)=>{
    await EditarCuenta(p)
};
  return (
    <Container>
     <div className="cerrar-modal">
    <img src={BTNCerrar}
                 alt="CerrarBTN1"
                 onClick={cerrar}/>
    </div>
    <div className={`formulario ${animacion ? 'animar': 'cerrar'}`}>
    <Formularioedutarconfiguracion editarConfiguracionPerfil={edit}  Subircampos={funcion} objeto={objeto} idUsuario={id}/>
    </div>
    </Container>
  )
}
const Container = styled.div`
position: fixed;
background-color: rgb(0 0 0 / 0.92);
top: 0;
left: 0;
right: 0;
bottom: 0;
color: white;
overflow: hidden;
z-index: 1000;
.cerrar-modal {
    position: absolute;
    right: 3rem;
    top: 3rem;
    width: 2rem;
    height: 2rem;
    &:hover{
      cursor: pointer;
      background-color: orange;
    }
}
.cerrar-modal img { 
    width: 100%;
}
.formulario {
    max-width: 82rem;
    width: 45rem;
    transition-property: all;
    transition-duration: 300ms;
    transition-timing-function: ease-in;
    opacity: 0;
    left:25%;
    top:20%;
    position: absolute;
    background-color: white;
    border-radius: 15px;
    height: 420px;
    overflow:scroll;
    color:black;
    border-radius:12px;
  }

  .formulario.animar {
    position:absolute;
    opacity: 1;
    left: 27%;
    top:20%;}

  .formulario.cerrar {
    opacity: 0;
    left: 30%;
    top:25%;
}
`;
export default ModalDireccionesConfig
