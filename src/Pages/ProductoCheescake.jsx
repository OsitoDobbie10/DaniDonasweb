import React from 'react'
import {v,TempletedProducto,ViewRestaurantes,HeaderDonna,
        ContenidoProducto,FormularioCheescake,arreglocake1,
        BotonPedidoEnviar,UseGlobal,AgregarPedido,BotonMenuView,ViewProducto} from "../index";
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import Swal from "sweetalert2";
const ProductoCheescake = () => {
  const {cheescake} = ViewRestaurantes();
  const CheesParams = useParams();
  const Regresar = useNavigate();
  const getPedicake = (id)=>{
    return cheescake.find((value)=>value.id === id);
  };
  const pedido = getPedicake(parseInt(CheesParams.id))
  const {nombre,precio,descp,imagenes} = pedido;
  const {datosform5,obtenerform6,datosform6,openabrirvista,abrirvista} = UseGlobal();
  const subir = async(p)=>{
    await AgregarPedido(p);
  }
  function generarIDUnico() {
    var timestamp = Date.now();
    var numeroAleatorio = Math.floor(Math.random() * 10000);
    var idUnico = timestamp.toString() + numeroAleatorio.toString();
    return idUnico;
  }
  const SubirCarrito = async()=>{
    Swal.fire({
      title: "Quieres agregar al carrito de compras?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Si",
      denyButtonText: `No`
      }).then((result)=>{
        if(result.isConfirmed){
          const {ReEx,FruEx,MoreEx,Dedicatoria} = datosform5;
          const p = { 
            nombre:nombre,
            precio:precio,
            descp:descp,
            imagen:imagenes,
            Cantidad:0,
            ReEx:`${ReEx}-100`,
            FruEx:`${FruEx}-100`,
            MoreEx:`${MoreEx}-50`,
            Dedicatoria:`${Dedicatoria}-50`,
            IdPedido:`#${generarIDUnico()}`
          }
          subir(p);
        }
        else if(result.isDenied){
          Swal.fire("No se ha agrego producto al carrito", "", "Intente de nuevo");
        }
      })
   }
  return (
    <Container>
    <BotonMenuView abrir={openabrirvista}/>
    {
      abrirvista && <ViewProducto Precio1="0" Precio2="0"/>
    }
    <BotonPedidoEnviar precio={precio} funcion={SubirCarrito}/>
    <TempletedProducto 
    header={<HeaderDonna icono={<v.Atras/>} icono2={<v.compra/>} ruta="/WD"/>}
    contenido={<ContenidoProducto imagen={imagenes} nombre={nombre} precio={precio} descp={descp} />}
    formulario={<FormularioCheescake 
                 datos1="Selecciona tu + de ingredientes"
                arreglo1={arreglocake1}
                funcion1={obtenerform6}
                />}
    />
    </Container>
  )
}
const Container = styled.div``;
export default ProductoCheescake
