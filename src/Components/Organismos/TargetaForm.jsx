import styled from 'styled-components';
import {ViewRestaurantes,HeaderDonna,v} from '../../index';
const TargetaForm = () => {
const {targetas,showTargetas} = ViewRestaurantes();
  return (
    <Container>
    <HeaderDonna icono={<v.Atras/>} texto="Targetas de debito"/>
    <div className="agregartargetas">
    
    </div>

    </Container>
  )
}
const Container = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;


`;
export default TargetaForm;
