import styled from "styled-components"
import { SwipeableList, SwipeableListItem,} from '@sandstreamdev/react-swipeable-list';
import {BorrarTargeta,UseGlobal} from "../../index";
import '@sandstreamdev/react-swipeable-list/dist/styles.css';
import "./Targeta.css";
import Visa from "../../Assets/visa.png";
import MasterCard from "../../Assets/MasterCard.png";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
const ItemdeTargeta = ({data,IdUsuario}) => {
    const {Numero,Nombre,id,Vencimiento,CVC} = data;
    const {estadoEditarTargetas,setEstadoEditarTargetas,TargetaUtilizar,setTargetaUtilizar} = UseGlobal();
    const Go = useNavigate();
    const verificarPrimerNumero = (cadena)=> {
        let primerCaracter = cadena.charAt(0);
        if (primerCaracter === '4') {
            return true;
        } else {
            return false;
        }
    }
    let evaluarTipoTargeta = verificarPrimerNumero(Numero);
    const EliminarTargeta = async(p)=>{
        await BorrarTargeta(p);
    };
    const llevar = ()=>{
    Go(`/Editar`);
    }
    const editarLLevar = ()=>{
    llevar();
    setEstadoEditarTargetas({
    ...estadoEditarTargetas,
    id:id,
    Numero:Numero,
    Nombre:Nombre,
    Vencimiento:Vencimiento,
    CVC:CVC,
    idusuario:IdUsuario
    })
    }
    const swipeLeftDataSimple = ()=>({
      content: (
        <div className="contentLeft">
        <span>Editar</span>
        </div>
      ),
      action: () => editarLLevar()
    });
    const swipeRigthDataSimple = ()=>({
      content: (
        <div className="contentRight">
        <span>Borrar</span>
        </div>
      ),
      action: () => EliminarTargeta({idusuario:IdUsuario,id:id})
    });
    const GetTarget = ()=>{
      setTargetaUtilizar({
      ...TargetaUtilizar,
      id:id,
      Numero:Numero,
      Nombre:Nombre,
      Vencimiento:Vencimiento,
      CVC:CVC});
      if(Object.values(TargetaUtilizar)){
        Swal.fire({
        position: "top-center",
        icon: "success",
        title: "Elemento seleccionado",
        showConfirmButton: false,
        timer: 1500});}
    }
  return (
    <SwipeableList>
    <SwipeableListItem 
    swipeRight={swipeRigthDataSimple()}
    swipeLeft={swipeLeftDataSimple()}>
    <Container onClick={GetTarget}>
    {
        evaluarTipoTargeta ? <div className="ImagenParaLogoTrageta">
                             <img src={Visa} alt="Visa"/>
                             </div>
                             :
                             <div className="ImagenParaLogoTrageta">
                             <img src={MasterCard} alt="Visa"/>
                             </div>
    }
    <div className="datosdelatargeta">
    <span className="TargetaNumero">{Numero}</span>
    <span className="TargetaNombre">{Nombre}</span>
    </div>
    </Container>
    </SwipeableListItem>
    </SwipeableList>
  )
}
const Container = styled.div`
width: 100%;
display: flex;
gap:10px;
align-items: center;
justify-content: center;
border-bottom: 1px solid black;
.ImagenParaLogoTrageta{
    width: 50px;
    height: 50px;
    img{
        width: 100%;
        height: 100%;
    }}
.datosdelatargeta{
    display: flex;
    flex-direction: column;
    .TargetaNumero{
        font-size: 20px;
        font-weight: 800;
    }
    .TargetaNombre{
        font-size: 25px;
        font-weight: 600;
        color: orange;
    }
}

`;
export default ItemdeTargeta
