import React from 'react'
import styled from 'styled-components'
import {NavbarMenu} from "../index"
const Mapa = () => {
  return (
    <Container>
     <div className="mapa">
     <iframe width="100%" height="600" src="https://sit22e88300f6941.maps.arcgis.com/apps/webappviewer/index.html?id=0c3bc5096fbd46fba1bc6ef8f2f443f1" frameborder="0"></iframe>
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
