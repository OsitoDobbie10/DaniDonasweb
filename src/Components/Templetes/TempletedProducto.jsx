import styled from "styled-components"
const TempletedProducto = ({header,contenido,formulario}) => {
  return (
    <Container>
    <div className="header">
    {header}
    </div>
    <div className="title">
    <h1>Tu pedido</h1>
    </div>
    <div className="contenido">
    {contenido}
    </div>
    <div className="formulario">
    {formulario}
    </div> 
    </Container>
  )
}
const Container = styled.div`
width: 90%;
margin:auto;
display: grid;
height: 100%;
grid-template: "header" 100px
                "title" 100px
                "contenido" 580px
                "formulario" auto;
.header{
    grid-area: header;}
.title{
  grid-area: title;
  text-align: center;
}
.contenido{
    grid-area: contenido;}
.formulario{
    grid-area: formulario;
}
`
export default TempletedProducto
