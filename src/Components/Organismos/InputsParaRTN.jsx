import styled from "styled-components"
const InputsParaRTN = ({funcion,RTN,Negocio}) => {
  return (
    <Container>
    <input type="text" value={RTN} name="RTN" className="I1" onChange={funcion} placeholder="RTN"/>
    <input type="text" value={Negocio} name="Negocio" className="I1"  onChange={funcion} placeholder="Nombre Negocio"/>
    </Container>
  )
}
const Container = styled.div`
width: 700px;
height: 90px;
display: flex;
gap:10px;
align-items: center;
justify-content: center;
.I1{
    display: block;
    width: 200px;
    height: 50px;
    padding: 10px 10px;
    border: 1px solid black;
}
`
export default InputsParaRTN
