import styled from "styled-components";
import {SwierCarrito} from "../../index";
const ContainerArrayCompras = ({datos,encargar,abrircarrito,openelemento1,openelemento2,direcciones,
                                recoger,TipoPedido,Latitude}) => {

  return (
    <Container>
      {
        datos.map((data)=>{
          return <SwierCarrito
                  key={data.id}
                  data={data} 
                  encargar={encargar}
                  abrircarrito={abrircarrito}
                  openelemento1={openelemento1}
                  openelemento2={openelemento2}
                  direcciones={direcciones}
                  recoger={recoger}
                  TipoPedido={TipoPedido}
                  Latitude={Latitude} Longitud={Longitud}
                 />
        })
      }
    </Container>
  )
}
const Container = styled.div`
width: 90%;
height: 100%;
margin:auto;
`
export default ContainerArrayCompras
