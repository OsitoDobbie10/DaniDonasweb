import React from 'react';
import styled from 'styled-components';
import {UseGlobal,FormularioEntragar,FormularioRecoger} from "../../index";
import BtNCerrar from "../../Assets/cerrar.svg"
const ModalDireccion = ({cerrar,animacion,direcciones}) => {
  const {view} = UseGlobal();
  const {cod,descp} = view;
  return (
    <Container>
    <div className="cerrar-modal">
    <img src={BtNCerrar}
                 alt="CerrarBTN"
                 onClick={cerrar}/>
    </div>
    { 
    cod === "D" ? 
    <div className={`formulario ${animacion ? 'animar': 'cerrar'}`}>
    <FormularioEntragar direcciones={direcciones}/>
    </div>:
     <div className={`formulario ${animacion ? 'animar': 'cerrar'}`}>
     <FormularioRecoger title="Recoger"/>
     </div>
}
    </Container>
  )
}
const Container = styled.div`
position: absolute;
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
    width: 40rem;
    transition-property: all;
    transition-duration: 300ms;
    transition-timing-function: ease-in;
    opacity: 0;
    left: 30%;
    top:25%;
    position: relative;
    background-color: white;
    border-radius: 15px;
    height: 420px;
    overflow:scroll;
    color:black;
    border-radius:12px;
  }

  .formulario.animar {
    position: relative;
    opacity: 1;
    left: 30%;
    top:25%;
}


`;
export default ModalDireccion;
