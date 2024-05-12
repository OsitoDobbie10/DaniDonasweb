import styled from "styled-components"
import {HeaderDonna,v} from "../../index"
const VistaTargetasArray = ({array}) => {
  return (
    <Container>
    <div className="mostrarHeader">
    <HeaderDonna texto="Targetas de Credito o Debito" icono3={<v.agregar/>} ruta2="/Targetas"/>
    </div>
    <div className="ContenedorParaVistaTargetas">
    {
        array?.map((dat)=>{
            return <div className="ItemTaregta">

                   </div>
        })
    }
    </div>
    </Container>
  )
}
const Container = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
.mostrarHeader{
    width: 90%;
    display: block;
    margin:10px auto;
}


.ContenedorParaVistaTargetas{
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;

}

`;
export default VistaTargetasArray
