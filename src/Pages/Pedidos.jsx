import {ViewRestaurantes} from "../index";
import styled from "styled-components";
import {v,HeaderDonna} from "../index"
import { useQuery } from '@tanstack/react-query';
const Pedidos = () => {
  const {pedidosDonnas,showPedidoDonnas} = ViewRestaurantes();
  useQuery({queryKey:['Pedido'],queryFn:()=>showPedidoDonnas()});
  return (
    <Container>
    <HeaderDonna icono={<v.Atras/>}texto="Mis Pedidos" icono2={<v.compra/>} ruta="/"/>
    <div className="arregloPedidos">
    {
      pedidosDonnas.map((data)=>{
        return  
      })
    }
    </div>
    </Container>
  )
}
const Container = styled.div`
width: 100%;
height: 100%;
background-color: aliceblue;
.arregloPedidos{
  width: 90%;
  margin:20px auto;
  display: flex;
  flex-direction: column;
  gap:10px;
}


`;
export default Pedidos
