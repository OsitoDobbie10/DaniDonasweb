import styled from "styled-components"
import {v,FuncionesModal,Targeta} from "../../index"

const FormularioEntragar = ({direcciones}) => {
  const {abrirDireccion} = FuncionesModal();
  return ( 
    <Container>
    <div className="add">
    <span className='Icono1' onClick={abrirDireccion}>{<v.agregar/>}</span>
    <span className='Texto'>Agregar nueva direccion de entrega</span>
    <span className='Icono2'>{<v.Fechadireccion/>}</span>
    </div>
    <div className="dataDIR">
    {
      
      direcciones.map((data)=>{
        return <Targeta key={data.id} data={data}/>
      })
    }
    </div>
    </Container>
  )
}
const Container = styled.div`
.add{
  display: flex;
  justify-content: center;
  gap:25px;
  font-size: 20px;
  position:absolute;
  top:20px;
  left:12%;
  margin-bottom: 20px;
  .Icono1{
    background-color: gray;
    padding:2px 5px;
    border-radius: 10px;
    color:white;
    font-weight:700;
     &:hover{
      cursor: pointer;
     }}
}

.dataDIR{
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap:25px;
  font-size: 20px;
  position:absolute;
  top:80px;
  left:12%;}

.modal .formulario.cerrar {
    opacity: 0;
    left: 30%;
    top:25%;
}
`;
export default FormularioEntragar
