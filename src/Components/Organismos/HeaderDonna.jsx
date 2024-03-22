import styled from "styled-components"
import { useNavigate } from "react-router-dom";
const HeaderDonna = ({icono,texto,icono2,funcion,ruta}) => {
    const backhome = useNavigate();
  return (
    <Container>
    <span className="back" 
    onClick={()=>{backhome(ruta)}}>{icono}</span>
    <span className="textocenter">{texto}</span>
    <span className="carrito">{icono2}</span>
    </Container>
  )
}
const Container = styled.header`
width: 90%;
height: 100%;
margin: auto;
display: flex;
justify-content: space-around;
align-items: center;
.back{
    font-size: 35px;
    font-weight: bold;
    color: black;
    &:hover{
        cursor: pointer;
    }
}
.textocenter{
    font-size: 45px;
    font-weight: bold;
    color: Red;
    text-align: center;
}
.carrito{
    font-size: 35px;
    font-weight: bold;
    color: black;
    &:hover{
        cursor: pointer;
        opacity: 0.6;

    }
}
`;
export default HeaderDonna
