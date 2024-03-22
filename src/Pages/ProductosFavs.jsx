import React from 'react'
import styled from 'styled-components'
import {NavbarMenu} from "../index"
const ProductosFavs = () => {
  return (
    <Container>
    <div className="area1"></div>
    <div className="area2"></div>
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
grid-template: "area1" 400px
                "area2" 400px
                "footer" 100px;
.area1{
    grid-area:area1;
    background-color: rgba(0,0,0,0.7);
}
.area2{
    grid-area:area2;
    background-color: rgba(165, 80, 80, 0.7);
}
.footer{
  grid-area: footer;

}
`
export default ProductosFavs
