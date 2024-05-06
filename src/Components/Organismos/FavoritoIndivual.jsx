import {BorrarFav,UseGlobal,Icono,v,AgregarPedido,ViewRestaurantes} from "../../index";
import Domicio from "../../Assets/Domicilio.png";
import Caminante from "../../Assets/caminante.png";
import Swal from "sweetalert2";
import { SwipeableList, SwipeableListItem} from '@sandstreamdev/react-swipeable-list';
import '@sandstreamdev/react-swipeable-list/dist/styles.css';
import "../Organismos/Targeta.css"
import "../Organismos/PedidoIndividual.css"
import Corazon from "../../Assets/corazon.png"
const FavoritoIndivual = ({data}) => {
    const {id,nombre,precio,descp,adicional,imagen,TipoPedido,IdUnico} = data;
    const {idUsuario} = ViewRestaurantes();
    const Eliminarfav = async(p)=>{
        await BorrarFav(p);
    }
     function generarIDUnico() {
      var timestamp = Date.now();
      var numeroAleatorio = Math.floor(Math.random() * 10000);
      var idUnico = timestamp.toString() + numeroAleatorio.toString();
      return idUnico;
    }
    const SubirFavaCarrito = async(p)=>{
        await AgregarPedido(p);
    }
     const PassProduct = ()=>{
       Swal.fire({
         title: "Quieres agregar al carrito de compras?",
         showDenyButton: true,
         showCancelButton: true,
         confirmButtonText: "Si",
         denyButtonText: `No`
         }).then((data)=>{
           if(data.isConfirmed){
            const p = {
              Idusuario:idUsuario,
              nombre:nombre,
              precio: precio,
              descp: descp,
              imagen:imagen,
              Cantidad:0,
              IdPedido:IdUnico,
              TipoProducto:TipoPedido
            }
            SubirFavaCarrito(p);
           }
           else if(data.isDenied){
            Swal.fire("No se ha agrego producto al carrito", "", "Intente de nuevo");
          }
         })
     };
    const swipeRigthDataSimple = ()=>({
        content: (
          <div className="contentRight">
          <span>Borrar pedido de tu lista de pedidos.</span>
          </div>
        ),
        action: () => Eliminarfav({id:id})
      });
    const swipeLeftDataSimple = ()=>({
    content : (
      <div className="contentLeft">
      <span>Agregar a Carrito de compra.</span>
      </div>
    ),
    action : ()=> PassProduct()
      })
  return (
    <SwipeableList>
    <SwipeableListItem swipeRight={swipeRigthDataSimple()} swipeLeft={swipeLeftDataSimple()}>
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
