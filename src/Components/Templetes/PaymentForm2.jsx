import styled from "styled-components";
import {v,UseGlobal,EditarTargeta,ViewRestaurantes} from "../../index";
import Cards from "react-credit-cards-2";
import 'react-credit-cards-2/dist/es/styles-compiled.css';
const PaymentForm2 = ({objeto}) => {
  const {state,obtenerformtargeta} = UseGlobal();
  const {idUsuario} = ViewRestaurantes();
  const {number,name,cvc,expiry,focus} = state;
  const EditarBaseDatos = async(e)=>{
    e.preventDefault();
    const {number,name,cvc,expiry,focus} = state;
    let p = {
        Numero:number,
        Nombre:name,
        Vencimiento:expiry,
        CVC:cvc,
        idusuario:idUsuario
    };
    await EditarTargeta(p);
  };
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
    <form className="formulariotargeta" onSubmit={SubirBaseDatos}>
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
const Container = styled.div``;
export default PaymentForm2
