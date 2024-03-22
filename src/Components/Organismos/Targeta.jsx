import {v,Borrardireccion,UseGlobal} from "../../index";
import styled from "styled-components";
import { SwipeableList, SwipeableListItem} from '@sandstreamdev/react-swipeable-list';
import '@sandstreamdev/react-swipeable-list/dist/styles.css';
import "./Targeta.css";
import Swal from "sweetalert2";
const Targeta = ({data}) => {
  const {getdireccion,setGetdireccion} = UseGlobal();
  const Eliminar = async(p)=>{
   await Borrardireccion(p);}
   const obtenerdatos = ()=>{
    setGetdireccion({
      ...getdireccion,
         ciudad:data.ciudad,
         colonia:data.colonia,
         referencia:data.referencia,
         direccion:data.direccion,
         Latitude:data.Latitude,
         Longitud:data.Longitud})
    if(Object.values(getdireccion)){
      Swal.fire({
        position: "top-center",
        icon: "success",
        title: "Direccion Tomada",
        showConfirmButton: false,
        timer: 1500
      });
    }
   }
  const swipeRigthDataSimple = ()=>({
    content: (
      <div className="contentRight">
      <span>Borrar</span>
      </div>
    ),
    action: () => Eliminar({idCliente:data.idCliente,id:data.id})
  });

  return (
    <SwipeableList>
    <SwipeableListItem 
    swipeRight={swipeRigthDataSimple()}
    >
    <Container onClick={obtenerdatos}>
    <span className="Iconodireccion">{<v.IconoMpa/>}</span>
    <div className="datosDIR">
    <span className="Colonia">{data.colonia}</span>
    </div>
    </Container>
    </SwipeableListItem>
    </SwipeableList>
  )
}
const Container = styled.div`
    display: flex;
    align-items: center; 
    gap:20px;
    width: 500px;
    border-bottom: 1px solid black;
    &:hover{
      cursor: pointer;
      opacity: 0.6;
    }
    .Iconodireccion{
      background-color: red;
      color:white;
      font-weight: bold;
      padding: 10px 15px;
      border-radius: 20px;
    }
    .datosDIR{
      display: flex;
      gap:10px;
      .Colonia{
        font-weight: bold;
      }
      .referencia{
        font-weight: 300;
        text-transform: inherit;
      }}
`
export default Targeta;
