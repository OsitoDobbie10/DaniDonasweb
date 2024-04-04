import React from 'react'
import styled from 'styled-components'
import {NavbarMenu,v,HeaderDonna,ViewRestaurantes,FavoritoIndivual} from "../index";
import { useQuery } from '@tanstack/react-query';
const ProductosFavs = () => {
  const {favoritos,showfavs} = ViewRestaurantes();
  useQuery({queryKey:['favorito'],queryFn:()=>showfavs()});
  console.log(favoritos);
  return (
    <Container>
    <div className="area1">
    <HeaderDonna icono={<v.Atras/>} 
                 texto="Mis productos favoritos"
                 icono2={<v.compra/>}
                 ruta="/" ruta2="/Carrito"/>
    </div>
    <div className="area2">
    <div className="favoritositems">
    {
      favoritos.map((fav)=>{
        return <FavoritoIndivual data={fav} key={fav.id}/>
      })
    }
    </div>
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
    .favoritositems{
      width: 90%;
      margin:auto;
      display: flex;
      flex-direction: column;
      gap:20px;
    }
    
}
.footer{
  grid-area: footer;

}
`
export default ProductosFavs
