import { useState, useEffect } from "react"
import styled from "styled-components";
import {v} from "../../index"
const BotonPedidoEnviar = ({precio,funcion,funcion2}) => {
    const [showScrollTopButton, setShowScrollTopButton] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
          if (window.scrollY > 90) {
            setShowScrollTopButton(true);
          } else {
            setShowScrollTopButton(false);
          }
        });
      }, []);
  return (
    <Container>
    {
        showScrollTopButton && <div className="container">
                               <span className="corazon" onClick={funcion2}>{<v.FAVORITO/>}</span>
                               <button className="data" onClick={funcion} >
                               <span className="Ordenar">Ordenar</span>
                               <span className="precio">L.{precio}.00</span>
                               </button>
                              </div>
    }
    </Container>
  )
}
const Container = styled.div`
position: fixed;
bottom: 15px;
right: 20px;
.container{
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 400px;
    height: 50px;
    z-index: 1000;
    .corazon{
        font-size: 25px;
        font-weight: bold;
        &:hover{
            color: red;
            cursor: pointer;
        }
    }
    .data{
        display: flex;
        width: 200px;
        height: 50px;
        align-items: center;
        justify-content: center;
        gap:20px;
        border-radius: 5px;
        background-color: red;
        color:white;
        cursor: pointer;

    .Ordenar{
        font-weight: 900;
    }
    .precio{
        font-weight: 900;
        font-size: 20px;
    }
    }
   

}

`;
export default BotonPedidoEnviar
