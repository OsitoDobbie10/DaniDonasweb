import styled from "styled-components";
import {ViewRestaurantes,HeaderDonna,v,
        TempletedProducto,ContenidoProducto,
        FormularioProducto,arreglodatos1,arreglodatos2,arreglodatos3,arreglodatos4,
        BotonPedidoEnviar,UseGlobal,FuncionesModal,
        ViewProducto,BotonMenuView} from "../index";
import { useNavigate, useParams } from 'react-router-dom'
import Swal from "sweetalert2";
const ProductoDonna = () => {
  const {obtenerForm1,obtenerForm2,obtenerForm3,abrirvista,openabrirvista} = UseGlobal();
  const {donitas} = ViewRestaurantes();
  const DonitasParams = useParams();
  const Regresar = useNavigate();
  const {PedirPedido,datosform1,datosform2,datosform3,datosform4} = FuncionesModal();
  const getPedidoDonna = (id)=>{
    return donitas.find((value)=>value.id === id);
  };
  const pedido = getPedidoDonna(parseInt(DonitasParams.id))
  const {nombre,precio,descp,imagen,promo} = pedido;
  const recibirvalor = (precio,estado,estado2) =>{
    switch(estado,estado2){
      case estado === "Fresco de Mora" || estado === true:
        precio += 12
      break
      case estado === "Licuado de Banana" || estado === true:
        precio += 25
      break 
      case estado === "Chocolate caliente" || estado === true:
        precio += 15
      break
      case estado === "Coca cola" || estado === true:
        precio += 15
      break
    }
  }
  const subirCarrito = ()=>{
    Swal.fire({
      title: "Quieres agregar al carrito de compras?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Si",
      denyButtonText: `No`
      }).then((result)=>{
        if(result.isConfirmed){
          const {N,L,J,CN,CB} = datosform1;
          const {FM,LB,Cc,CC} = datosform2;
          const {MP,MM,G,GO,CCO,FT,Kt,S,AP} = datosform3;
          const {Aven,JL,G1,P1} = datosform4;
          const p = {
            nombre:nombre,
            precio:precio,
            descp:descp,
            imagen:imagen,
            N:N,
            L:L,
            J:J,
            CN:CN,
            CB:CB,
            FM:`${FM}-12`,
            LB:`${LB}-25`,
            Cc:`${Cc}-15`,
            CC:`${CC}-15`,
            MM:`${MM}-`,
            G:`${G}-10`,
            GO:`${GO}-10`,
            CCO:`${CCO}-10`,
            FT:`${FT}-10`,
            Kt:`${Kt}-10`,
            AP:`${AP}-10`,
            Aven:`${Aven}-`,
            JL:`${JL}-55`,
            P1:`${P1}-55`,
            Cantidad:0,
            G1:`${G1}-45`,
            MP:`${MP}-45`,
            S:`${S}-5`
          }
          console.log(p);
        }
        else if(result.isDenied){
          Swal.fire("No se ha agrego producto al carrito", "", "Intente de nuevo");
        }
      })
  }
  return (
    <Container>
    <BotonMenuView abrir={openabrirvista}/>
    <BotonPedidoEnviar precio={precio} funcion={subirCarrito}/>
    {
      abrirvista && <ViewProducto Precio1="0" Precio2="0"/>
    }
    <TempletedProducto 
    header={<HeaderDonna icono={<v.Atras/>} icono2={<v.compra/>} ruta="/DD"/>}
    contenido={<ContenidoProducto imagen={imagen} nombre={nombre} precio={precio} descp={descp}/>}
    formulario={<FormularioProducto 
                  estado = {recibirvalor}
                  arreglo1={arreglodatos1}
                  arreglo2={arreglodatos2}
                  arreglo3={arreglodatos3}
                  funcion1={obtenerForm1}
                  funcion2={obtenerForm2}
                  funcion3={obtenerForm3}
                  dato1="Selecciona tu tipo de cobertura"
                  dato2="Selecciona tu bebida acompañada"
                  dato3="Selecciona tu topping"/>}
    />
    </Container>
  )
}
const Container = styled.div``;
export default ProductoDonna
