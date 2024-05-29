import styled from "styled-components"
import {v,UseGlobal,ViewRestaurantes,ItemdeTargeta} from "../../index"
import BtNCerrar from "../../Assets/cerrar.svg"
const ModalTargeta = ({cerrar,animacion,FuncionPagarTargeta,FunctionAdd}) => {
    const {targetas,idUsuario} = ViewRestaurantes();
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
    <div className="encabezadoTargeta">
    <div className="Lado1">
    <span className="cono1Lado">{<v.targetacredito/>}</span>
    <span className="cono1Lado">Tus Targetas</span>
    </div>
    <div className="Lado2">
    <span className="icono2Lado" onClick={FunctionAdd}>{<v.Agregar/>}</span>
    <span className="icono2Lado">Agregar Nueva</span>
    </div>
    </div>
    <div className="ConteinerCard">
    {
        targetas?.map((dat)=>{
            return <ItemdeTargeta data={dat} key={dat.id} IdUsuario={idUsuario}/>
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
    <div className='ContenidoPagoBoton' onClick={FuncionPagarTargeta}>
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
    height: 600px;
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
    .encabezadoTargeta{
        width: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        height: 90px;
        .Lado1{
            display: flex;
            gap: 20px;
        .cono1Lado{
                font-size: 25px;
                color:black;
                font-weight: bold;
            }
        }
        .Lado2{
            display: flex;
            gap: 20px;
            .icono2Lado{
                font-size: 25px;
                color:black;
                font-weight: bold;
                &:hover{
                    cursor: pointer;
                }
            }
        }
    }

    .ConteinerCard{
        margin-top: 20px;
        width: 100%;
        height: 380px;
        display: flex;
        flex-direction: column;
        justify-content: center;
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
    height: 650px;
    width: 45rem;
}
`;
export default ModalTargeta
