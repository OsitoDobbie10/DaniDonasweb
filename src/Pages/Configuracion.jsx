import styled from "styled-components"
import {v,HeaderDonna} from "../index"
import { useNavigate } from "react-router-dom"
const Configuracion = ({datosgenerales}) => {
  return (
    <Container>
    <HeaderDonna icono={<v.Atras/>} texto="Configuracion" ruta="/"/>
    <div className="ContenidoUsuario">
    <div className="DatosGeneralesCuenta">
    <span className="TuNombre">{datosgenerales.user.user_metadata.first_name}</span>
    <span className="TuEmail">{datosgenerales.user.user_metadata.email}</span>
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
}
`;
export default Configuracion
