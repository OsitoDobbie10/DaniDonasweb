import styled from "styled-components"
import { motion } from 'framer-motion';
import "./VireProducto.css"
const ViewProducto = ({Precio1,Precio2}) => {
  return (
    <motion.div className="contenidoVista"
     initial={{ opacity: 0, scale: 0.5 }}
     animate={{ opacity: 1, scale: 1 }}
     transition={{ duration: 1 }}>
    <span className="pedidpoRe">Resumen Pedido</span>
    <span className="adicional1">L.{Precio1}.0</span>
    <span className="Precio1">Adicional: L.{Precio2}.0</span>
    </motion.div>
  )
}
export default ViewProducto;

