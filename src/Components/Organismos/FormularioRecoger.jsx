import styled from 'styled-components'
import {UseGlobal,Recoger,Encargar} from "../../index";
const FormularioRecoger = () => {
  const {abrirformulario,
         setAbrirformlario,
         obtenerEncargar,obtenerRecoger} = UseGlobal();
  const open = ()=>{
    setAbrirformlario(!abrirformulario);
  }
  let recoger = "Recoger";
  let encargar = "Encargar"
  return (
    <Container>
    <button className='Boton' onClick={open}>{abrirformulario ? recoger : encargar}</button>
    {
      abrirformulario ? <Recoger title="Recoger" funcion={obtenerRecoger}/> : 
                        <Encargar title="Encargo 24 horas previo" funcion={obtenerEncargar}/> 
    }
    </Container>
  )
}
const Container = styled.div`
width: 100%;
height: 100%;
position: relative;
.Boton{
  position:absolute;
  top:20px;
  left: 15px;
  background-color: red;
  color:white;
  width: 100px;
  font-size: 20px;
  font-weight: bold;
  &:hover{
    opacity: 0.8;
  }
}
`;
export default FormularioRecoger
