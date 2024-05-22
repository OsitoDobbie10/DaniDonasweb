import React from 'react'
import styled from 'styled-components'
import {NavbarMenu,v,HeaderDonna,ViewRestaurantes,FavoritoIndivual} from "../index";
import { useQuery } from '@tanstack/react-query';
const ProductosFavs = () => {
  const {favoritos,showFilterFavs,idUsuario} = ViewRestaurantes();
  useQuery({queryKey:['favorito'],queryFn:()=>showFilterFavs({Idusuario:idUsuario})});
  let longitud = favoritos.length;
  let view = longitud > 0 ? true: false;
  return (
    <Container>
    <HeaderDonna icono={<v.Atras/>} texto="Mis productos favoritos" icono2={<v.compra/>} ruta="/" ruta2="/Carrito"/>
    {
      view ? 
      <div className="arregloPedidos">
      {
        favoritos.map((fav)=>{
          return <FavoritoIndivual data={fav} key={fav.id}/>
        })
      }
      </div> :
      <div className="arreglopedidos2">
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
width: 100%;
min-height: 100vh;
background-color: aliceblue;
.arregloPedidos{
  width: 90%;
  margin:20px auto;
  display: flex;
  flex-direction: column;
  gap:20px; 
}

.arreglopedidos2{
  width: 90%;
  margin:20px auto;
  display: flex;
  flex-direction: column;
  gap:20px; 
  height: 800px;
}

.footer{
  width: 100%;
  height: 100px;
position: fixed;
bottom: 0;
}


`;
export default ProductosFavs
