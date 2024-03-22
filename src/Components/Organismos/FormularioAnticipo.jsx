import {UseGlobal,city,colo} from "../../index"
import styled from "styled-components"
const FormularioAnticipo = ({title,funcion}) => {
  return (
    <Container>
     <span className='complete'>{title}</span>
  <div className="contenido">
  <div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      En que colonia dejamos tu pedido?
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      <div className="colonia">
    <span className='coloniadName'>selecciona tu colonia</span>
    <select name="colonia" id="colonia" >
    {
      colo.map((data,index)=>{
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
   <div className="opciones">
   <span className='title1'>No esta tu colonia en la lista?</span>
   <span className='title2'>En caso que no escribela aqui</span>
   <input type="text" name='colonia' className='inputcolonia'/>
   </div>
   <div className="direccion">
   <span className='titledireccion'>Direccion</span>
   <input type="text" name="direccion" className='inputdireccion'/>
   </div>
   <div className="referencia">
   <span className='titlereferencia'>Referencia</span>
   <input type="text" name="referencia" className='inputdireccion'/>
   </div>
   <button className='guardar'>
    Guardar
   </button>
    </Container>
  )
}
const Container = styled.div`
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
export default FormularioAnticipo
