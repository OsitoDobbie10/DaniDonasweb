import styled from "styled-components";
import {v,HeaderDonna,ViewRestaurantes,EditarCuenta,
        UseGlobal,ModalDireccionesConfig,ContenedorModalCon,
        FormularioEntragar,ContainerTargetas,VistaTargetasArray} from "../index";
import { useNavigate } from "react-router-dom";
import Celular from "../Assets/AddNumber.png";
import { useQuery } from '@tanstack/react-query';
const Configuracion = ({datosgenerales}) => {
const {cuenta,idUsuario,showCuentaPersonal,direccion,targetas,showTargetas} = ViewRestaurantes();
useQuery({queryKey:["MostrarInfoCliente"],queryFn:()=>showCuentaPersonal({idusuario:idUsuario})});
useQuery({queryKey:["ArregloTargetasUsuario"],queryFn:()=>showTargetas()});
const {user} = datosgenerales;
const {user_metadata} = user;
const {email} = user;
const {telefono,favorito} = cuenta;
let navegarpreguntas = useNavigate();
const preguntas = ()=>{
  navegarpreguntas("/Preguntas")
}
const {openeditarconfig,opendireccionconfig,opentargetasconfig,opencuentasconfig,
      animareditar,animardireccion,animartargeta,animardeposto,obtenerformEditar,formeditar,
      closeconfig1,closeconfig2,closeconfig3,closeconfig4,
      openconfig1,openconfig2,openconfig3,openconfig4} = UseGlobal();
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
    {openeditarconfig && <ModalDireccionesConfig cerrar={closeconfig1} 
                                                 animacion={animareditar}
                                                 funcion={obtenerformEditar}
                                                objeto={formeditar}
                                                 id={idUsuario}/>}
    {opendireccionconfig && <ContenedorModalCon 
                             contenido={<FormularioEntragar direcciones={direccion}/>}
                             cerrar={closeconfig2}
                             animacion={animardireccion}
                             /> }
    {opentargetasconfig && <ContainerTargetas cerrar={closeconfig3} animacion={animartargeta} 
                             contenido={<VistaTargetasArray 
                                         array={targetas}
                                         IdUsuario={idUsuario}/>}/>}
    <div className="encabezadoUsuario">
    <span className="IconoUser">{<v.User/>}</span>
    <span className="ConfigPerfil">Configuracion del perfil</span> 
    <span className="EdicionUsuario" onClick={openconfig1}>Editar</span>
    </div>
    <div className="InformaciongeneralUusuario">
    <div className="columna1Datos">
    <span className="itemcolumna1">Nombre</span>
    <span className="itemcolumna1">Correo electronico</span>
    <span className="itemcolumna1">Telefono</span>
    </div>
    <div className="columna2Datos">
    <span className="itemscolumna2">{datosgenerales.user.user_metadata.first_name}</span>
    <span className="itemscolumna2">{email}</span>
    <span className="itemscolumna2">{telefono}</span>
    </div>
    </div>
    <div className="adicionalesCuenta">
    <div className="columna1adiconales">
    <span className="iconosadiconales">{<v.IconoMpa/>}</span>
    <span className="iconosadiconales">{<v.targetacredito/>}</span>
    <span className="iconosadiconales">{<v.targetacredito/>}</span>
    <span className="iconosadiconales">{<v.Pregunta/>}</span>
    </div>
    <div className="columna2adiconales">
    <span className="infoadiconalitem">Direcciones de entraga</span>
    <span className="infoadiconalitem">Targetas de credito</span>
    <span className="infoadiconalitem">Deposito bancario</span>
    <span className="infoadiconalitem">Preguntas Frecuentas</span>
    </div>
    <div className="columna3adicional">
    <span className="agregarinfo" onClick={openconfig2}>{<v.agregar/>}</span>
    <span className="agregarinfo" onClick={openconfig3}>{<v.agregar/>}</span>
    <span className="agregarinfo" onClick={openconfig4}>{<v.agregar/>}</span>
    <span className="agregarinfo" onClick={preguntas}>{<v.agregar/>}</span>
    </div>
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

   .InformaciongeneralUusuario{
    width: 90%;
    height:300px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 20px auto;
    background-color: aliceblue;
    .columna1Datos{
      display: flex;
      flex-direction: column;
      gap:15px;
    .itemcolumna1{
      color: gray;
      font-weight: 700;
      font-size:20px;
    }
    }

    .columna2Datos{
      display: flex;
      flex-direction: column;
      gap:15px;
      .itemscolumna2{
      color: gray;
      font-weight: 400;
      font-size:20px;
    }
    }
   }
   .adicionalesCuenta{
    width: 90%;
    height:300px;
    display: flex;
    gap:25px;
    justify-content:center;
    align-items: center;
    margin: 10px auto;
    background-color:aliceblue;
    .columna1adiconales{
      display: flex;
      flex-direction: column;
      gap:15px;
      .iconosadiconales{
      font-weight: 700;
      font-size:20px;
      }
    }
    .columna2adiconales{
      display: flex;
      flex-direction: column;
      gap:15px;
      .infoadiconalitem{
      color: gray;
      font-weight: 400;
      font-size:20px;
      }

    }
    .columna3adicional{
      display: flex;
      flex-direction: column;
      gap:15px;
      .agregarinfo{
      font-weight: 400;
      font-size:20px;
      &:hover{
        cursor: pointer;

      }
      }
    }
   }
}
`;
export default Configuracion
