import styled from "styled-components";
import {HeaderDonna,v} from "../index"
const Targetas = () => {
  return (
    <Container>
    <HeaderDonna icono={<v.Atras/>} texto="Formulario de Targeta" icono2={<v.HOME/>} ruta="/Configuracion"/>
    </Container>
  )
}
const Container = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;

`;
export default Targetas;
