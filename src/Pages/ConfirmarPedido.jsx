import styled from 'styled-components';
import {UseGlobal,SpinnerEnvio} from '../index';
const ConfirmarPedido = () => {
  const {IntroEnvio,setIntroEnvio} = UseGlobal();
  setTimeout(()=>{
  setIntroEnvio(false);
  },2000)
  if(IntroEnvio) return <SpinnerEnvio/>;
  return (
    <Container>
    
    </Container>
  )
}
const Container = styled.div``;
export default ConfirmarPedido
