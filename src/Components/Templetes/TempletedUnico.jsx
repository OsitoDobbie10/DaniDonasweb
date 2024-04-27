import styled from 'styled-components'
import {ObjetoCarritoCompra,UseGlobal,MapaCarrito,ContenedorObjetoCarrito} from "../../index";
import IconoWhatsapp from '../../Assets/whatsapp.png';
const TempletedUnico = ({header,datos,footer,direcciones,encargar,recoger,TipoPedido}) => {
const {abrircarrito,openelemento1,openelemento2,view} = UseGlobal();
const {tipo} = view;
const {Latitude,Longitud} = direcciones;
  return (
    <Container>
    <div className="header">
    {header}
    </div>
    <div className="contenido">
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
    <ContenedorObjetoCarrito datos={datos} direcciones={direcciones} 
                             encargar={encargar} recoger={recoger} TipoPedido={tipo}/>
    :
    <MapaCarrito Latitud={Latitude} Longitud={Longitud}/>
    }
    </div>
    <div className="footer">
    {footer}
    </div> 
      
    </Container>
  )
}
const Container = styled.div`
width: 90%;
margin:auto;
display: grid;
height: 6cap;
grid-template: "header" 100px
                "contenido" 600px
                "footer" 100px;
.header{grid-area: header;}
.contenido{
    grid-area: contenido;
    .TituloCarrito{
      text-align: center;
      color: red;
      margin-top: 10px;
    }
    .submenucarrito{
      display: flex;
      gap:20px;
      justify-content: center;
      margin-top:15px;
      position: relative;
      .carritoname.izquierda{
        font-size: 20px;
        font-weight: 800;
        color: black;
        text-decoration-line: underline;
        &:hover{
          cursor: pointer;
        }
      }
      .carritoname.derecha{
        font-size: 20px;
        font-weight: 800;
        color: red;
        &:hover{
          cursor: pointer;
        }
      }
      .carritoname1.izquierda{
        font-size: 20px;
        font-weight: 800;
        color: red;
        &:hover{
          cursor: pointer;
        }
      }
      .carritoname1.derecha{
        font-size: 20px;
        font-weight: 800;
        color: black;
        text-decoration-line: underline;
        &:hover{
          cursor: pointer;
        }
      }
      .iconocontenedor{
        position: absolute;
        right:10px;
        top:10px;
        .whatsappicono{
          width: 50px;
          height: 50px;
         &:hover{
          cursor: pointer;
         }
        }
      }
    }
  
.footer{
    grid-area: footer; 
}
}



`;
export default TempletedUnico
