import {v,BotonPedidoEnviar} from "../../index"
import styled from "styled-components"
const FormularioProducto = ({funcion1,funcion2,funcion3,arreglo1,arreglo2,arreglo3,arreglo4,dato1,dato2,dato3,precio}) => {
  return (
    <Container>
    <span className="Opciones">Selecciona tus opciones</span>
    <div className="datos1">
    <span className="Pedido">{dato1}</span>
    <div className="contenedor1">
    {
      arreglo1.map((data)=>{
        return <div key={data.id} className="Cobertura">
               <input type="checkbox" name={data.valor} id={data.id} value={data.name} onChange={funcion1} />
               <span className="valor1">{data.name}</span>
              </div>
      })
    }
    </div>
    </div>
    <div className="datos2">
    <div className="contenedor2">
    <span className="pedido2">{dato2}</span>
    {
      arreglo2.map((data)=>{
        return <div key={data.id} className="bebida">
               <input type="checkbox" name={data.data} id={data.id} value={data.name} onChange={funcion2}/>
               <span className="valor2">{data.name}</span>
               <span className="precio1">L.{data.valor}.00</span>
               </div>
      })
    }
    </div>
    </div>
    <div className="datos3">
    <div className="contenedor3">
    <span className="pedido2">{dato3}</span>
    {
      arreglo3.map((data)=>{
        return <div key={data.id} className="Topping">
               <input type="checkbox" name={data.data} id={data.id} value={data.name} onChange={funcion3}/>
               <span className="valor3">{data.name}</span>
               <span className="precio3">L.{data.valor}.00</span>
               </div>
      })
    }
    </div>
    </div>
    </Container>
  )
}
const Container = styled.form`
display: flex;
flex-direction: column;
margin:1px auto;
.Opciones{
  text-align: center;
  font-size: 25px;
  font-weight: 800;
  text-shadow: 2px 2px 2px white;
  color: gray;
}
.datos1{
  display: flex;
  flex-direction: column;
  justify-content: center;
  .Pedido{
    text-align: center;
    font-weight: 800;
    color: black;
    text-shadow: 2px 2px 2px white;
    font-size: 18px;
  }
  .contenedor1{
    margin: auto;
    width: 400px;
  }
  .Cobertura{
    display: flex;
    justify-content: flex-start;
    gap:15px;
    padding: 10px 10px;
    .valor1{
      font-weight: 900;

    }
    
  }
}
.datos2{
  display: flex;
  flex-direction: column;
  justify-content: center;
  .pedido2{
    text-align: center;
    font-weight: 800;
    font-size: 18px;
    color: black;
    text-shadow: 2px 2px 2px white;
  }
  .contenedor2{
    margin: auto;
    width: 400px;
  }
  .bebida{
    display: flex;
    justify-content: flex-start;
    gap:18px;
    padding: 10px 10px;
    .valor2{
      font-weight: 900;
    }
    .precio1{
      font-weight: 900;
    }
    
  }

}

.datos3{
  display: flex;
  flex-direction: column;
  justify-content: center;
  .pedido2{
    text-align: center;
    font-weight: 800;
    font-size: 18px;
    color: black;
    text-shadow: 2px 2px 2px white;
  }
  .contenedor3{
    margin: auto;
    width: 400px;
  }
  .Topping{
    display: flex;
    justify-content: flex-start;
    gap:18px;
    padding: 10px 10px;
    .valor3{
      font-weight: 900;
    }
    .precio2{
      font-weight: 900;
    }
    
  }

}

`
export default FormularioProducto
