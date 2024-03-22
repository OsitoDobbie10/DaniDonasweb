import {v,UseGlobal,Menucomidastempleted,HeaderDonna,
        FuncionesModal,FilterDWCheescake,
        DatosCheescake,ViewRestaurantes,ModalMenu} from "../index"
import { useQuery } from '@tanstack/react-query';
import styled from 'styled-components'
const DV_Cheescake = () => {
  const {openmodalDW,closemodalDW,modal7,animandoModal7,setAnimandoModal7,setModal7} = FuncionesModal();
  const { arreglobotones2,setArreglobotones2,estadoDW,setEstadoDW,view} = UseGlobal();
  const {cheescake,showDWcheescake,showDWcheescake2} = ViewRestaurantes();
  useQuery({queryKey: ["Mostrar Cheescake"], queryFn:()=>showDWcheescake()});
  const cambiar2 = (data)=>{
    setModal7(false);
    setTimeout(()=>{
      setAnimandoModal7(false); 
    },1000)
    showDWcheescake2(data);
   }
  return (
    <Container>
    {modal7 && <ModalMenu data={arreglobotones2} 
                          cerrar={closemodalDW}
                          animacion={animandoModal7} 
                          funcionsubmit={cambiar2}/>}
     <Menucomidastempleted
      header={<HeaderDonna 
               icono={<v.Atras/>}
                texto="W&D Cheescake"
                icono2={<v.compra/>} 
                 ruta="/"/>}
        filtros={<FilterDWCheescake 
                  data={arreglobotones2} 
                  abrir={openmodalDW} filter={showDWcheescake2}/>
                  }
        arreglo={<DatosCheescake datos={cheescake} 
                                 titulo={estadoDW.name}
                                 tipo={view.tipo}
                                 />}

      />
    </Container>
  )
}
const Container = styled.div``;
export default DV_Cheescake
