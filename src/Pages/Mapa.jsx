import React from 'react'
import styled from 'styled-components'
import {NavbarMenu} from "../index"
const Mapa = () => {
  return (
    <Container>
     <div className="mapa">
     <iframe width="100%" height="600" src="https://univafb72d50bfd9.maps.arcgis.com/apps/webappviewer/index.html?id=e97a71c9efb740d5b6e6fc3e12154318" frameborder="0"></iframe>
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
grid-template: "mapa" 650px
                "footer" 80px;
.mapa{
    grid-area:mapa;  
}
.footer{
  grid-area: footer;
}

`
export default Mapa
