import styled from "styled-components";
import {HeaderDonna,v} from "../index"
const Targetas = () => {
  return (
    <Container>
    <HeaderDonna icono={<v.Atras/>} texto="Formulario de Targeta" icono2={<v.HOME/>} ruta="/Configuracion"/>
    <div className="layout">
    </div>

    </Container>
  )
}
const Container = styled.div`
width: 100%;
height: 100%;
background-color: #fafafa;
display: flex;
flex-direction: column;
.layout{
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
}

`;
export default Targetas;
