import { MapContainer, TileLayer,Marker,Popup,useMapEvents} from "react-leaflet"
import 'leaflet/dist/leaflet.css';
import {UseGlobal} from "../../index"
const Map = () => {
    function LocationMarker() {
       const {position, setPosition} = UseGlobal();
        const map = useMapEvents({
          click() {
            map.locate()
          },
          locationfound(e) {
            setPosition(e.latlng)
            map.flyTo(e.latlng, map.getZoom())
          },
        })
      
        return position === null ? null : (
          <Marker position={position}>
            <Popup>Tu estas Aqui</Popup>
          </Marker>
        )
      }
  return (
      <MapContainer style={{
         width:'100%',
         height:'500px'
      }}
      center={{ lat:15.199999, lng: -86.241905 }}
      zoom={16}
      scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <LocationMarker />
      </MapContainer>
  )
}

export default Map
