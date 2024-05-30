import styled from "styled-components"
import {HeaderDonna,UseGlobal,v,InputsParaRTN,
        MetodoPagoEleme,ModalEfectivo,FuncionesModal,
        ModalTargeta,ViewRestaurantes,ModalCuenta} from "../../index";
import SimboloMoney from "../../Assets/Money.png";
import Efectivo from "../../Assets/dar-dinero.png";
import Targeta from "../../Assets/tarjeta.png";
import BancoPay from "../../Assets/smartphone.png"
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
const FormaPago = () => {
  const {Depositos} = ViewRestaurantes();
  const {ValueInputRTN,GetValueInputRTN,
         GetRTN,ValueRTN,ValueInputRTN2,
         GetValueInputRTN2,GetText,setSiEfectivo,setSiTargeta} = UseGlobal();
  const {OpenModalEfectivo,CloseModalEfectivo,OpenModalTargeta,CloseModalTargeta,
        OpenEfectivo,OpenTargeta,ModalOpenEfectivo,ModalOpenTargeta,
        OpenCuenta,ModalOpenCuenta,OpenModalCuenta,CloseModaCuenta} = FuncionesModal();
  const {InputRTN} = ValueInputRTN;
  const {RTN,Negocio} = ValueRTN;
  const {InputRTN1} = ValueInputRTN2;
  let ChangedRTN = InputRTN === "InputRTN" ?  true : false;
  let ChangePay = InputRTN1 === "InputRTN1" ? true : false;
  let pay = useNavigate();
  let CAAM = ()=>{
    Swal.fire({
      title: "Quieres agregar Targeta nueva?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Continuar",
      denyButtonText: `No continuar`
      }).then((result) => {
    if (result.isConfirmed) {
      pay('/Targetas')
      setSiTargeta(true);
    } else if (result.isDenied) {
      Swal.fire("No se agrego una Targeta nueva", "", "Intenta de nuevo");
    }
  });
  };
  let FuncionDatos = ()=>{
    CloseModalEfectivo();
    setSiEfectivo(true);
    Swal.fire({
      position:"top-end",
      icon: "success",
      title: "Dato Obtenido",
      showConfirmButton: false,
      timer: 1000,
    });
  };
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
                     icono2={<v.LineaDerecha/>}
                     funcion={OpenModalEfectivo}/>
     <MetodoPagoEleme icono1={BancoPay}
                     texto="PAGO CON Deposito"
                     info="El cliente Hace el pago a la cuenta correspondiente"
                     icono2={<v.LineaDerecha/>}
                     funcion={OpenModalCuenta}/>
    <MetodoPagoEleme icono1={Targeta}
                     texto="PAGO CON TARGETA DE CREDITO/DEBITO"
                     info="El cliente ingresa y autoriza el pago con su targeta"
                     icono2={<v.LineaDerecha/>}
                     funcion={OpenModalTargeta}/>
    </div>
    {
      OpenEfectivo ? <ModalEfectivo cerrar={CloseModalEfectivo} 
                                    animacion={ModalOpenEfectivo}
                                    GetFunction={GetValueInputRTN2}
                                    Visualizar={ChangePay}
                                    FunctionText={GetText}
                                    FuncionEfectivo={FuncionDatos}/> : <></>
    }
    {
      OpenTargeta ? <ModalTargeta cerrar={CloseModalTargeta} 
                                  animacion={ModalOpenTargeta}
                                  FunctionAdd={CAAM}/> : <></>
    }
    {
      OpenCuenta ? <ModalCuenta cerrar={CloseModaCuenta}
                                animacion={ModalOpenCuenta}
                                />: <></>
    }
    </div>
    </Container>
  )
}
const Container = styled.div`
display: flex;
flex-direction: column;
width: 90%;
margin: auto;
.ContainerRTN{
  display: flex;
  justify-content: center;
  gap:10px;
  margin-top: 20px;
.checkInputRTN{
  padding: 10px 10px;
  width: 40px;
  border:1px solid black;
}
.SpanInputRTN{
  font-weight: 800;
  font-size: 25px;

}
}
.SValueRTN{
  display: flex;
  justify-content: center;
  margin:10px auto;
}
.ContenedorOpcionesPago{
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap:10px;
  .Item1Con{
    display: flex;
    gap:10px;
    justify-content: center;
    align-items: center;
    img{
      width: 40px;
      height: 40px;
    }
    .PagoImm{
      font-weight: 900;
      font-size: 20px;
    }
  }
  .PayWay{
    display: flex;
    gap:10px;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
}
`;
export default FormaPago
