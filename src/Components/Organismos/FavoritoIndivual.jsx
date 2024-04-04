import {BorrarFav,UseGlobal,Icono,v} from "../../index";
import Domicio from "../../Assets/Domicilio.png";
import Caminante from "../../Assets/caminante.png";
import { SwipeableList, SwipeableListItem} from '@sandstreamdev/react-swipeable-list';
import '@sandstreamdev/react-swipeable-list/dist/styles.css';
import "../Organismos/Targeta.css"
import "../Organismos/PedidoIndividual.css"
import Corazon from "../../Assets/corazon.png"
const FavoritoIndivual = ({data}) => {
    const {id,nombre,precio,descp,adicional,imagen} = data;
    const Eliminarfav = async(p)=>{
        await BorrarFav(p);
    }
    const swipeRigthDataSimple = ()=>({
        content: (
          <div className="contentRight">
          <span>Borrar pedido de tu lista de pedidos.</span>
          </div>
        ),
        action: () => Eliminarfav({id:id})
      });
  return (
    <SwipeableList>
    <SwipeableListItem swipeRight={swipeRigthDataSimple()}>
     <div className="pedidoindiviual" >
     <div className="ladoizquierdo">
     <div className="imagen">
     <img src={imagen} alt={nombre}/>
     </div>
     <div className="datosgenerales">
     <span className="pedido">Producto:{nombre}</span>
     <span>{adicional}</span>
     </div>
     </div>
     <div className="ladoderecho">
     <div className="icono1">
     <Icono icono={Corazon}/>
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

export default FavoritoIndivual
