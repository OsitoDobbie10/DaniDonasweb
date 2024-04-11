import styled from "styled-components"
import {v,FuncionesModal,Targeta} from "../../index"
const FormularioEntragar = ({direcciones}) => {
  const {abrirDireccion} = FuncionesModal();
  return ( 
    <>
    <div className="add">
    <span className='Icono1' onClick={abrirDireccion}>{<v.agregar/>}</span>
    <span className='Texto'>Agregar nueva direccion de entrega</span>
    <span className='Icono2'>{<v.Fechadireccion/>}</span>
    </div>
    <div className="dataDIR">
    {
      
      direcciones.map((data)=>{
        return <Targeta key={data.id} data={data}/>
      })
    }
    </div>
    </>
  )
}

export default FormularioEntragar
