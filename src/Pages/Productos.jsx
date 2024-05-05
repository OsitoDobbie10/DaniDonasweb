import styled from "styled-components"
import {HeaderDonna,NavbarMenu,v,ViewRestaurantes,UseGlobal, TempletedUnico} from "../index";
import { useQuery } from '@tanstack/react-query';
const Productos = () => {
  const {pedidosDonnas,showPedidoDonnas} = ViewRestaurantes();
  const {getdireccion,getRecoger,getencargar,view} = UseGlobal();
  const {tipo} = view;
  return (
    <Container>
    <div className="header">
    <HeaderDonna icono={<v.Atras/>} texto="Carrito de compras" ruta="/" ruta2="/Carrito" icono2={<v.compra/>}/>
    </div>
    <div className="contenido">
    <TempletedUnico datos={pedidosDonnas} 
                    direcciones={getdireccion} 
                    encargar={getencargar}
                    recoger={getRecoger}
                    TipoPedido={tipo}/>
    </div>
    <div className="footer">
    <NavbarMenu/>
    </div>
    </Container>
  )
}
const Container = styled.div`
  width: 90%;
  margin:auto;
  height: 900px;
  .header{
    width: 90%;
    margin: auto;
    height: 100px;
  }
  .contenido{
    width: 100%;
    height: 600px;
    margin: auto;
  }
  .footer{
    width: 90%;
    margin: auto;
    height: 100px;
    position: fixed;
    bottom: 0;

  }
`;
export default Productos
