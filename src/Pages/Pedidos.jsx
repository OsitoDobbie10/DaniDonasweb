import {ViewRestaurantes} from "../index";
import styled from "styled-components";
import { useQuery } from '@tanstack/react-query';
const Pedidos = () => {
  const {pedidosDonnas,showPedidoDonnas} = ViewRestaurantes();
  useQuery({queryKey:['Pedido'],queryFn:()=>showPedidoDonnas()});
  return (
    <Container>
    <span className="Pedido">Mis Pedidos</span>
    <div className="botonesparapedir">
    <button className="botones">Todos</button>
    <button className="botones">Historial</button>
    </div>
    <div className="arregloPedidos">
    
    </div>
    </Container>
  )
}
const Container = styled.div`

`;
export default Pedidos
