import styled from "styled-components"
import {HeaderDonna,NavbarMenu,TempletedUnico,v,ViewRestaurantes,UseGlobal} from "../index";
import { useQuery } from '@tanstack/react-query';
const Productos = () => {
  const {pedidosDonnas,showPedidoDonnas} = ViewRestaurantes();
  const {getdireccion,getRecoger,getencargar} = UseGlobal();
  return (
    <Container>
    <TempletedUnico header={<HeaderDonna icono={<v.Atras/>} 
                                         texto="Carrito de compras"
                                          ruta="/"
                                          ruta2="/Carrito"
                                          icono2={<v.compra/>}/>}
                    direcciones={getdireccion}
                    encargar={getencargar}
                    recoger={getRecoger}
                    datos={pedidosDonnas}
                    footer={<NavbarMenu/>}            
                    />
    </Container>
  )
}
const Container = styled.div``;
export default Productos
