import {ViewRestaurantes} from "../index";
import styled from "styled-components";
import {v,UseGlobal,Icono,HeaderDonna} from "../index"
import { useQuery } from '@tanstack/react-query';
import Domicio from "../Assets/Domicilio.png"
import Caminante from "../Assets/caminante.png"
const Pedidos = () => {
  const {pedidosDonnas,showPedidoDonnas} = ViewRestaurantes();
  useQuery({queryKey:['Pedido'],queryFn:()=>showPedidoDonnas()});
  const {view} = UseGlobal();
  const {tipo} = view;
  return (
    <Container>
    <HeaderDonna icono={<v.Atras/>}texto="Mis Pedidos" icono2={<v.compra/>} ruta="/"/>
    <div className="botonesparapedir">
    <button className="botones">Todos</button>
    <button className="botones">Historial</button>
    </div>
    <div className="arregloPedidos">
    {
      pedidosDonnas.map((data)=>{
        return <div className="pedidoindiviual">
                <div className="ladoizquierdo">
                <div className="imagen">
                <img src={data.imagen} alt={data.nombre} />
                </div>
                <div className="datosgenerales">
                <span className="pedido">Pedido:{data.IdPedido}</span>
                <span>Producto: {data.nombre}</span>
                </div>
                </div>
                <div className="ladoderecho">
                <div className="icono1">
                {
                  tipo === "Domicilio" ? <Icono icono={Domicio}/> : <Icono icono={Caminante}/>
                }
                </div>
                <div className="Precio">
                <span className="preciofinal">
                L.{data.precio}.00
                </span>
                </div>
                </div>
               </div>
      })
    }
    </div>
    </Container>
  )
}
const Container = styled.div`
width: 100%;
height: 100%;
.botonesparapedir{
  width: 90%;
  width: 200px;
  margin:10px auto;
  display: flex;
  justify-content: center;
  gap:50px;
  align-items: center;
  .botones{
   display: block;
   width: 80px;
   height: 50px;
   border-radius: 15px;
   background-color: orange;
   font-size: 12px;
   font-weight: bold;
   &:hover{
    cursor: pointer;
    opacity: 0.6;
   }
  }
}

.arregloPedidos{
  width: 90%;
  margin:20px auto;
  display: flex;
  flex-direction: column;

  .pedidoindiviual{
    width:100%;
    display: flex;
    height: 200px;
    justify-content: space-between;
    .ladoizquierdo{
      display: flex;
      gap:10px;
      align-items: center;
      .imagen{
        width: 100px;
        height:100px;
        border-radius: 10px;
        img{
          width: 100%;
          height: 100%;
        }
      }

    }


  }
  .datosgenerales{
    display: flex;
    flex-direction: column;
    justify-content: left;
    
  }

}


`;
export default Pedidos
