import styled from "styled-components";
import {FuncionesModal} from "../../index";
import BTNcerrar from "../../Assets/cerrar.svg";
const ModalMenu = ({data,cerrar,animacion,funcionsubmit}) => {
  return (
    <Container>
       <div className="cerrar-modal">
            <img src={BTNcerrar}
                 alt="CerrarBTN"
                 onClick={cerrar}/>
      </div>
      <div className={`formulario ${animacion ? 'animar': 'cerrar'}`}>
     <legend className='legenda'>Menu</legend>
        {
            data.map((datos)=>{
                return <div key={datos.id} className='elemento' onClick={()=>funcionsubmit(datos.name)}>
                        <span className='text'>{datos.name} 💬</span>
                       </div>
            })
        }
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
      background-color: yellow; 
    }
}
.cerrar-modal img {
    width: 100%;
}

.formulario {
    max-width: 52rem;
    width: 40rem;
    transition-property: all;
    transition-duration: 300ms;
    transition-timing-function: ease-in;
    opacity: 0;
    left: 30%;
    top:25%;
    position: relative;
    background-color: white;
    border-radius: 15px;
    height: 320px;
  }
  .legenda{
    font-size:25px;
    font-weight: 900;
    margin-bottom: 20px;
    color:red;
    text-align: center;
  }
  .elemento{
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 20px;
  } 
  .text{
    font-size: 20px;
    color: black;
    font-weight: bold;
    gap: 15px;
    text-align: center;
    &:hover{
        cursor: pointer;
        opacity: 0.3;
        border-radius: 12px;
    }
  }
  .check{
    margin-right:5px;
    width:20px;
  }
 
  .Boton{
    display: block;
    width: 100px;
    height: 40px;
    padding: 5px 5px;
    background: orange;
    color:white;
    font-weight: bold;
    border-radius: 8%;
    margin: 10px auto;
    &:hover{
      opacity: 0.5;
      cursor: pointer;
    }
  }

.formulario.animar {
    position: relative;
    opacity: 1;
    left: 30%;
    top:25%;
}

.modal .formulario.cerrar {
    opacity: 0;
    left: 30%;
    top:25%;
}

`
export default ModalMenu
