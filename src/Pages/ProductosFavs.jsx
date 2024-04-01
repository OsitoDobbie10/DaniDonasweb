import React from 'react'
import styled from 'styled-components'
import {NavbarMenu,v,HeaderDonna,ViewRestaurantes} from "../index";
import { useQuery } from '@tanstack/react-query';
const ProductosFavs = () => {
  const {favoritos,MostarFav} = ViewRestaurantes();
  useQuery({queryKey:['favorito'],queryFn:()=>MostarFav()});
  return (
    <Container>
    <div className="area1">
    <HeaderDonna icono={<v.Atras/>} 
                 texto="Mis productos favoritos"
                 icono2={<v.compra/>}
                 ruta="/"/>
    </div>
    <div className="area2">
    
    </div>
    <div className="footer">
    <NavbarMenu/> 
    </div>
    </Container>
  )
}
const Container = styled.div`
min-height: 100vh;
width: 100%;
display:grid;
grid-template: "area1" 200px
                "area2" 800px
                "footer" 100px;
.area1{
    grid-area:area1;
}
.area2{
    grid-area:area2;
    
}
.footer{
  grid-area: footer;

}
`
export default ProductosFavs
