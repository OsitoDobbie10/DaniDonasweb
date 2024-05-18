import styled from "styled-components";
import {v,UseGlobal,EditarTargeta,ViewRestaurantes} from "../../index";
import Cards from "react-credit-cards-2";
import 'react-credit-cards-2/dist/es/styles-compiled.css';
const PaymentForm2 = () => {
  const {ObtenerestadoEditarTargetas,estadoEditarTargetas,FocusestadoEditarTargetas} = UseGlobal();
  const {idUsuario} = ViewRestaurantes();
  const {Numero,Nombre,Vencimiento,CVC,idusuario,focus,id} = estadoEditarTargetas;
  const EditarBaseDatos = async(e)=>{
    e.preventDefault();
    const {Numero,Nombre,Vencimiento,CVC,idusuario,focus,id} = estadoEditarTargetas;
    let p = {
        Numero:Numero,
        Nombre:Nombre,
        Vencimiento:Vencimiento,
        CVC:CVC,
        idusuario:idusuario
    };
    await EditarTargeta(p);
  };
  return (
    <Container>
    <div className="card">
    <div className="card-body">
    <Cards
    number={Numero}
    name={Nombre}
    expiry={Vencimiento}
    cvc={CVC}
    focused={focus}
    />
    </div>
    <form className="formulariotargeta" onSubmit={EditarBaseDatos}>
    <div className="form-group">
    <span className="in1">Número de la tarjeta</span>
    <input type="text"
           className="form-control"
          name="Numero"
          maxLength="16"
          value={Numero}
          onChange={ObtenerestadoEditarTargetas}
          onFocus={FocusestadoEditarTargetas}
          placeholder={Numero}/>
    </div>
    <div className="form-group">
    <label htmlFor="Nombre">Nombre</label>
    <input type="text"
            className="form-control"
            name="Nombre"
            maxLength="30"
            value={Nombre}
            onChange={ObtenerestadoEditarTargetas}
            onFocus={FocusestadoEditarTargetas}
            placeholder="Nombre"/>
    </div>
    <div className="filas-formulario">
    <div className="form-group col-md-6">
    <label htmlFor="expiry">Vencimiento</label>
    <input type="text"
           className="form-control"
           name="Vencimiento"
           value={Vencimiento}
           maxLength="4"
           onFocus={FocusestadoEditarTargetas}
           onChange={ObtenerestadoEditarTargetas}
           placeholder="Expiración"
                            />
    </div>
    <div className="form-group col-md-6">
    <label htmlFor="cvc">CVC</label>
    <input
    type="text"
    className="form-control"
    name="CVC"
    maxLength="4"
    value={CVC}
    onFocus={FocusestadoEditarTargetas}
    onChange={ObtenerestadoEditarTargetas}
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
export default PaymentForm2
