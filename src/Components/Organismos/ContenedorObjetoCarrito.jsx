import React from 'react';
import styled from 'styled-components';
import {ObjetoCarritoCompra} from "../../index"
import { motion } from 'framer-motion';
const ContenedorObjetoCarrito = ({datos,direcciones,recoger,encargar}) => {
const transition = {type:"spring",duration:4}
  return (
    <Container>
    <motion.div 
    className="pedidos"
    initial={{opacity:0,x:-100}}
    animate={{opacity:1,x:0}}
    exit={{opacity:0,x:100}}
    transition={transition}>
    {datos.map((data)=>{
      return <ObjetoCarritoCompra key={data.id} data={data} 
                                 direcciones={direcciones} 
                                 recoger={recoger}
                                 encargar={encargar}/>
    })
    }
    </motion.div>
    </Container>
  )
}
const Container = styled.div`
width: 100%;
height: 100%;
.pedidos{
    width: 100%;
}
`
export default ContenedorObjetoCarrito
