import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion';
const MapaCarrito = ({Latitud,Longitud}) => {
  const transition = {type:"spring",duration:4}
  return (
    <Container>
    <motion.div 
     className="MapaCarrito"
     initial={{opacity:0,x:-100}}
     animate={{opacity:1,x:0}}
     exit={{opacity:0,x:100}}
     transition={transition}
     >
     </motion.div>
    </Container>
  )
}
const Container = styled.div`
width: 100%;
height: 100%;
`
export default MapaCarrito
