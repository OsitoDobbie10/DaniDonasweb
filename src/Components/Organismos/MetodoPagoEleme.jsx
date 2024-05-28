import styled from "styled-components"
const MetodoPagoEleme = ({icono1,texto,info,icono2,funcion}) => {
  return (
    <Container>
    <img src={icono1} alt="KNCA" className="IconoIzquierda" />
    <div className="InfoDerecha">
    <div className="L1">
    <span className="L1-1">{texto}</span>
    <span className="L1-2">{info}</span>
    </div>
    <span className="SeleccionaCla" onClick={funcion}>{icono2}</span>
    </div>
    </Container>
  )
}
const Container = styled.div`
width: 700px;
height: 300px;
display: flex;
align-items:center;
gap:10px;
.IconoIzquierda{
    width: 25%;
    height: 200px;
}
.InfoDerecha{
    width: 75%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap:10px;
    .L1{
        display: flex;
        flex-direction: column;
        gap:10px;
    .L1-1{
        font-size: 18px;
        font-weight: 700;
        color: gray; 
    }
    .L1-2{
        font-size: 15px;
        font-weight: 600;
        color: gray; 
    }
    }

    .SeleccionaCla{
        font-size: 30px;
        &:hover{
            cursor: pointer;
        }
    }
}
`;
export default MetodoPagoEleme
