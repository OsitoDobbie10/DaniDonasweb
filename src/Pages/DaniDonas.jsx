import styled from 'styled-components'
import {v,UseGlobal,Menucomidastempleted,HeaderDonna,
        FiltrosTempleted,DatosDonna,ViewRestaurantes,FuncionesModal,ModalMenu} from "../index"
import { useQuery } from '@tanstack/react-query';
const DaniDonas = () => {
  const {donitas,showdanielita,showdanielita2} = ViewRestaurantes();
  useQuery({queryKey:["Mostrardonitas"],queryFn:()=>showdanielita()});
  const {arreglobotones,estadodonnas,
        setEstadodonnas,view} = UseGlobal();
  const {openmodaldonnas,closemodaldonnas,modal6,animandoModal6,setModal6,setAnimandoModal6} = FuncionesModal();
 const cambiar = (data)=>{
  setAnimandoModal6(false);
      setTimeout(()=>{
        setModal6(false);
      },1000) 
      showdanielita2(data);
 }
  return (
    <Container>
    {
      modal6 && <ModalMenu data={arreglobotones} cerrar={closemodaldonnas} animacion={animandoModal6} funcionsubmit={cambiar}/>
    }
    <Menucomidastempleted
    header={<HeaderDonna icono={<v.Atras/>} texto="Danni Donnas" icono2={<v.compra/>} ruta="/"/>}
    filtros={<FiltrosTempleted data={arreglobotones} abrirmenu={openmodaldonnas} filter={showdanielita2}/>} 
    arreglo={<DatosDonna titulo={estadodonnas.name} datos={donitas} tipo={view.tipo}/>}
    />
    </Container>
  )
}
const Container = styled.div``;
export default DaniDonas
