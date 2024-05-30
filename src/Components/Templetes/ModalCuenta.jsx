import styled from "styled-components"
import {UseGlobal,ViewRestaurantes,ItemDeposito,HeaderDonna} from "../../index";
import BtNCerrar from "../../Assets/cerrar.svg"
const ModalCuenta = ({cerrar,animacion,FuncionPagarTargeta,FunctionPay}) => {
    const {Depositos} = ViewRestaurantes();
    const {valuePedido,view} = UseGlobal();
    const {tipo} = view;
    const {precio} = valuePedido;
    let gastoenvio1 = 25;
    let evaluargastoenvio1 = tipo === "Domicilio" ? gastoenvio1 : 0;
    let preciototal = precio + evaluargastoenvio1;
  return (
    <Container>
    <div className="cerrar-modal">
    <img src={BtNCerrar}
                 alt="CerrarBTN"
                 onClick={cerrar}/>
    </div>
    <div className={`formulario ${animacion ? 'animar': 'cerrar'}`}>
    <div className="mostrarHeader">
    <HeaderDonna  texto="Cuentas Bancarias"/>
    </div>
    <div className="ConteinerCard">
    {
        Depositos?.map((dat)=>{
            return <ItemDeposito data={dat} key={dat.id}/>
        })
    }
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
      tipo === "Domicilio" ? <span className='ProductsPay'>{gastoenvio1}.00</span> : <></>
    }
    </div>
    </div>
    <div className='ContenidoPagoBoton' onClick={FunctionPay}>
    <span className='Textopago'>Pagar</span>
    <span className='Textopago'>L.{preciototal}.00</span>
    </div>
    </div>
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
.cerrar-modal{
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
    height: 500px;
    width: 45rem;
    transition-property: all;
    transition-duration: 300ms;
    transition-timing-function: ease-in;
    opacity: 0;
    left: 30%;
    top:25%;
    position: relative;
    background-color: white;
    border-radius: 15px;
    height: 420px;
    color:black;
    border-radius:12px;
    .mostrarHeader{
    width: 90%;
    display: block;
    margin:10px auto;}
    .ConteinerCard{
        margin-top: 10px auto;
        width: 100%;
        height: 380px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap:10px;
        &:hover{
      cursor: pointer;
       }
    }

    .ContenedorMenuPago{
      width: 100%;
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
       justify-content: space-around;
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

.formulario.animar {
    position: relative;
    opacity: 1;
    left: 26%;
    top:5%;
    height: 550px;
    width: 45rem;
}
`;
export default ModalCuenta
