import styled from "styled-components"
const ModalEfectivo = ({cerrar,animacion,GetFunction,Visualizar,FunctionText,FuncionEfectivo}) => {
  return (
    <Container>
    <div className={`formulario ${animacion ? 'animar': 'cerrar'}`}>
    <div className="Continuar1">
    <span>Continuar</span>
    </div>
    <div className="ContenidoModalEfectivo">
    <input type="checkbox" value="InputRTN1" id="InputRTN1" className="checkInputRTN1" name="InputRTN1" onChange={GetFunction}/>
    <span className="SpanInputRTN1">¿Nesecitaras cambio en Lempiras?</span>
    </div>
    <div className="SValueRTN1">
    {
        Visualizar ? <div className="ContainerInputEfec1">
                     <input type="text" name="InputRTN3" 
                            id="InputTextE" 
                            onChange={FunctionText}
                            className="I2"
                            placeholder="Indicaciones sobre el pago"/>      
                     </div> : 
                     <></>
    }
    </div>
    <div className="footerEfectivo">
    <span className="IconoEfectivo" onClick={cerrar}>Cancelar</span>
    <span className="IconoEfectivo" onClick={FuncionEfectivo}>Continuar</span>
    </div>
    </div>
    </Container>
  )
}
const Container = styled.div`
position: absolute;
background-color: rgb(0 0 0 / 0.92);
top: 0;
left: 0;
right: 0;
bottom: 0;
color: white;
overflow: hidden;
z-index: 1000;
.formulario {
    max-width: 32rem;
    width: 32rem;
    transition-property: all;
    transition-duration: 300ms;
    transition-timing-function: ease-in;
    opacity: 0;
    left: 30%;
    top:25%;
    position: relative;
    background-color: white;
    border-radius: 15px;
    height: 420px;
    color:black;
    border-radius:12px;
    display: flex;
    flex-direction: column;
    gap:10px;
    .Continuar1{
    display: flex;
    justify-content: center;
    span{
        text-align: center;
        font-weight: 800;
        font-size: 30px;
        color:red;
    }
    }
    .ContenidoModalEfectivo{
        display: flex;
        justify-content: center;
        gap:10px;
        margin-top: 10px;
   .checkInputRTN1{
       padding: 10px 10px;
       width: 20px;
       border:1px solid black;}
  .SpanInputRTN1{
       font-weight: 800;
       font-size: 20px;}
    }
    .SValueRTN1{
     display: flex;
     justify-content: center;
     margin:10px auto;
     .ContainerInputEfec1{
        width: 100%;
        height: 90px;
        display: flex;
        gap:10px;
        align-items: center;
        justify-content: center;
        .I2{
            display: block;
            width: 400px;
            height: 50px;
            padding: 10px 10px;
            border: 1px solid black;
        }
     }
    }

    .footerEfectivo{
        width: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        height: 100px;
        position: absolute;
        bottom: 0;
        .IconoEfectivo{
         font-size: 20px;
         font-weight: 700;
         &:hover{
            color:red;
            cursor: pointer;
         }
        }
    }

}
  .formulario.animar {
    position: relative;
    opacity: 1;
    left: 34%;
    top:25%;
    width: 32rem;
    height: 300px;
}
`;
export default ModalEfectivo
