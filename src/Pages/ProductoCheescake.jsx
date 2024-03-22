import React from 'react'
import {v,TempletedProducto,ViewRestaurantes,HeaderDonna,
        ContenidoProducto,FormularioCheescake,arreglocake1,
        BotonPedidoEnviar} from "../index";
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
const ProductoCheescake = () => {
  const {cheescake} = ViewRestaurantes();
  const CheesParams = useParams();
  const Regresar = useNavigate();
  const getPedicake = (id)=>{
    return cheescake.find((value)=>value.id === id);
  };
  const pedido = getPedicake(parseInt(CheesParams.id))
  const {nombre,precio,descp,imagenes} = pedido;
  return (
    <Container>
    <BotonPedidoEnviar precio={precio}/>
    <TempletedProducto 
    header={<HeaderDonna icono={<v.Atras/>} icono2={<v.compra/>} ruta="/WD"/>}
    contenido={<ContenidoProducto imagen={imagenes} nombre={nombre} precio={precio} descp={descp} />}
    formulario={<FormularioCheescake datos1="Selecciona tu + de ingredientes" arreglo1={arreglocake1}/>}
    />
    </Container>
  )
}
const Container = styled.div``;
export default ProductoCheescake
