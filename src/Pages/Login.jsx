import styled from 'styled-components'
import {ViewRestaurantes,v,ModalLogin,FuncionesModal} from "../index"
import { useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const navegarback = useNavigate();
  const {OpenLogin,CloseLogin,
         modal2,animandoModal2,setModal2} = FuncionesModal();
  const {restaurantes} = ViewRestaurantes();
  const {getrestaurantes} = ViewRestaurantes();
  useQuery({queryKey:["RestauranteLogin"],queryFn:()=>getrestaurantes()});
  return (
    <Container>
    <div className="header">
      {
        modal2 && <ModalLogin animacion={animandoModal2} cerrar={CloseLogin}/>
      }
    <h1>APP Compras</h1>
    <span className='back' onClick={()=>navegarback("/")}>
    Regresar 
    </span>
    <h2>Bienvenido</h2>
    </div>
    <div className="heeader2">
    <span className='icono'>{<v.Mensage/>}</span>
    <span className='title'>Bienvenido ingresa para comprar en nuestra pagina</span>
    </div>
    <div className="header3">
    <span className='icono2'>{<v.Cara/>}</span>
    <span className='title2'>si aun no tienes una cuenta en nuestra pagina web <span className='Enlace'>Crear Cuenta</span></span>
    </div>
    <div className="datos">
    {
      restaurantes.map((data)=>{
        return <div className='iconos' key={data.id}>
               <img src={data.imagen} alt={data.nombre}/>
               </div>
      })
    }
    </div>
    <div className="secion">
    <button type="button" className="btn btn-danger" onClick={OpenLogin}>Iniciar Secion</button>
    <button type="button" className="btn btn-secondary" onClick={OpenLogin}>Registrarse</button>
    </div>
    </Container>
  )
}
const Container = styled.div`
width:100%;
background-color: white;
color:black;
display: flex;
flex-direction: column;
justify-content: center;
position: relative;
.header{
  margin-top: 50px;
  h1{
    color: red;
    font-size: 40px;
    font-weight: bold;
    text-align: center;
    margin-bottom: 30px;
  }
  .back{
    position: absolute;
    top:20px;
    right:30px;
    &:hover{
      color:blue;
      cursor: pointer;
    }
  }
  h2{
    color: gray;
    font-size: 30px;
    font-weight: 800;
    text-align: center;
    margin-bottom: 20px;
  }
}

.heeader2{
  display: flex;
  justify-content: center;
  gap:20px;
  .icono{
    font-size: 25px;
    font-weight: bold;
    color:gray;
  }

  .title{
    font-size: 25px;
    font-style: italic;
  }
}

.header3{
  display: flex;
  justify-content: center;
  gap:20px;

  .icono2{
    font-size: 25px;
    font-weight: bold;
    color:gray;
  }
  .title2{
    font-size:20px;
  }
}

.datos{
  display: flex;
  flex-wrap: wrap;
  width: 80%;
  margin: auto;
  justify-content: space-around;
  .iconos{
    width: 300px;
    height: 300px;
  }

  .iconos>img{
    width: 100%;
    height: 100%;
  }

}

.secion{
  display: flex;
  gap:20px;
  justify-content: center;
}

`;
export default Login;
