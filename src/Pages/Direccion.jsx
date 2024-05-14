import styled from "styled-components"
import {Map,ContainerModal,FuncionesModal,ViewRestaurantes} from "../index"
import { useNavigate } from "react-router-dom";
import { useQuery } from '@tanstack/react-query';
const Direccion = ({user}) => {
  const {closeFormulario,abrirFormulario,modal5,animandoModal5} = FuncionesModal();
  const {showusuario,usuario} = ViewRestaurantes();
  useQuery({queryKey:["UsuarioParaDato"],queryFn:()=>showusuario()});
  
  let backend = useNavigate();
  const back = ()=>{ 
    backend("/")
  }
  return (
    <Container>
     {modal5 ? <ContainerModal valor={usuario} cerrar={closeFormulario} animacion={animandoModal5}/> : <div></div>}
     <span className="title">Crear Direccion</span>
     <span className="Enlace" onClick={back}>Inicio</span>
     <span className="info">Dale click al mapa para ubicar tu direccion</span>
     {modal5 ? <div></div>:<Map/>}
     <button className="pedir" onClick={abrirFormulario}>
      Continuar
     </button>
    </Container>
  )
}
const Container = styled.div`
width: 100%;
height: 100vh;
display: flex;
flex-direction: column;
justify-content: center;
position: relative;
.title{
  color:red;
  font-size: 30px;
  margin-bottom: 20px;
  text-align: center;
  font-weight: 600;
}
.info{
  text-align: center;
  font-weight: 500;
}
.Enlace{
  position: absolute;
  top:35px;
  right: 55px;
  color: black;
  font-weight: bold;
  &:hover{
    cursor: pointer;
    color: orange;
  }
}
.pedir{
  display: block;
  margin: 15px auto;
  width: 250px;
  font-size: 20px;
  font-weight: bold;
  color:white;
  background-color: red;
  border-radius: 10px;
  &:hover{
    cursor: pointer;
    opacity: 0.8;
  }
}
`;
export default Direccion
