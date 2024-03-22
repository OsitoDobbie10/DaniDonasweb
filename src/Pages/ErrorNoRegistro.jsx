import {v} from "../index"
import { useNavigate } from 'react-router-dom'
import styled from "styled-components"
const ErrorNoRegistro = ({valor}) => {
  const nave = useNavigate();
  return (
    <Containner>
      <span className="Back" onClick={()=>{nave("/")}}>Regresar</span>
      <h1 className="tiulo">{valor}</h1>
      <span className="View">{<v.CloseView/>}</span>
      <h2 className="Emoji">Iniciar secion para poder ingresar a esta seccion</h2>
      <div className="Botones">
      <button 
      onClick={()=>{nave("/Login")}}
      className="btn btn-danger">
      Iniciar secion
      </button>
      <button 
      onClick={()=>{nave("/Login")}}
      className="btn btn-warning">
      Registar
      </button>
      </div>
    </Containner>
  )
}
const Containner = styled.div`
width:90%;
height: 100vh;
display: flex;
flex-direction: column;
gap:15px;
justify-content: center;
position: relative;
margin: auto;
.Back{
  position: absolute;
  top:30px;
  right: 30px;
  font-size: black;
  font-weight: 500;
  &:hover{
    cursor: pointer;
    color:orange;
  }
}
.tiulo{
    text-align: center;
    color:red;
    font-size: 35px;
    font-weight: bold;
    margin-top: 50px;
}

.View{
    font-size: 105px;
    font-weight: bold;
    color: gray;
    text-align: center;
}

.Emoji{
    font-size: 30px;
    color:gray;
    font-weight: 400;
    text-align: center;
}

.Botones{
  width: 200px;
  margin: 30px auto;
  display:flex;
  flex-direction: column;
  gap:20px;
}

`
export default ErrorNoRegistro; 
