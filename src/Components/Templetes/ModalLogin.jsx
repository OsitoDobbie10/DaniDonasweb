import styled from 'styled-components';
import {UseGlobal,SignUp,Ingresar,Succes,Ingresar2} from '../../index';
import BTNCerrar from '../../Assets/cerrar.svg'
const ModalLogin = ({animacion,cerrar}) => {
    const {abrir,setAbrir,show,logic,error,animandoModal3} = UseGlobal();
    const abrir1 = ()=>{
        setAbrir(true);
    }
    const abrir2 = ()=>{
        setAbrir(false)
    }
  return (
    <Container>
        <div className="cerrar-modal">
            <img src={BTNCerrar}
                 alt="CerrarBTN"
                 onClick={cerrar}/>
        </div>
        <div className={`formulario ${animacion ? 'animar': 'cerrar'}`}>
        <div className="botones">
        <button type="button" className="btn btn-danger" onClick={abrir1}>Crear Cuenta</button>
        <button type="button" className="btn btn-secondary" onClick={abrir2}>Registrarse</button> 
        </div> 
        
        {
            abrir ? <SignUp/> : <Ingresar/>
        }
        {
            error ? <span className='showmessaner'>{logic}</span> : <div></div>
        }
        {
            animandoModal3 ? <span className='showmessaner2'>
            {show}
            </span>: <div></div>
        }
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
    width: 75rem;
    transition-property: all;
    transition-duration: 300ms;
    transition-timing-function: ease-in;
    opacity: 0;
    left: 20%;
    top:10%;
    position: relative;
    background-color: #ddded6;
    border-radius: 15px;
    height: 600px;
    border: 1px solid black;

}
.botones{
    position:relative;
    top:10px;
    left: 5%;
    display: flex;
    gap:20px;
}

.formulario.animar {
    position: relative;
    opacity: 1;
    left: 10%;
    top:10%;
    display: flex;
    flex-direction: column;
}

.modal .formulario.cerrar {
    opacity: 0;
    left: 30%;
    top:25%;
}

.showmessaner{
  text-align: center;
    color: red;
    font-weight: bold;
    font-size: 20px;
    background-color:white;
    width: 320px;
    margin: 20px auto 0 auto;
}

.showmessaner2{
    text-align: center;
    color: green;
    font-weight: bold;
    font-size: 20px;
    background-color:white;
    width: 320px;
    margin: 20px auto 0 auto;
}



`
export default ModalLogin
