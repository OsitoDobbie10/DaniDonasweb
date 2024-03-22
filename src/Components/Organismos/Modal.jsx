import React from 'react'
import styled from 'styled-components'
import BTNcerrar from "../../Assets/cerrar.svg";
const Modal = ({data,cerrar,animacion,funcionsubmit,funcionvalue}) => {
  return (
    <Container>
      <div className="cerrar-modal">
            <img src={BTNcerrar}
                 alt="CerrarBTN"
                 onClick={cerrar}/>
      </div>
        <div className={`formulario ${animacion ? 'animar': 'cerrar'}`}>
        <legend className='legenda'>Tipo de pedido</legend>
        {
            data.map((datos)=>{
                return <div key={datos.id} className='elemento'>
                        <span className='icono'>{datos.icono}</span>
                        <div className='textos'>
                        <span className='text1'>{datos.tipo}</span>
                        <span className='text1'>{datos.descp}</span>
                        </div>
                        <input type="checkbox" name="value" className='check' onChange={()=>funcionvalue(datos)}/>
                       </div>
            })
        }
        <button className='Boton' onClick={funcionsubmit}>Continuar</button>
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
    justify-content:space-between;
    align-items: center;
  }
  .icono{
    font-size: 30px;
    margin-left: 5px;
  }
  .textos{
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: start;
    font-size: 15px;
    color:gray;
    font-weight: 800;
 .text1{
    margin-bottom: 5px;
    text-align: start;
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

`;
export default Modal
 