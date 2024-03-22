import React from 'react'
import styled from 'styled-components';
import {Header,ViewRestaurantes,Vista1Home,
        ViewRestaurantesList,NavbarMenu,
         FuncionesModal,Modal,ModalDireccion,UseGlobal} from "../../index"
import { useQuery } from '@tanstack/react-query';
const Templeted = () => {
const {promociones} = ViewRestaurantes()
const {getpromociones} = ViewRestaurantes();
const {getrestaurantes} = ViewRestaurantes();
const {restaurantes} = ViewRestaurantes();
const {pedidos} = ViewRestaurantes();
const {getpedido} = ViewRestaurantes();
const {setPedido} = ViewRestaurantes();
const {tipo} = ViewRestaurantes(); 
const {cod} = ViewRestaurantes();
const {descp} = ViewRestaurantes();
const {showusuario,showdireccion,direccion} = ViewRestaurantes();
useQuery({queryKey:["Promociones"],queryFn:()=>getpromociones()});
useQuery({queryKey:["Restaurantes"],queryFn:()=>getrestaurantes()});
useQuery({queryKey:["Tipo Pedido"],queryFn:()=>getpedido()});
useQuery({queryKey:["UsuarioRegistrado"],queryFn:()=>showusuario()});
useQuery({queryKey:["mostrar direccion"],queryFn:()=>showdireccion()});
const {modal,animandoModal,openPedido,
       cerrarPedido,setModal,setAnimandoModal,
       modal3,openDireccion,closeDireccion,animandoModal4} = FuncionesModal();
const {view,setView} = UseGlobal();
const objeto = {tipo:tipo,cod:cod,descp:descp};
const GetValue = ()=>{
  setAnimandoModal(false);
  setView({...view,tipo:tipo,cod:cod,descp:descp});
  setTimeout(()=>{
    setModal(false);
  },500);
}
const value = (p)=>{
  setPedido(p);
}
  return (
    <Container>
     <div className="header">
     <Header funciongis={openPedido} texto1={view.descp} texto2={view.tipo} funciongis2={openDireccion}/>
     </div>
     {modal && <Modal data={pedidos} cerrar={cerrarPedido} 
                      animacion={animandoModal} funcionsubmit={GetValue} funcionvalue={(p)=>value(p)}/>}
     {modal3 && <ModalDireccion direcciones={direccion} cerrar={closeDireccion} animacion={animandoModal4} />}
     <div className="area1">
    <span className='titlepromo'>Promociones</span>
    <Vista1Home data={promociones}/>
     </div>
     <div className="area2">
     <span className='TituloHome'>Restaurantes disponibles</span>
     <ViewRestaurantesList data={restaurantes}/>
     </div>
     <div className='footer'>
     <NavbarMenu/>
     </div>
    </Container>
  )
}
const Container = styled.div`
min-height: 100vh;
width: 100%;
display:grid;
grid-template: "header" 100px
                "area1" 500px
                "area2" 400px
                "footer" 100px;
.header{
    grid-area:header;
    background-color: white;
    display: flex;
    align-items: center;
}
.area1{
    grid-area:area1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction:column;
    .titlepromo{
      font-size: 25px;
      font-weight: bold;
      margin-bottom: 20px;
    }
}
.area2{
    grid-area:area2;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: start;
    .TituloHome{
      margin-top: 20px;
      font-size: 15px;
      font-weight: bold;
    }
} 
.footer{
    grid-area:footer;
}
`

export default Templeted;
