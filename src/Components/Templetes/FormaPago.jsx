import styled from "styled-components"
import {HeaderDonna,UseGlobal,v,InputsParaRTN,MetodoPagoEleme} from "../../index";
import SimboloMoney from "../../Assets/Money.png";
import Efectivo from "../../Assets/dar-dinero.png";
import Targeta from "../../Assets/tarjeta.png";
const FormaPago = () => {
  const {ValueInputRTN,GetValueInputRTN,
         GetRTN,ValueRTN,OpenEfectivo,OpenTargeta} = UseGlobal();
  const {InputRTN} = ValueInputRTN;
  const {RTN,Negocio} = ValueRTN;
  let ChangedRTN = InputRTN === "InputRTN" ?  true : false;
  return (
    <Container>
    <HeaderDonna icono={<v.Atras/>} texto="Forma de Pago" ruta="/Carrito"/>
    <div className="ContainerRTN">
    <input type="checkbox" value="InputRTN" id="InputRTN" className="checkInputRTN" name="InputRTN" onChange={GetValueInputRTN}/>
    <span className="SpanInputRTN">¿Facturar con RTN?</span>
    </div>
    <div className="SValueRTN">
    {
      ChangedRTN ? <InputsParaRTN funcion={GetRTN} RTN={RTN} Negocio={Negocio}/> : <></>
    }
    </div>
    <div className="ContenedorOpcionesPago">
    <div className="Item1Con">
    <img src={SimboloMoney} alt="Money"/>
    <span className="PagoImm">Selecciona tu forma de pago.</span>
    </div>
    <div className="PayWay">
    <MetodoPagoEleme icono1={Efectivo} 
                     texto="PAGO EN EFECTIVO"
                     info="Pagas tu pedido en efectivo, cuando lo recibas"
                     icono2={<v.FlechaBoton/>}/>
    <MetodoPagoEleme icono1={Targeta}
                     texto="PAGO CON TARGETA DE CREDITO/DEBITO"
                     info="El cliente ingresa y autoriza el pago con su targeta"
                     icono2={<v.FlechaBoton/>}/>
 
    </div>
    </div>
    </Container>
  )
}
const Container = styled.div``;
export default FormaPago
