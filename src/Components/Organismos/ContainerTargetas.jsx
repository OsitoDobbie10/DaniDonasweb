import styled from "styled-components"
import {v} from "../../index"
import BtNCerrar from "../../Assets/cerrar.svg";
const ContainerTargetas = ({contenido,cerrar,animacion}) => {
  return (
    <Container>
    <div className="cerrar-modal">
    <img src={BtNCerrar}
                 alt="CerrarBTN"
                 onClick={cerrar}/>
    </div>
    <div className={`formulario ${animacion ? 'animar': 'cerrar'}`}>
    {contenido}
    </div>
    </Container>
  )
}
const Container = styled.div`
position: fixed;
background-color: rgb(0 0 0 / 0.92);
top: 0;
left: 0;
right: 0;
bottom: 0;
color: white;
overflow: hidden;
z-index: 1000;
.cerrar-modal {
    position: absolute;
    right: 3rem;
    top: 3rem;
    width: 2rem;
    height: 2rem;
    &:hover{
      cursor: pointer;
      background-color: orange;
    }
}
.cerrar-modal img { 
    width: 100%;
}
.formulario {
    width: 55rem;
    height: 1000px;
    transition-property: all;
    transition-duration: 300ms;
    transition-timing-function: ease-in;
    opacity: 0;
    left:25%;
    top:20%;
    position: absolute;
    background-color: white;
    border-radius: 15px;
    height: 420px;
    overflow:scroll;
    color:black;
    border-radius:12px;
  }

  .formulario.animar {
    position:absolute;
    opacity: 1;
    width:55rem;
    height: 600px;
    display: flex;
    flex-direction: column;
    gap:20px;
    left: 20%;
    top:10%;}

  .formulario.cerrar {
    opacity: 0;
    left: 30%;
    top:25%;
}
`;
export default ContainerTargetas;
