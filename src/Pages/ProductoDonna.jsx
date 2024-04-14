import styled from "styled-components";
import {ViewRestaurantes,HeaderDonna,v,
        TempletedProducto,ContenidoProducto,
        FormularioProducto,arreglodatos1,arreglodatos2,arreglodatos3,arreglodatos4,
        BotonPedidoEnviar,UseGlobal,FuncionesModal,
        ViewProducto,BotonMenuView,AgregarPedido,AgregarFav,ViewRestaurantesList} from "../index";
import { useNavigate, useParams } from 'react-router-dom'
import Swal from "sweetalert2";
const ProductoDonna = () => {
  const {obtenerForm1,obtenerForm2,obtenerForm3,abrirvista,openabrirvista} = UseGlobal();
  const {donitas} = ViewRestaurantes();
  const DonitasParams = useParams();
  const Regresar = useNavigate();
  const {datosform1,datosform2,datosform3,datosform4} = FuncionesModal();
  const getPedidoDonna = (id)=>{
    return donitas.find((value)=>value.id === id);
  };
  const pedido = getPedidoDonna(parseInt(DonitasParams.id))
  const {nombre,precio,descp,imagen} = pedido;
  const {idUsuario} = ViewRestaurantes();
  const condicional = (texto)=>{
    let coincidente = "";
    let divido = texto.split('-');
    if (divido[0] === coincidente){
       let answer = false;
       return answer;} 
    else {
      let answer2 = true;
      return answer2;}}
  const cambiar = (texto)=>{
    let divido = texto.split('-')[1]
    return divido;}
  const {FM,LB,Cc,CC} = datosform2;
  const {MP,MM,G,GO,CCO,FT,Kt,S,AP} = datosform3;
  const changevalue = (num)=>{
    let val = {
              FM:`${FM}-12`,
              LB:`${LB}-25`,
              Cc:`${Cc}-15`,
              CC:`${CC}-15`,
              MP:`${MP}-5`,
              MM:`${MM}-10`,
              G:`${G}-10`,
              GO:`${GO}-10`,
              CCO:`${CCO}-10`,
              FT:`${FT}-10`,
              Kt:`${Kt}-10`,
              S:`${S}-10`,
              AP:`${AP}-5`
              };
       //Bebidas 
       let FrescoMora = condicional(val.FM) ? parseInt(cambiar(val.FM)) : 0;
       let LicuadoBanano = condicional(val.LB) ? parseInt(cambiar(val.LB)) : 0;
       let ChocoateCaliente = condicional(val.Cc) ? parseInt(cambiar(val.Cc)) : 0;
       let Cocacola = condicional(val.CC) ? parseInt(cambiar(val.CC)) : 0;
       //Ingredientes 
       let ManiPicado = condicional(val.MP) ? parseInt(cambiar(val.MP)) : 0;
       let MeansManny = condicional(val.MM) ? parseInt(cambiar(val.MM)) : 0;
       let Gomitas = condicional(val.G) ? parseInt(cambiar(val.G)) : 0;
       let GalletaOreo = condicional(val.GO) ? parseInt(cambiar(val.GO)) : 0;
       let FresasTrocitos = condicional(val.FT) ? parseInt(cambiar(val.FT)) : 0;
       let KiwiTrocitos = condicional(val.Kt) ? parseInt(cambiar(val.Kt)) : 0;
       let Sprinkles = condicional(val.S) ? parseInt(cambiar(val.S)) : 0;
       let AzucarPolvo = condicional(val.AP) ? parseInt(cambiar(val.AP)) : 0;
       //sumarvalor 
      const arreglo = [FrescoMora,LicuadoBanano,ChocoateCaliente,Cocacola,ManiPicado,
                       MeansManny,Gomitas,GalletaOreo,FresasTrocitos,KiwiTrocitos,Sprinkles,AzucarPolvo];
      const initialValue = 0;
      const arraySuma = arreglo.reduce((accumulator,currentValue)=> accumulator + currentValue, initialValue);
      const sum = num + arraySuma;
      return sum
  }
  const InicialValue = ()=>{
    let val = {
      FM:`${FM}-12`,
      LB:`${LB}-25`,
      Cc:`${Cc}-15`,
      CC:`${CC}-15`,
      MP:`${MP}-5`,
      MM:`${MM}-10`,
      G:`${G}-10`,
      GO:`${GO}-10`,
      CCO:`${CCO}-10`,
      FT:`${FT}-10`,
      Kt:`${Kt}-10`,
      S:`${S}-10`,
      AP:`${AP}-5`
      };
//Bebidas 
let FrescoMora = condicional(val.FM) ? parseInt(cambiar(val.FM)) : 0;
let LicuadoBanano = condicional(val.LB) ? parseInt(cambiar(val.LB)) : 0;
let ChocoateCaliente = condicional(val.Cc) ? parseInt(cambiar(val.Cc)) : 0;
let Cocacola = condicional(val.CC) ? parseInt(cambiar(val.CC)) : 0;
//Ingredientes 
let ManiPicado = condicional(val.MP) ? parseInt(cambiar(val.MP)) : 0;
let MeansManny = condicional(val.MM) ? parseInt(cambiar(val.MM)) : 0;
let Gomitas = condicional(val.G) ? parseInt(cambiar(val.G)) : 0;
let GalletaOreo = condicional(val.GO) ? parseInt(cambiar(val.GO)) : 0;
let FresasTrocitos = condicional(val.FT) ? parseInt(cambiar(val.FT)) : 0;
let KiwiTrocitos = condicional(val.Kt) ? parseInt(cambiar(val.Kt)) : 0;
let Sprinkles = condicional(val.S) ? parseInt(cambiar(val.S)) : 0;
let AzucarPolvo = condicional(val.AP) ? parseInt(cambiar(val.AP)) : 0;
//sumarvalor 
const arreglo = [FrescoMora,LicuadoBanano,ChocoateCaliente,Cocacola,ManiPicado,
               MeansManny,Gomitas,GalletaOreo,FresasTrocitos,KiwiTrocitos,Sprinkles,AzucarPolvo];
const initialValue = 0;
const arraySuma = arreglo.reduce((accumulator,currentValue)=> accumulator + currentValue, initialValue);
return arraySuma;
  }
  let precioacumulado = changevalue(precio);
  let valueInitial = InicialValue();
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
    }}

