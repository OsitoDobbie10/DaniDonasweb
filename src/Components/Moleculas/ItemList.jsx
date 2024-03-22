import styled from 'styled-components';
import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';
import confetti from "canvas-confetti";
const ItemList = ({item}) => {
    const {nombre,imagen,cod} = item;
    const Navegar = useNavigate();
    const Navegarcanvas = ()=>{
      Navegar(`/${cod}`)
      confetti()
    }
  return (
    <Container>
     <motion.img
      onClick={Navegarcanvas}
      animate={{ rotate: 360}}
      transition={{
        type: "spring"
      }} 
      whileHover={{ scale: 1.2 }}
      onHoverStart={e => {}}
      onHoverEnd={e => {}}
      className='imagenitem' src={imagen} alt={nombre} />
     <span className='Span'>{nombre}</span>
    </Container>
  )
}
const Container = styled.div`
width: 300px;
height: 300px;
display: flex;
flex-wrap: wrap;
flex-direction: column;
gap: 10px;
margin-top: 25px;
.imagenitem{
    width: 100%;
    height: 200px;
    margin-bottom: 10px;
    border-radius: 15px;
    cursor: pointer;
}
.Span{
    font-size: 15px;
    font-weight: 300;
    text-align: center;
    color:black;
}
`
export default ItemList
