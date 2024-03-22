import { PacmanLoader } from "react-spinners";
import styled from "styled-components";
const SpinnerIntro = () => {
  return (
    <Container>
      <PacmanLoader size={150} color="#d2610b"/>
      <span>Bienvenido </span>
    </Container>
  )
}
const Container = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
height: 100vh;
width: 100vw;
position: absolute;
top: 0;
left: 0;
z-index: 1000;
background-color:rgba(0,0,0,0.8);
transform: all 0.3s;
color: yellow;
span{
  font-size: 35px;
  font-weight: 900;
  margin-top: 30px;
}`;

export default SpinnerIntro; 

