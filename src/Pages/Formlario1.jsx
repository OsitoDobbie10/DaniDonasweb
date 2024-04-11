import styled from 'styled-components'
import {UseGlobal,refe,Insertardireccion} from "../index"
import { useNavigate } from 'react-router-dom';
const Formlario1 = ({c,n,valor}) => {
  const {latitud,longitud,get,direccionGet,view} = UseGlobal();
  const {ciudad,colonias,Direccion,Referencia} = get;
  const nav = useNavigate();
  const subirdireccion = async(e)=>{ 
    e.preventDefault();
    const p = {
      idCliente:valor.id,
      ciudad:ciudad,
      colonia:colonias,
      referencia:Referencia,
      Latitude:latitud,
      Longitud: longitud,
      direccion:Direccion,
      tipo:view.tipo
    }; 
    await Insertardireccion(p);
    nav("/");
  }
  return (
  <Container onSubmit={subirdireccion}>
  <span className='complete'>Completar Datos</span>
  <div className="contenido">
  <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      En que ciudad estas?
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      <div className="ciudad">
    <span className='ciudadName'>selecciona tu ciudad</span>
    <select name="ciudad" id="ciudad" value={get.ciudad} onChange={direccionGet}>
    {
      c.map((data,index)=>{
        return <option key={index}>
               {data}
               </option>
      })
    }
    </select>
    </div>
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      Colonia que vives?
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      <div className="colonia">
    <span className='coloniadName'>selecciona tu barrio</span>
    <select name="colonias" id="colonias" value={get.colonia} onChange={direccionGet}>
    {
      n.map((data,index)=>{
        return <option key={index}>
               {data}
               </option>
      })
    }
    </select>
    </div>
      </div>
    </div> 
  </div>
   </div>
   </div>
   <div className="direccion">
   <span className='titledireccion'>Direccion</span>
   <textarea name="Direccion" className='inputdireccion' value={get.Direccion} onChange={direccionGet}></textarea>
   </div>
   <div className="referencia">
   <span className='titlereferencia'>Referencia</span>
    <select name="Referencia" id="Referencia" value={get.Referencia} onChange={direccionGet}>
    {
      refe.map((data,index)=>{
        return <option key={index}>
               {data}
               </option>
      })
    }
    </select>
   </div>
   <input type='submit' className='guardar' value="Continuar"/>
  </Container>
  )
}
const Container = styled.form`
display: flex;
flex-direction: column;
justify-content: center;
.complete{
  color: red;
  font-size: 30px;
  font-weight: 800;
  text-align: center;
}
.contenido{
  width: 90%;
  margin: 10px auto;
  .ciudad{
    width: 50%;
    margin: auto;
    display: flex;
    flex-direction: column;
    gap: 5px;
    .ciudadName{
      color: black;
      text-align: center;
    }
  }

  .colonia{
    width: 50%;
    margin: auto;
    display: flex;
    flex-direction: column;
    gap: 5px;
    .coloniadName{
      color: black;
      text-align: center;
    }
  }

}

.opciones{
  margin-top: 30px;
  display: flex;
  gap: 10px;
  justify-content: center;
  flex-direction: column;
  width: 40%;
  margin: 10px auto;
  
}
.title1{
  color:black;
  font-weight: 600;
  text-align: center;
}

.title2{
  color: black;
  font-weight: 300;
  text-transform: inherit;
  text-align: center;
}
.direccion{
  display: flex;
  gap: 10px;
  justify-content: center;
  flex-direction: column;
  width: 40%;
  margin:auto;
  .titledireccion{
    color:black;
  font-weight: 600;
  text-align: center;
  font-size: 20px;
  }
}

.inputdireccion{
  height: 90px;
}
.referencia{
  display: flex;
  gap: 10px;
  justify-content: center;
  flex-direction: column;
  width: 40%;
  margin:auto;

  .titlereferencia{
    color:black;
  font-weight: 600;
  text-align: center;
  font-size: 20px;
  }
}

.guardar{
  background-color: red;
  color:white;
  display: block;
  margin: 30px auto;
  width: 250px;
  font-size: 20px;
  font-weight: bold;
  border-radius: 15px;
  &:hover{
    opacity: 0.7;
  }
}

`
export default Formlario1
