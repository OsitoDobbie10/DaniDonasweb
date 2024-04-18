import React from 'react'
import styled from 'styled-components'
import {NavbarMenu,v,HeaderDonna,ViewRestaurantes,FavoritoIndivual} from "../index";
import { useQuery } from '@tanstack/react-query';
const ProductosFavs = () => {
  const {favoritos,showfavs} = ViewRestaurantes();
  useQuery({queryKey:['favorito'],queryFn:()=>showfavs()});
  let longitud = favoritos.length;
  let viewlong = longitud > 0 ? true: false;
  return (
    <Container>
    <div className="area1">
    <HeaderDonna icono={<v.Atras/>} 
                 texto="Mis productos favoritos"
                 icono2={<v.compra/>}
                 ruta="/" ruta2="/Carrito"/>
    </div>
    {
      viewlong ? 
      <div className="favoritositems">
      {
        favoritos.map((fav)=>{
          return <FavoritoIndivual data={fav} key={fav.id}/>
        })
      }
      </div> :
       <div className="favoritositems">
       {
         favoritos.map((fav)=>{
           return <FavoritoIndivual data={fav} key={fav.id}/>
         })
       }
       </div>
    }
    <div className="footer">
    <NavbarMenu/> 
    </div>
    </Container>
  )
}
const Container = styled.div`
min-height: 100vh;
width: 100%;
    .favoritositems{
      width: 90%;
      margin: 10px auto;
      display: flex;
      flex-direction: column;
      gap:20px;
    }

.footer{
 width:100%;
 height: 100px;
}
`
export default ProductosFavs
