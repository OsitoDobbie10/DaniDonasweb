import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion';
import {MapaParaCarrito} from "../../index"
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
     <MapaParaCarrito lat={Latitud} long={Longitud}/>
     </motion.div>
    </Container>
  )
}
const Container = styled.div`
width: 90%;
height: 400px;
margin: auto;
`
export default MapaCarrito
