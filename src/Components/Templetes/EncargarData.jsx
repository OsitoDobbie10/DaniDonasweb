import styled from "styled-components"
const DomicioData = ({nombre,dir,hora}) => {
  return (
    <Container>
    <span className="Var1">Encargar 24 horas antes</span>
    <div className="Var2">
    <span className="Var2-1">Quien recibira: {nombre}</span>
    <span className="Var2-2">Direccion: {dir}</span>
    <span className="Var2-3">Hora de encargo: {hora}</span>
    </div>
    </Container>
  )
}
const Container = styled.div`
width: 400px;
height: 100px;
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

.Var2-3{
    color:gray;
    font-weight: 500;
    font-size: 15px; 
}

}

`
export default DomicioData;
