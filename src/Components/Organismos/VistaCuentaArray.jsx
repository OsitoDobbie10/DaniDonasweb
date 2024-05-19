import styled from "styled-components";
import {HeaderDonna,v,ItemDeposito} from "../../index";
const VistaCuentaArray = ({array}) => {
  return (
    <Container>
    <div className="mostrarHeader">
    <HeaderDonna texto="Cuentas para deposito" icono3={<v.agregar/>} ruta2="/Configuracion"/>
    </div>
    <div className="ContenedorParaCuentas">
    {
        array?.map((dat)=>{
            return <ItemDeposito data={dat} key={dat.id}/>
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
.ContenedorParaCuentas{
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap:20px;
    &:hover{
      cursor: pointer;
    }
}
`;
export default VistaCuentaArray
