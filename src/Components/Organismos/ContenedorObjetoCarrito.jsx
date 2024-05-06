import React from 'react';
import styled from 'styled-components';
import IconoWhatsapp from '../../Assets/whatsapp.png';
import {ObjetoCarritoCompra,MapaCarrito} from "../../index"
import { motion } from 'framer-motion';
const ContenedorObjetoCarrito = ({datos,direcciones,recoger,encargar,
                                  TipoPedido,abrircarrito,openelemento1,
                                  openelemento2,Latitude,Longitud}) => {
const transition = {type:"spring",duration:4}
  return (
    <Container>
    <h2 className='TituloCarrito'>Detalles del pedido</h2>
    <div className="submenucarrito">
    <span className={`carritoname ${abrircarrito ? 'izquierda' : 'derecha'} `} onClick={openelemento1}>Detalles</span>
    <span className={`carritoname1 ${abrircarrito ? 'izquierda': 'derecha'}`} onClick={openelemento2}>Ubicacion del pedido</span>
    <div className="iconocontenedor">
    <img src={IconoWhatsapp} alt="Whatsapp" className='whatsappicono'/>
    </div>
    </div>
    <motion.div 
    className="pedidos"
    initial={{opacity:0,x:-100}}
    animate={{opacity:1,x:0}}
    exit={{opacity:0,x:100}}
    transition={transition}>
    {
    abrircarrito ? 
    datos.map((data)=>{
      return <ObjetoCarritoCompra key={data.id} data={data} 
                                 direcciones={direcciones} 
                                 recoger={recoger}
                                 encargar={encargar}
                                 TipoPedido={TipoPedido}/>
    }) :
    <MapaCarrito Latitud={Latitude} Longitud={Longitud}/>
    }
    </motion.div>
    </Container>
  )
}
const Container = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
gap:10px;
.TituloCarrito{
        text-align: center;
        color: red;
        margin-top: 10px;
}
.submenucarrito{
    display: flex;
    gap:20px;
    justify-content: center;
    margin-top:15px;
    position: relative;

  .carritoname.izquierda{
        font-size: 20px;
        font-weight: 800;
        color: black;
        text-decoration-line: underline;
      &:hover{
        cursor: pointer;
      }  
}

.carritoname.derecha{
    font-size: 20px;
    font-weight: 800;
    color: red;
  &:hover{
    cursor: pointer;}}

  .carritoname1.izquierda{
    font-size: 20px;
    font-weight: 800;
    color: red;
  &:hover{
    cursor: pointer;
  }}

  .carritoname1.derecha{
    font-size: 20px;
    font-weight: 800;
    color: black;
    text-decoration-line: underline;
   &:hover{
    cursor: pointer;
   }}

   .iconocontenedor{
    position: absolute;
    right:10px;
    top:10px;
    .whatsappicono{
        width: 50px;
        height: 50px;}
  }

 
  
}
.pedidos{
    width: 100%;
}
`
export default ContenedorObjetoCarrito
