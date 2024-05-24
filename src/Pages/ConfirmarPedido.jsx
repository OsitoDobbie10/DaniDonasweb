import styled from 'styled-components';
import {UseGlobal,Loading,HeaderDonna,v,Icono,DomicioData,EncargarData,RecogerData} from '../index';
import { useNavigate } from 'react-router-dom';
import IconoPago from "../Assets/punto-de-venta.png";
import Telefono from "../Assets/AddNumber.png";
import Domicio from "../Assets/Domicilio.png";
import Caminante from "../Assets/caminante.png";
import Tienda from "../Assets/tienda.png";
const ConfirmarPedido = () => {
  const {IntroEnvio,setIntroEnvio,SeleccionarProducto,
         getdireccion,getRecoger,getencargar,NumeroTelefono,view,valuePedido} = UseGlobal();
  const {tipo} = view;
  const {precio} = valuePedido;
  const {Numero} = NumeroTelefono;
  const {ciudad,colonia,referencia,direccion,Latitude,Longitud} = getdireccion;
  const {fecharecoger,horarecoger} = getRecoger;
  const {nombre,dir,hora} = getencargar;
  let gastoenvio = 25;
  let evaluargastoenvio = tipo === "Domicilio" ? gastoenvio : 0;
  const ElementoResumen = (texto)=>{
    switch (texto) {
      case "Domicilio":
        return <DomicioData ciudad={ciudad} colonia={colonia} direccion={direccion}/>
        break;
      case "Encargar":
        return <EncargarData nombre={nombre} dir={dir} hora={hora}/>
        break;
      case "Recoger":
        return <RecogerData fecharecoger={fecharecoger} horarecoger={horarecoger}/>
        break;
    }
  }
  setTimeout(()=>{
  setIntroEnvio(false);
  },2000)
  if(IntroEnvio) return <Loading/>;
  return (
    <Container>
    <HeaderDonna icono={<v.Atras/>} texto="Confirmar Datos" funcion="/Carrito"/>
    <div className="Contenido1Pago">
    <div className="EncabezadoPago1">
    <img src={IconoPago} alt="PagoImagen"/>
    <span className='PagoComo'>¿Como nos comunicamos contigo?</span>
    </div>
    <div className="Contenido2Pago">
    <img src={Telefono} alt="TelefonoUsado"/>
    <div className="InfoTelefono">
    <span>Telefono Principal</span>
    <span>{Numero}</span>
    </div>
    </div>
    <div className="Contenido3Pago">
    <div className="Elem1">
    {
      tipo === "Domicilio" ? <Icono icono={Domicio}/> : <Icono icono={Caminante}/>
    }
    {
      tipo === "Domicilio" ? <span className='QueSera'>Domicilio</span> : <span className='QueSera'>Pickup</span>
    }
    </div>
    <div className="InformacionGeneralPedido">
    <img src={Tienda} alt="Tienda"/>
    <div className="resumenDatos">
    {ElementoResumen(tipo)}
    </div>
    </div>
    </div>
    <div className="ContenidoPago4">
    <span>Disponble cualquier tipo de pedido desde las 10:00 a.m hasta 7:00 p.m</span>
    </div>
    <div className='ContenidoPago5'>
    <div className="leftPay">
    <span className='ProductsPay'>Total de productos</span>
    <span className='ProductsPay'>Gastos de envio</span>
    </div>
    <div className="rigthpay">
    <span className='rigthpay'>L.{precio}.00</span>
    {
      tipo === "Domicilio" ? <span className='ProductsPay'>{gastoenvio}</span> : <></>
    }
    </div>
    </div>
    <div className='ContenidoPago5'>
    <span className='Textopago'>Continuar</span>
    <span className='Textopago'>L.{precio + evaluargastoenvio}.00</span>
    </div>
    </div>

    </Container>
  )
}
const Container = styled.div``;
export default ConfirmarPedido
