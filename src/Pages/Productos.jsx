import styled from "styled-components"
import {HeaderDonna,NavbarMenu,TempletedUnico,v} from "../index";
const Productos = () => {
  return (
    <Container>
    <TempletedUnico header={<HeaderDonna icono={<v.Atras/>} 
                                         texto="Carrito de compras"
                                          ruta="/"
                                          ruta2="/Carrito"
                                          icono2={<v.compra/>}/>}
                    footer={<NavbarMenu/>}            
                    />
    </Container>
  )
}
const Container = styled.div``;
export default Productos
