import styled from "styled-components"
import {v} from "../../index"
import { useState,useEffect } from "react"
const BotonMenuView = ({abrir}) => {
    const [showScrollTopButton2, setShowScrollTopButton2] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
          if (window.scrollY > 90) {
            setShowScrollTopButton2(true);
          } else {
            setShowScrollTopButton2(false);
          }
        });
      }, []);
  return (
    <Container onClick={abrir}>
    {
         showScrollTopButton2 && <div className="boton" >
        <span className="boton">{<v.Menu/>}</span>
         </div>
    }
    </Container>
  )
}
const Container = styled.div`
position: fixed;
bottom: 15px;
left: 45px;
width: 50px;
height: 50px;
.boton{
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: orange;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover{
        cursor: pointer;
    }
.boton{
    font-size: 25px;
    font-weight: bold;
    color: white;
}
}


`;
export default BotonMenuView
