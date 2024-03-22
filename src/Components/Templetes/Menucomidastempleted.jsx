import styled from "styled-components"
const Menucomidastempleted = ({header,filtros,arreglo}) => {
  return (
    <Container>
    <div className="header">
    {header}
    </div>
    <div className="iconos">
    {filtros}
    </div>
    <div className="datos">
    {arreglo}
    </div>
    </Container>
  )
}
const Container = styled.div`
width: 100%;
height: 100%;
display: grid;
grid-template: "header" 100px
                "iconos" 100px
                "datos" auto;
.header{
    grid-area:header;
}
.iconos{
    grid-area:iconos;
}
.datos{
    grid-area:datos;
}

`
export default Menucomidastempleted
