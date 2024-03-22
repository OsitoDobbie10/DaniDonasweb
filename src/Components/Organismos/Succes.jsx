import React from 'react'
import {UseGlobal} from "../../index"
const Succes = ({mensaje}) => {
    const {animandoModal3} = UseGlobal(); 
  return (
    <div className='modal'>
       <h1 className={`mensajito ${animandoModal3 ? 'animar': 'cerrar'}`}>{mensaje}</h1>
    </div>
  )
}

export default Succes
