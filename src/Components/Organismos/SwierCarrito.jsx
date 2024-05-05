import "../../Style/TempletedCarrito.css"
import IconoWhatsapp from '../../Assets/whatsapp.png';
import {ObjetoCarritoCompra,MapaCarrito,MensajeMapa} from "../../index"
const SwierCarrito = ({data,direcciones,recoger,encargar,TipoPedido,
                       Latitude,Longitud,abrircarrito,openelemento2,
                       openelemento1}) => {
  const evaluarmapa = TipoPedido === "Encargar" || TipoPedido === "Recoger" ? true : false;
  return (
    <div className="contenidoswiercarrito">
    <h2 className='TituloCarrito'>Detalles del pedido</h2>
    <div className="submenucarrito">
    <span className={`carritoname ${abrircarrito ? 'izquierda' : 'derecha'} `} onClick={openelemento1}>Detalles</span>
    <span className={`carritoname1 ${abrircarrito ? 'izquierda': 'derecha'}`} onClick={openelemento2}>Ubicacion del pedido</span>
    <div className="iconocontenedor">
    <img src={IconoWhatsapp} alt="Whatsapp" className='whatsappicono'/>
    </div>
    </div>
    {
    abrircarrito ? 
    <ObjetoCarritoCompra key={data.id} data={data} 
                                 direcciones={direcciones} 
                                 recoger={recoger}
                                 encargar={encargar}
                                 TipoPedido={TipoPedido}/>

    :
    evaluarmapa ? 
    <MensajeMapa/>
    : 
    <MapaCarrito Latitud={Latitude} Longitud={Longitud}/>
    }
    </div>
  )
}

export default SwierCarrito
