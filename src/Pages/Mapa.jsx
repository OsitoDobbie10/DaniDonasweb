import React from 'react'
import styled from 'styled-components'
import {NavbarMenu} from "../index"
const Mapa = () => {
  return (
    <Container>
     <div className="mapa">
     <iframe width="100%" height="600" src="https://indi6fde96800c20.maps.arcgis.com/apps/instant/attachmentviewer/index.html?appid=f13e3e72bc0b4e959631cafda0c16555" frameborder="0"></iframe>
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
