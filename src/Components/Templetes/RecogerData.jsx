import styled from "styled-components"
const RecogerData = ({fecharecoger,horarecoger}) => {
  return (
    <Container>
    <span className="Var1">Recoger en Negocio</span>
    <div className="Var2">
    <span className="Var2-1">Fecha para recoger: {fecharecoger}</span>
    <span className="Var2-2">Hora para recoger: {horarecoger}</span>
    </div>
    </Container>
  )
}
const Container = styled.div`
width: 400px;
height: 300px;
display: flex;
flex-direction: column;
gap:5px;
.Var1{
    font-weight: 600;
    font-size: 20px;
    color: blue;
}
.Var2{
    display: flex;
    flex-direction: column;
    gap:3px;
.Var2-1{
    color:gray;
    font-weight: 500;
    font-size: 15px;}

.Var2-2{
    color:gray;
    font-weight: 500;
    font-size: 15px;}
}

`
export default RecogerData;
