import styled from "styled-components"
const DomicioData = ({ciudad,colonia,
                      direccion}) => {
  return (
    <Container>
    <span className="Var1">Recibir a Domicilio</span>
    <div className="Var2">
    <span className="Var2-1">Direccion: {direccion}</span>
    <span className="Var2-2">Ciudad: {ciudad}</span>
    <span className="Var2-3">Colonia: {colonia}</span>
    </div>
    </Container>
  )
}
const Container = styled.div`
width: 400px;
height: 150px;
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
