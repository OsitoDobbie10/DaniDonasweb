import styled from "styled-components"
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
const HeaderDonna = ({icono,texto,icono2,icono3,funcion,ruta,ruta2}) => {
    const backhome = useNavigate();
    const getpedidos = useNavigate();
    const knowGet = ()=>{
        Swal.fire({
            title: "Quieres agregar una nueva targeta nueva?",
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: "Continuar",
            denyButtonText: `No continuar`
            }).then((result) => {
          if (result.isConfirmed) {
            getpedidos(ruta2)
          } else if (result.isDenied) {
            Swal.fire("No se agrego una targeta", "", "Intenta de nuevo");
          }
        });
    }
    const vista = texto === "Targetas de Credito o Debito" ? true : false;

  return (
    <Container>
    <span className="back" 
    onClick={()=>{backhome(ruta)}}>{icono}</span>
    <span className="textocenter">{texto}</span>
    {
        vista ? <span className="carrito"
                  onClick={knowGet}>{icono3}</span> :
                <span className="carrito"
                  onClick={()=>{getpedidos(ruta2)}}>{icono2}</span> 
    }
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
