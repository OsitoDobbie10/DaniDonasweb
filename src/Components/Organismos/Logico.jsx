import React from 'react'
import { useNavigate } from 'react-router-dom'
const Logico = () => {
    const Registro = useNavigate();
  return (
    <>
    <h2 style={{color:'orange',fontSize:'45px',marginBottom:'25px',
                    fontWeight:'bolder', textAlign:'center',fontWeight:'bold',marginTop:'90px'}}>Bienvenido</h2>
    <nav style={{display:'flex',flexDirection:'column',alignItems:'center',gap:'20px'}}>
    <button onClick={()=>{Registro('/Login')
     }} type="button" className="btn btn-danger p-2"  style={{ animationDelay: "0.8s"}}>Iniciar Secion</button>
         <button onClick={()=>{Registro('/Login')}}
          type="button" className="btn btn-warning p-2.4" style={{ animationDelay: "0.8s"}}>Registrar</button>
       </nav>
    </>
  )
}

export default Logico
 