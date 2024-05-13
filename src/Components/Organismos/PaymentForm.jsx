import {v,UseGlobal,InsertaTargeta} from "../../index"
import styled from "styled-components";
import Cards from "react-credit-cards-2";
import 'react-credit-cards-2/dist/es/styles-compiled.css';

const PaymentForm = () => {
  const {state,obtenerformtargeta,handlefocusChange} = UseGlobal();
  const {number,name,cvc,expiry,focus} = state;
  const dataserver = async(p)=>{
    await InsertaTargeta(process)
  }
  const SubirBaseDatos = (e)=>{
    e.preventDefault();
    let p = {
        Numero:number,
        
    }
  }
  return (
    <Container>
    <div className="card">
    <div className="card-body">
    <Cards
    number={number}
    name={name}
    expiry={expiry}
    cvc={cvc}
    focused={focus}
    />
    </div>
    <form className="formulariotargeta">
    <div className="form-group">
    <span className="in1">Número de la tarjeta</span>
    <input type="text"
           className="form-control"
          name="number"
          maxLength="16"
          onChange={obtenerformtargeta}
          onFocus={handlefocusChange}
          placeholder="Número de tarjeta"/>

    </div>
    <div className="form-group">
    <label htmlFor="Nombre">Nombre</label>
    <input type="text"
            className="form-control"
            name="name"
            maxLength="30"
            onChange={obtenerformtargeta}
            onFocus={handlefocusChange}
            placeholder="Nombre"/>
    </div>
    <div className="filas-formulario">
    <div className="form-group col-md-6">
    <label htmlFor="expiry">Vencimiento</label>
    <input type="text"
           className="form-control"
           name="expiry"
           maxLength="4"
           onFocus={handlefocusChange}
           onChange={obtenerformtargeta}
           placeholder="Expiración"
                            />
    </div>
    <div className="form-group col-md-6">
    <label htmlFor="cvc">CVC</label>
    <input
    type="text"
    className="form-control"
    name="cvc"
    maxLength="4"
    onFocus={handlefocusChange}
    onChange={obtenerformtargeta}
    placeholder="CVC"/>
    </div>
    </div>
    <button type="submit"
            className="btn btn-success btn-block btn-lg mt-1">Pagar</button>
    </form>
    </div>
    </Container>
  )
}
const Container = styled.div`
display: inline-block;
border-radius: 10px;
box-shadow: 0 0 10px #dadada;
.card{
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    text-align: center;
 .card-body{
    margin:auto;
 }
 .formulariotargeta{
    display: flex;
    flex-direction: column;
    gap:5px;
    .in1{
        text-align: center;
    }
    .filas-formulario{
        display: flex;
    }
 }
}
`;
export default PaymentForm
