import React from 'react'
import styled from 'styled-components'
import {v,DomicilioCarrito} from "../../index"
import Torta from "../../Assets/tarta-de-queso.png";
import Donas from "../../Assets/donas.png";
const ObjetoCarritoCompra = ({data,direcciones,recoger,encargar,TipoPedido}) => {
  const {ciudad,colonia,referencia,direccion,Latitude,Longitud} = direcciones;
  const {IdPedido,fecha,nombre,precio,descp,imagen,TipoProducto} = data;
  const imagenIcono = TipoProducto === "Donnas" ? true : false;
  const fechaformateada = fecha.split('T')[0]; 
  const {fecharecoger,horarecoger} = recoger;
  const {nombre:personaencarga,dir,hora} = encargar;
  const TipoPedidoValor = (tipo)=>{
    switch(tipo){
      case "Domicilio":
      return <DomicilioCarrito ciudad={ciudad} colonia={colonia}/>
      break;
      case "Encargar":
      return 
      break;
      case "Recoger":
      return 
      break
    }
  }
  return (
    <Container>
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
    </div>
    </Container>
  )
}
const Container = styled.div`
width: 100%;
height: 500px;
display: flex;
gap:20px;
align-items: center;
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

`;
export default ObjetoCarritoCompra
