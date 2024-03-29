import {BorrarPedido,UseGlobal,Icono} from "../../index";
import Domicio from "../../Assets/Domicilio.png";
import Caminante from "../../Assets/caminante.png";
import { SwipeableList, SwipeableListItem} from '@sandstreamdev/react-swipeable-list';
import '@sandstreamdev/react-swipeable-list/dist/styles.css';
import "../Organismos/Targeta.css"
import "../Organismos/PedidoIndividual.css"
const PedidoIndividual = ({data}) => {
  const {id,imagen,precio,IdPedido,IdPedidoCliente} = data;
  const {view} = UseGlobal();
  const {tipo} = view;
  const EliminarPedido = async(p)=>{
    await BorrarPedido(p);
  }
  const swipeRigthDataSimple = ()=>({
    content: (
      <div className="contentRight">
      <span>Borrar pedido de tu lista de pedidos.</span>
      </div>
    ),
    action: () => EliminarPedido({id:id,IdPedidoCliente:IdPedidoCliente})
  });
  return (
    <SwipeableList>
    <SwipeableListItem swipeRight={swipeRigthDataSimple()}>
     <div className="pedidoindiviual" >
     <div className="ladoizquierdo">
     <div className="imagen">
     <img src={imagen} alt={nombre} />
     </div>
     <div className="datosgenerales">
     <span className="pedido">Pedido:{IdPedido}</span>
     <span>Producto: {nombre}</span>
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
     L.{precio}.00
     </span>
     </div>
     </div>
     </div>
     </SwipeableListItem>
     </SwipeableList>
               
  )
}
export default PedidoIndividual
