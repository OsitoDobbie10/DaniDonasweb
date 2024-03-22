import {UseGlobal} from "../index";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
const FuncionesModal = () => {
    const { modal,setModal, animandoModal,setAnimandoModal,
            animandoModal2,setAnimandoModal2,
            modal2,setModal2,
            modal3,setModal3,
            animandoModal4,setAnimandoModal4,
            modal5,setModal5,
            animandoModal5,setAnimandoModal5,setLatitud,setLongitud,
            modal6,setModal6,
            animandoModal6,setAnimandoModal6,
            animandoModal7,setAnimandoModal7,
            modal7,setModal7,datosform1,datosform2,datosform3,datosform4} = UseGlobal();
    const Navegar = useNavigate();
    const openPedido = ()=>{
    setModal(true);
    setTimeout(()=>{
      setAnimandoModal(true);
    },1000)
    }
    const cerrarPedido = ()=>{
        setAnimandoModal(false);
        setTimeout(()=>{
          setModal(false);
        },500)
    }
    const OpenLogin = ()=>{
      setModal2(true)
      setTimeout(()=>{
        setAnimandoModal2(true);
      },1000)
    }
    const CloseLogin = ()=>{
      setAnimandoModal2(false);
      setTimeout(()=>{
        setModal2(false);
      },500)
    }
    const openDireccion = ()=>{ 
      setModal3(true);
      setTimeout(()=>{
        setAnimandoModal4(true);
    },1000)
    }

    const closeDireccion = ()=>{ 
      setAnimandoModal4(false);
      setTimeout(()=>{
        setModal3(false);
      },500)
    }

    const abrirDireccion = ()=>{
    Swal.fire({
    title: "Quieres agregar una direccion nueva?",
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: "Continuar",
    denyButtonText: `No continuar`
    }).then((result) => {
  if (result.isConfirmed) {
    Navegar('/Direccion')
  } else if (result.isDenied) {
    Swal.fire("No se agrego una direccion", "", "Intenta de nuevo");
  }
});
    }

    const closeFormulario = ()=>{
      setAnimandoModal5(false);
      setTimeout(() => {
      setModal5(false);
      }, 500);
    };
    const abrirFormulario = ()=>{
      setModal5(true);
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          setLatitud(position.coords.latitude);
          setLongitud(position.coords.longitude);
        }, (error) => {
          console.error(`Error getting location: ${error.message}`);
        });
      } else {
        console.error('Geolocation is not supported by this browser.');
      }
      setTimeout(()=>{
        setAnimandoModal5(true);
    },1000)
    };
    const openmodaldonnas = ()=>{
    setModal6(true);
    setTimeout(()=>{
      setAnimandoModal6(true);
    },1000)
    }
    const closemodaldonnas = ()=>{
      setAnimandoModal6(false);
      setTimeout(()=>{
        setModal6(false);
      },500)
    }
    const openmodalDW = ()=>{
    setModal7(true);
    setTimeout(()=>{
      setAnimandoModal7(true);
    },1000)
    }
    const closemodalDW = ()=>{
    setModal7(false);
    setTimeout(()=>{
      setAnimandoModal7(false); 
    },1000)
    }
    const PedirPedido = (nombre,precio,descp,imagen,promo)=>{
      const {N,L,J,CN,CB} = datosform1;
      const {FM,LB,Cc,CC} = datosform2;
      const {MP,MM,G,GO,CCO,FT,Kt,S,AP} = datosform3;
      const {Aven,JL,G1,P1} = datosform4;
      const data = {
        nombre,
        precio,
        descp,
        imagen,promo,
        N,L,J,CN,CB,FM,LB,Cc,CC,MP,MM,G,GO,CCO,FT,Kt,S,AP,Aven,JL,G1,P1
      };
    }
  return{modal,animandoModal,openPedido,
         cerrarPedido,setModal,
         setAnimandoModal,OpenLogin,CloseLogin,
         modal2,animandoModal2,setModal2,openDireccion,closeDireccion,
         modal3,animandoModal4,abrirDireccion,
         closeFormulario,abrirFormulario,modal5,animandoModal5,
         openmodaldonnas,closemodaldonnas,modal6,animandoModal6,setAnimandoModal6,
         openmodalDW,closemodalDW,modal7,animandoModal7,setAnimandoModal7,setModal7,PedirPedido,
         datosform1,datosform2,datosform3,datosform4}} 

export default FuncionesModal;
