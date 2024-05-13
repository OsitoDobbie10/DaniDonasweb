import styled from "styled-components";
import {HeaderDonna,v,PaymentForm} from "../index"
const Targetas = () => {
  return (
    <Container>
    <HeaderDonna icono={<v.Atras/>} texto="Formulario de Targeta" icono2={<v.HOME/>} ruta="/Configuracion"/>
    <div className="layout">
    <PaymentForm/>
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
  justify-content: center;
  height: 500px;
  margin: 30px 0 20px 0;
}

`;
export default Targetas;
