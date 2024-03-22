import styled from 'styled-components';
import {v} from "../../index"
const FormularioCheescake = ({funcion1,funcion2,arreglo1,datos1}) => {
  return (
    <Container>
     <span className="Opciones">Selecciona tus opciones</span>
    <div className="datoschess">
    <span className="Pedido1">{datos1}</span>
    <div className="contenedorchees">
    {
      arreglo1.map((data)=>{
        return <div key={data.id} className="Coberturacake">
               <input type="checkbox" name={data.value} id={data.id} value={data.name}/>
               <span className="valor1cake">{data.name}</span>
               <span className="precio3cake">L.{data.valor}.00</span>
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
.datoschess{
  display: flex;
  flex-direction: column;
  justify-content: center;
  .Pedido1{
    text-align: center;
    font-weight: 800;
    color: black;
    text-shadow: 2px 2px 2px white;
    font-size: 18px;
  }
  .contenedorchees{
    margin: auto;
    width: 400px;
  }
  .Coberturacake{
    display: flex;
    justify-content: flex-start;
    gap:15px;
    padding: 10px 10px;
    .valor1cake{
      font-weight: 900;
    }
    .precio3cake{
        font-weight: 900;
    }
    
  }
}
`;
export default FormularioCheescake