const subir = async(p)=>{
  await AgregarPedido(p);
}
const subir2 = async(p)=>{
  await AgregarFav(p);
}
function generarIDUnico() {
  var timestamp = Date.now();
  var numeroAleatorio = Math.floor(Math.random() * 10000);
  var idUnico = timestamp.toString() + numeroAleatorio.toString();
  return idUnico;
}
  const SubirCarrito = async()=>{
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
            const preciocarrito = changevalue(precio);
            const p = {
              Idusuario:idUsuario,
              nombre:nombre,
              precio:preciocarrito,
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
              MM:`${MM}-15`,
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
              S:`${S}-5`,
              IdPedido:`#${generarIDUnico()}`
            }
            subir(p);
          }
          else if(result.isDenied){
            Swal.fire("No se ha agrego producto al carrito", "", "Intente de nuevo");
          }
        })
     }
 const subirFavorito2 = async()=>{
  const {N,L,J,CN,CB} = datosform1;
  const {FM,LB,Cc,CC} = datosform2;
  const {MP,MM,G,GO,CCO,FT,Kt,S,AP} = datosform3;
  const {Aven,JL,G1,P1} = datosform4;
      const indicador = {
        N:`${N}`,
        L:`${L}`,
        J:`${J}`,
        CN:`${CN}`,
        CB:`${CB}`,
        FM:`${FM}-12`,
        LB:`${LB}-25`,
        Cc:`${Cc}-15`,
        CC:`${CC}-15`,
        MM:`${MM}-15`,
        G:`${G}-10`,
        GO:`${GO}-10`,
        CCO:`${CCO}-10`,
        FT:`${FT}-10`,
        Kt:`${Kt}-10`,
        AP:`${AP}-10`,
        Aven:`${Aven}-`,
        JL:`${JL}-55`,
        P1:`${P1}-55`,
        G1:`${G1}-45`,
        MP:`${MP}-45`,
        S:`${S}-5`
      };
      const dato = condicional(indicador.FM) ? `${FM} adicional con un costo de ${indicador.FM.split('-')[1]}` : ``;
      const dato2 = condicional(indicador.LB) ? `${LB} adicional con un costo de ${indicador.LB.split('-')[1]}` : ``;
      const dato3 = condicional(indicador.Cc) ? `${Cc} adicional con un costo de ${indicador.Cc.split('-')[1]}` : ``;
      const dato4 = condicional(indicador.CC) ? `${CC} adicional con un costo de ${indicador.CC.split('-')[1]}` : ``;
      const dato5 = condicional(indicador.MM) ? `${MM} adicional con un costo de ${indicador.MM.split('-')[1]}` : ``;
      const dato6 = condicional(indicador.CC) ? `${CC} adicional con un costo de ${indicador.CC.split('-')[1]}` : ``;
      const dato7 = condicional(indicador.G) ? `${G} adicional con un costo de ${indicador.G.split('-')[1]}` : ``;
      const dato8 = condicional(indicador.GO) ? `${GO} adicional con un costo de ${indicador.GO.split('-')[1]}` : ``;
      const dato9 = condicional(indicador.CCO) ? `${CCO} adicional con un costo de ${indicador.CCO.split('-')[1]}` : ``;
      const dato10 = condicional(indicador.FT) ? `${FT} adicional con un costo de ${indicador.FT.split('-')[1]}` : ``;
      const dato11 = condicional(indicador.Kt) ? `${Kt} adicional con un costo de ${indicador.Kt.split('-')[1]}` : ``;
      const dato12 = condicional(indicador.Aven) ? `${Aven} adicional con un costo de ${indicador.Aven.split('-')[1]}` : ``;
      const dato13 = condicional(indicador.JL) ? `${JL} adicional con un costo de ${indicador.JL.split('-')[1]}` : ``;
      const dato14 = condicional(indicador.G1) ? `${G1} adicional con un costo de ${indicador.G1.split('-')[1]}` : ``;
      const dato15 = condicional(indicador.MP) ? `${MP} adicional con un costo de ${indicador.MP.split('-')[1]}` : ``;
      const dato16 = condicional(indicador.S) ? `${S} adicional con un costo de ${indicador.S.split('-')[1]}` : ``;
      let preciofav = changevalue(precio)
      const p = {
        Idusuario:idUsuario,
        nombre:nombre,
        precio:preciofav,
        descp:descp,
        adicional:`Ingredientes adicionales: ${dato} ${dato2} ${dato3} ${dato4} ${dato5} ${dato6} ${dato7} ${dato8} ${dato9} ${dato10} ${dato11} ${dato12} ${dato13} ${dato14} ${dato15} ${dato16}`,
        imagen:imagen
      };
      subir2(p);
      };
  return (
    <Container>
    <BotonMenuView abrir={openabrirvista}/>
    <BotonPedidoEnviar precio={precioacumulado} funcion={SubirCarrito} funcion2={subirFavorito2}/>
    {
      abrirvista && <ViewProducto Precio1={precio} Precio2={valueInitial}/>
    }
    <TempletedProducto 
    header={<HeaderDonna icono={<v.Atras/>} icono2={<v.compra/>} ruta="/DD" ruta2="/Carrito"/>}
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
