import styled from "styled-components"
import {ViewRestaurantes,UseGlobal} from "../index"
const OrdenFinal = () => {
  const {getdireccion,getRecoger,getencargar,formeditar,valuePedido} = UseGlobal();
  const {showOrdenPedido,OrdenFinal} = ViewRestaurantes();
  const {ciudad,colonia,direccion,Latitude,Longitud} = getdireccion;
  const {fecharecoger,horarecoger} = getRecoger;
  const {nombre,dir,hora} = getencargar;
  return (
    <Container>
      
    </Container>
  )
}
const Container = styled.div``;
export default OrdenFinal
