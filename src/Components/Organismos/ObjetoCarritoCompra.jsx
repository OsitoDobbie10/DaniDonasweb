import React from 'react';
import styled from 'styled-components';
import {v,DomicilioCarrito,editarPedido,ViewRestaurantes,FuncionesModal,UseGlobal} from "../../index";
import Torta from "../../Assets/tarta-de-queso.png";
import Donas from "../../Assets/donas.png";
import Add from "../../Assets/agregar.png";
import Less from "../../Assets/menos.png";
import { useNavigate } from 'react-router-dom';
import Swal from "sweetalert2";
const ObjetoCarritoCompra = ({data,direcciones,recoger,encargar,TipoPedido}) => {
  const {valuePedido,setValuePedido} = UseGlobal();
  const {ciudad,colonia,referencia,direccion,Latitude,Longitud} = direcciones;
  const {IdPedido,fecha,nombre,precio,descp,
         imagen,TipoProducto,Cantidad,id,
         promo,N,L,J,CN,CB,FM,LB,Cc,CC,MM,
         G,GO,CCO,FT,Kt,AP,Aven,JL,P1,G1,MP,S,ReEx,
         FruEx,MoreEx,Dedicatoria,Tipoproducto} = data;
  const {numero,Incremnto,Decremento} = FuncionesModal();
  const {idUsuario} = ViewRestaurantes();
  const imagenIcono = TipoProducto === "Donnas" ? true : false;
  const fechaformateada = fecha.split('T')[0]; 
  const {fecharecoger,horarecoger} = recoger;
  const {nombre:personaencarga,dir,hora:horaencargo} = encargar;
  let enviarpedido = useNavigate();
  const funcionEnviarPedido = ()=>{
    enviarpedido(`/Carrito/${id}/Confirmar`);
  }
  let precioformateado = precio*numero;
  const SeleccionarProducto = ()=>{
    setValuePedido({
      ...valuePedido,
      nombre:nombre,
      precio:precioformateado,
      descp:descp,
      imagen:imagen,
      promo:promo,
      N:N,
      L:L,
      J:J,
      CN:CN,
      CB:CB,
      FM:FM,
      LB:LB,
      Cc:Cc,
      CC:CC,
      MM:MM,
      G:G,
      GO:GO,
      CCO:CCO,
      FT:FT,
      Kt:Kt,
      AP:AP,
      Aven:Aven,
      JL:JL,
      P1:P1,
      Cantidad:numero,
      G1:G1,
      MP:MP,
      S:S,
      ReEx:ReEx,
      FruEx:FruEx,
      MoreEx:MoreEx,
      Dedicatoria:Dedicatoria,
      fecha:fechaformateada,
      Tipoproducto:Tipoproducto,
      TipoProducto:TipoProducto
    })
    if(Object.values(valuePedido)){
      Swal.fire({
        position: "top-center",
        icon: "success",
        title: "Pedido Tomado",
        showConfirmButton: false,
        timer: 1500
      });
    }
  }
  const TipoPedidoValor = (tipo)=>{
    switch(tipo){
      case "Domicilio":
      return <DomicilioCarrito spanciudad="Ciudad" 
                               spancolonia="Colonia" 
                               ciudad={ciudad} 
                               colonia={colonia}
                               funcionEnvio={funcionEnviarPedido}
                               funcionseleccion={SeleccionarProducto}/>
      break;
      case "Encargar":
      return <DomicilioCarrito Nombre="Encargo de:" 
                               direccion="Direccion del encargo"
                               Hora1="Hora del encargo"
                               personaencarga={personaencarga}
                               dir={dir}
                               horaencago={horaencargo}
                               funcionEnvio={funcionEnviarPedido}
                               funcionseleccion={SeleccionarProducto}/>
      break;
      case "Recoger":
      return <DomicilioCarrito Fecha="Fecha a recoger pedido" 
                               Hora2="Hora a recoger pedido"
                               fecharecoger={fecharecoger}
                               horarecoger={horarecoger}
                               funcionEnvio={funcionEnviarPedido}
                               funcionseleccion={SeleccionarProducto}/> 
      break
    }
  }
  const Aplicar = async(p)=>{
    await editarPedido(p);
  }
  const AumentarPedido = ()=>{
    Incremnto();
    let {id,Cantidad} = data;
    const p = {
      id:id,
      Cantidad:numero
    };
    Aplicar(p);
  }
  const DismunirPedido = ()=>{
    Decremento();
    let {id,Cantidad} = data;
    const p = {
      id:id,
      Cantidad:numero
    };
    Aplicar(p);
  }
 
  return (
    <Container>
    <div className="totalContainer">
    <div className="columna1">
    <div className="texto1">
    <div className="textoindice1">
    {
      imagenIcono ? <img className='imagenIconoPedido' src={Donas} alt="Donna"/> : <img className='imagenIconoPedido' src={Torta} alt="Torta" />
    }
    <span className='T1'>Pedido: {IdPedido}</span>
    </div>
    <span className='T2'>Fecha pedido: {fechaformateada}</span>
    </div>
    <div className="pedidoinfo">
    <img className='imagenpedidoDado' src={imagen} alt={IdPedido} />
    <div className="descnombre">
    <span className='txtdescname'>{nombre}</span>
    <span className='txtdescname'>{descp}</span>
    </div>
    </div>
    <div className="pedidoresumen">
    <span className='messuretxt'>--Gastos de envio</span>
    <span className='messuretxt'>--Descuento</span>
    <span className='messuretxt'>--Total</span> 
    </div>
    </div>
    {TipoPedidoValor(TipoPedido)}
    <div className="columna3">
    <span className='PrecioPedido'>L.{precio*numero}.00</span>
    <div className="botonesFila">
    <img onClick={AumentarPedido} className='Iconoagregarmas' src={Add} alt="AgregarImagen"/>
    <img onClick={DismunirPedido} className='Iconoagregarmas' src={Less} alt="DisminuirImagen"/>
    </div>
    <span className='PrecioPedido'>Ordenes:{numero}</span>
    </div>
    </div>
    </Container>
  )
}
const Container = styled.div`
.totalContainer{
width: 90%;
height: 500px;
margin:auto;
display: flex;
gap:10px;
align-items: center;
justify-content: space-evenly;
.columna1{
      width: 30%;
      height: 100%;
      display: flex;
      flex-direction: column;
      margin-top:20px;
      gap:10px;
      .texto1{
        display: flex;
        flex-direction: column;
        gap:5px;
        .textoindice1{
          display: flex;
          gap:5px;
          align-items: center;
        .imagenIconoPedido{
          width: 40px;
          height: 40px;
        }
        .T1{
          color: black;
          font-size: 15px;
          font-weight: 800;
        } }
        .T2{
          color: black;
          font-size: 12px;
          font-weight: 800;
        }
       
      }
      .pedidoinfo{
        display: flex;
        align-items: center;
        gap:5px;
      .imagenpedidoDado{
        width: 40px;
        height: 40px;
        border-radius: 100%;}
      .descnombre{
        display: flex;
        flex-direction: column;
        .txtdescname{
          font-size: 11px;
          color: black;
          font-weight: 800;}}
      }
      .pedidoresumen{
        display: flex;
        flex-direction: column;
        gap:30px;
        .messuretxt{
          font-size: 15px;
          font-weight: 600;
          color:orange;

        }
      }
    }
.columna3{
  width: 30%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap:40px;
  margin-top: 40px;
  .PrecioPedido{
    font-size: 20px;
    font-weight: 700;
    color:orange;
  }
  .botonesFila{
     display: flex;
     gap:18px;
    .Iconoagregarmas{
    width: 30px;
    height: 30px;
    &:hover{
      cursor: pointer;
    }

  }
  }
 

}
}
`;
export default ObjetoCarritoCompra
