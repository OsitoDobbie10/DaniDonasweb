import styled from "styled-components"
import { motion } from 'framer-motion';
const ContenidoProducto = ({nombre,precio,descp,imagen}) => {
  return (
    <Container>
    <div className="imagen">
    <motion.img
     initial={{ opacity: 0, scale: 0.5 }}
     animate={{ opacity: 1, scale: 1 }}
     transition={{ duration: 1 }}
    src={imagen} alt={nombre} className="imagengis"/>
    </div>
    <div className="titulos">
    <span className="C1">
    {nombre}
    </span>
    <span className="C2">
    LPS.{precio}.00
    </span>
    </div>
    <div className="descpriccion">
    {descp}
    </div>
    </Container>
  )
}
const Container = styled.div`
display: flex;
flex-direction: column;
width: 70%;
margin:2px auto;
.imagen{
  width: 400px;
  height: 400px;
  margin: auto;
  border-radius: 10px;
  .imagengis{
    width:100%;
    height: 100%;
    border-radius: 10px;
    &:hover{
      cursor: pointer;
    }
  }
  
}
.titulos{
  display: flex;
  justify-content: space-around;
  margin: 10px auto;
  width: 400px;
  .C1{
    font-size: 25px;
    font-weight: bold;
    color: blue;
    text-shadow: 2px 2px 2px white;
  }
  .C2{
    font-size: 25px;
    font-weight: bold;
    color: red;
    text-shadow: 2px 2px 2px white;
  }}

  .descpriccion{
    width: 400px;
    margin: auto;
    color: black;
    text-shadow: 2px 2px 2px white;
    text-align:justify;
    font-weight: 700;

  }
`
;
export default ContenidoProducto
