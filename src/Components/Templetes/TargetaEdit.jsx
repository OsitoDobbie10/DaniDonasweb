import styled from "styled-components";
import {v,HeaderDonna,PaymentForm2,UseGlobal} from "../../index";
const TargetaEdit = () => {
  const {estadoEditarTargetas} = UseGlobal();
  return (
    <Container>
    <HeaderDonna icono={<v.Atras/>} 
                 texto="Editar datos de targeta" 
                 icono2={<v.HOME/>}
                 ruta="/Configuracion"/>
    <div className="layout">
    <PaymentForm2/>
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

`
export default TargetaEdit
