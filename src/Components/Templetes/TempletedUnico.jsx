import styled from 'styled-components'
const TempletedUnico = ({header,datos,footer}) => {
  return (
    <Container>
     <div className="header">
    {header}
    </div>
    <div className="contenido">
    <div className="pedidos">
    {datos}
    </div>
    </div>
    <div className="footer">
    {footer}
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
                "contenido" 700px
                "footer" 100px;
.header{grid-area: header;}
.contenido{
    grid-area: contenido;
    .pedidos{
        width: 90%;
        margin: auto;
    }
.footer{
    grid-area: footer; 
}
}



`;
export default TempletedUnico
