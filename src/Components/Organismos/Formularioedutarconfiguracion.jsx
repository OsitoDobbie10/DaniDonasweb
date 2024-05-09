import styled from "styled-components";
import {v} from "../../index"
const Formularioedutarconfiguracion = ({editarConfiguracionPerfil,Subircampos,objeto,idUsuario}) => {
  const submitedit = (e)=>{
    e.preventDefault();
    const {textoTelefonoEditar} = objeto;
    editarConfiguracionPerfil({idusuario:idUsuario});

  }
  return (
    <Container onSubmit={submitedit}>
    <span className="TextoTelefonoEditar">Telefono</span>
    <input type="text" onChange={Subircampos} name="textoTelefonoEditar" className="in1"/>
    <input type="submit" className="sub1" value="Editar"/>
    </Container>
  )
}
const Container = styled.form`
display: flex;
flex-direction: column;
justify-content: center;
width: 100%;
height: 100%;
gap:15px;
.TextoNombreEditar{
  font-size:25px;
  font-weight: 700;
  color: #e37a0b;
  text-align: center;}
.TextoTelefonoEditar{
  font-size:25px;
  font-weight: 700;
  color: #e37a0b;
  text-align: center; 
}
 .in1{
    margin: 4px auto;
    width:400px;
    height:30px;
    display:block;}

 .sub1{
  background-color: green;
  color:white;
  display: block;
  margin: 30px auto;
  width: 250px;
  font-size: 20px;
  font-weight: bold;
  border-radius: 15px;
  &:hover{
    opacity: 0.7;
  }
 }
`;
export default Formularioedutarconfiguracion
