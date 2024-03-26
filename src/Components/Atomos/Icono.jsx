import styled from "styled-components"
const Icono = ({icono}) => {
  return (
    <Container >
    <img src={icono} alt="IMG"/>
    </Container>
  )
}
const Container = styled.div`
width:50px;
height: 50px;
img{
  width: 100%;
  height: 100%;
}
`
export default Icono;
