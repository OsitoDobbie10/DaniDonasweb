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
    <HeaderDonna icono={<v.Atras/>} texto="Confirmar Datos" ruta="/Carrito"/>
    <div className="Contenido1Pago">
    <div className="EncabezadoPago1">
    <img src={IconoPago} alt="PagoImagen"/>
    <span className='PagoComo'>¿Como nos comunicamos contigo?</span>
    </div>
    <div className="Contenido2Pago">
    <img src={Telefono} alt="TelefonoUsado" className='Imagencelular'/>
    <div className="InfoTelefono">
    <span className='Tel1'>Telefono Principal</span>
    <span className='Tel2'>{Numero}</span>
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
    <>
    <img src={Tienda} alt="Tienda" className='ImagenTienda11'/>
    </>
    <div className="resumenDatos">
    {ElementoResumen(tipo)}
    </div>
    </div>
    </div>
    <div className="ContenidoPago4">
    <span>"Disponble cualquier tipo de pedido desde las 10:00 a.m hasta 7:00 p.m"</span>
    </div>
    <div className='ContenedorMenuPago'>
    <div className='ContenidoPago5'>
    <div className="leftPay">
    <span className='ProductsPay'>Total de productos</span>
    <span className='ProductsPay'>Gastos de envio</span>
    </div>
    <div className="rigthpay">
    <span className='rigthpay'>L {precio}.00</span>
    {
      tipo === "Domicilio" ? <span className='ProductsPay'>{gastoenvio}.00</span> : <></>
    }
    </div>
    </div>
    <div className='ContenidoPagoBoton'>
    <span className='Textopago'>Continuar</span>
    <span className='Textopago'>L.{precio + evaluargastoenvio}.00</span>
    </div>
    </div>
    </div>

    </Container>
  )
}
const Container = styled.div`
width: 90%;
margin:auto;
.Contenido1Pago{
  display: flex;
  flex-direction: column;
  gap:10px;
  justify-content: center;
.EncabezadoPago1{
  display: flex;
  gap:10px;
  width: 100%;
  height: 100px;
  align-items: center;
  justify-content: center;
  img{
    width: 80px;
    height: 80px;
  }
  .PagoComo{
    font-size: 22px;
    color: blue;
    font-weight: 700;
  }
}
.Contenido2Pago{
  display: flex;
  gap:10px;
  justify-content: center;
  align-items: center;
 .Imagencelular{
  width: 50px;
  height: 50px;
 }
 .InfoTelefono{
  display: flex;
  flex-direction: column;
  gap:4px;
 .Tel1{
  color: gray;
  font-weight: 600;
  font-size: 18px;
}
.Tel2{
  color: blue;
  font-weight: 400;
  font-size: 16px;
}
 }


}
.Contenido3Pago{
  width: 100%;
  margin-top: 25px;
  gap:20px;
  display: flex;
  flex-direction: column;
  .Elem1{
    display: flex;
    justify-content: center;
    gap:10px;
    align-items: center;
  }

.InformacionGeneralPedido{
width: 100%;
display: flex;
justify-content: center;
gap:35px;
.ImagenTienda11{
  width: 100px;
  height: 100px;
}
}
}
.ContenidoPago4{
display: flex;
justify-content: center;
span{
  font-size: 18px;
  color: green;
  font-weight:700;
  text-align: center;
}
}
.ContenedorMenuPago{
  width: 800px;
  background-color: aliceblue;
  margin:10px auto ;
  border-top-color: 1px solid black;
  display: flex;
  flex-direction: column;
  gap:5px;
  justify-content: center;
  border-radius: 20px;
  .ContenidoPago5{
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    .leftPay{
      display: flex;
      flex-direction: column;
      gap:40px;
      .ProductsPay{
        font-weight: 700;
        font-size: 20px;
      }
    }
    .rigthpay{
      display: flex;
      flex-direction: column;
      gap:30px;
      .rigthpay{
        font-weight: 700;
        font-size: 25px;
        color: red;
      }
      .ProductsPay{
        font-weight: 700;
        font-size: 18px;
        color: gray;
      }
      
    }
  }

  .ContenidoPagoBoton{
    display: flex;
    gap:30px;
    margin: 30px auto;
    background-color: red;
    border-radius: 20px;
    width: 250px;
    height: 40px;
    align-items: center;
    justify-content: center;
    &:hover{
      cursor: pointer;
    }
    .Textopago{
      color:white;
      font-weight: bold;
    }
  }
}

}

`;
export default ConfirmarPedido
