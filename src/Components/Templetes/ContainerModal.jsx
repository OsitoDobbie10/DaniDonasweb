import styled from "styled-components"
import BTNCerrar from "../../Assets/cerrar.svg"
import {city,colo,Formlario1} from "../../index"
const ContainerModal = ({animacion,cerrar,valor}) => {
  return (
    <Container> 
      <div className="cerrar-modal">
            <img src={BTNCerrar}
                 alt="CerrarBTN"
                 onClick={cerrar}/>
    </div>
    <div className={`formulario ${animacion ? 'animar': 'cerrar'}`}>
    <Formlario1 c={city} n={colo} valor={valor}/>
    </div>
    </Container>
  )
}
const Container = styled.div`
position: absolute;
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
    max-width: 82rem;
    width: 72rem;
    transition-property: all;
    transition-duration: 300ms;
    transition-timing-function: ease-in;
    opacity: 0;
    left: 30%;
    top:10%;
    position: relative;
    background-color: white;
    border-radius: 15px;
    height: 600px;

}
.formulario.animar {
    position: relative;
    opacity: 1;
    left: 12%;
    top:10%;
    display: flex;
    flex-direction: column;
}

.modal .formulario.cerrar {
    opacity: 0;
    left: 30%;
    top:25%;
}

`
export default ContainerModal
