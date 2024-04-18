import styled from 'styled-components'
import {ObjetoCarritoCompra} from "../../index"
const TempletedUnico = ({header,datos,footer,direcciones}) => {
  const {ciudad,colonia,referencia,direccion,Latitude,Longitud} = direcciones;
  return (
    <Container>
     <div className="header">
    {header}
    </div>
    <div className="contenido">
    <div className="pedidos">
    {datos.map((data)=>{
      return <ObjetoCarritoCompra key={data.id} data={data}/>
    })
    }
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
                "contenido" 1000px
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
