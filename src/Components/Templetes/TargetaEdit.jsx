import styled from "styled-components";
import {v,HeaderDonna,PaymentForm} from "../../index";

const TargetaEdit = () => {
  return (
    <Container>
    <HeaderDonna icono={<v.Atras/>} 
                 texto="Editar datos de targeta" 
                 icono2={<v.HOME/>}
                 ruta="/Configuracion"/>
    <div className="layout">
    <PaymentForm/>
    </div>
    </Container>
  )
}
const Container = styled.div`
    
`
export default TargetaEdit
