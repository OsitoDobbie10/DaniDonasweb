import {ViewRestaurantes,PedidoIndividual} from "../index";
import styled from "styled-components";
import {v,HeaderDonna,NavbarMenu} from "../index"
import { useQuery } from '@tanstack/react-query';
const Pedidos = () => {
  const {pedidosDonnas,showPedidoDonnas} = ViewRestaurantes();
  useQuery({queryKey:['Pedido'],queryFn:()=>showPedidoDonnas()});
  let long = pedidosDonnas.length;
  let view = long > 0 ? true : false;
  return (
    <Container>
    <HeaderDonna icono={<v.Atras/>} texto="Mis Pedidos" icono2={<v.compra/>} ruta="/" ruta2="/Carrito"/>
    {
      view ? 
      <div className="arregloPedidos">
      {
        pedidosDonnas.map((data)=>{
          return  <PedidoIndividual data={data} key={data.id}/>
        })
      }
      </div>:
       <div className="arreglopedidos2">
       {
         pedidosDonnas.map((data)=>{
           return  <PedidoIndividual data={data} key={data.id}/>
         })
       }
       </div>
    }
    <div className="footer">
    <NavbarMenu/>
    </div>
    </Container>
  )
}
const Container = styled.div`
width: 100%;
min-height: 100vh;
background-color: aliceblue;
.arregloPedidos{
  width: 90%;
  margin:20px auto;
  display: flex;
  flex-direction: column;
  gap:20px; 
}

.arreglopedidos2{
  width: 90%;
  margin:20px auto;
  display: flex;
  flex-direction: column;
  gap:20px; 
  height: 800px;
}

.footer{
  width: 100%;
  height: 100px;
position: fixed;
bottom: 0;
}


`;
export default Pedidos
