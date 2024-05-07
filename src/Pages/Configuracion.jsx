import styled from "styled-components";
import {v,HeaderDonna} from "../index";
import { useNavigate } from "react-router-dom";
import Celular from "../Assets/AddNumber.png";
const Configuracion = ({datosgenerales}) => {
  return (
    <Container>
    <HeaderDonna icono={<v.Atras/>} texto="Configuracion" ruta="/"/>
    <div className="ContenidoUsuario">
    <div className="DatosGeneralesCuenta">
    <span className="TuNombre">{datosgenerales.user.user_metadata.first_name}</span>
    <span className="TuEmail">{datosgenerales.user.user_metadata.email}</span>
    </div>
    <div className="AddMyPhone">
    <img src={Celular} alt="AddPhone" className="ImagenAddMyPhone"/>
    <span className="SimboloCel">+</span>
    </div>
    <div className="encabezadoUsuario">
    <span className="IconoUser">{<v.User/>}</span>
    <span className="ConfigPerfil">Configuracion del perfil</span>
    <span className="EdicionUsuario">Editar</span>
    </div>
    </div>
    </Container>
  )
}
const Container = styled.div`
.ContenidoUsuario{
  width: 90%;
  height: 600px;
  margin: 10px auto;
  display: flex;
  flex-direction: column;
  position: relative;
  .DatosGeneralesCuenta{
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap:5px;
    .TuNombre{
      font-size: 30px;
      color: gray;
      font-weight: bold;
      text-align: center;
    }
    .TuEmail{
      font-size: 20px;
      color: gray;
      font-weight: 500;
      text-transform: unset;
      text-align: center;
    }
  }

  .AddMyPhone{
    position: absolute;
    top:20px;
    right:10px;
    width: 40px;
    height: 40px;
    display: flex;
    gap:5px;
    .ImagenAddMyPhone{
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
    .SimboloCel{
      font-size: 25px;
      font-weight: bold;
    }

  }
  .encabezadoUsuario{
      display: flex;
      justify-content: space-between;
      margin: 20px auto;
      width: 90%;
    .IconoUser{
      font-size: 30px;
      font-weight: bold;
      color: gray;
    }
    .ConfigPerfil{
      font-size: 30px;
      font-weight: bold;
      color: gray;
    }
    .EdicionUsuario{
      font-size: 30px;
      font-weight: bold;
      color: gray;
      &:hover{
        color: black;
        cursor: pointer;
      }
    }
    }
}
`;
export default Configuracion
