import { MapContainer, TileLayer,Marker,Popup,useMapEvents} from "react-leaflet"
import 'leaflet/dist/leaflet.css';

const MapaParaCarrito = ({lat,long}) => {
    const position = [lat,long]
  return (
    <MapContainer center={position} zoom={13} scrollWheelZoom={false}
    style={{
        width:'100%',
        height:'500px'}}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={position}>
      <Popup>
        Aqui estas ubicado<br /> Dejaremos tu pedido.
      </Popup>
    </Marker>
    </MapContainer>
  )
}

export default MapaParaCarrito
