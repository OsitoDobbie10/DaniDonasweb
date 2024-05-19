import styled from "styled-components";
const ItemDeposito = ({data}) => {
  const {N_cuenta,Nombre,Imagen} = data;
  return (
    <Container>
    <div className="imagenbanco">
    <img src={Imagen} alt={Nombre} />
    </div>
    <div className="DatosCuenta">
    <span className="Caracteristicas">BAC:{N_cuenta}</span>
    <span className="Caracteristicas2">Nombre:{Nombre}</span>
    </div>
    </Container>
  )
}
const Container = styled.div`
width: 400px;
height: 100px;
display: flex;
gap:20px;
align-items: center;
border-radius: 15px;
background-color: #C7BB07;
.imagenbanco{
  width: 100px;
  height: 100px;
  img{
    width: 100%;
    height: 100%;
    border-radius: 20px;
  }}
.DatosCuenta{
    display: flex;
    flex-direction: column;
    gap:10px;
    .Caracteristicas{
        font-weight: 800;
        font-size:20px;
    }

}
`;
export default ItemDeposito
