import styled from 'styled-components';
import {v,HeaderDonna} from "../index"
import { ArrayQuestions } from '../StaticData/ArregloPreguntas';
const Preguntas = () => {
  return (
    <Container>
    <HeaderDonna icono={<v.Atras/>} texto="Preguntas mas frecuentes" ruta="/"/>
    <div className="contenidopreguntas">
    <div className="headerpreguntas">
    <span className='Itempreguntas'>{<v.Pregunta/>}</span>
    <span className='Itempreguntas'>Preguntas frecuentes sobre la aplicacion</span>
    </div>
    <div className="ArraysQuestionsAboutApp">
    {
      ArrayQuestions.map((preguntas)=>{
        return <div className="itemArrayQuestion" key={preguntas.id}>
               <div className="firtsitem">
               <span className='firstItemques'>{preguntas.question}</span>
               </div>
               <div className="seconditem">
               <p className='seconditemnsp'>{preguntas.answer}</p>
               </div>
               </div>
      })
    }
    </div>
    </div>
    </Container>
  )
}
const Container = styled.div`
width: 90%;
margin: auto;
display: flex;
flex-direction: column;
.headerpreguntas{
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  margin:10px auto;
  .Itempreguntas:nth-child(1){
    text-align: center;
    font-size: 25px;
    font-weight: 500;
    color:white;
    background-color: gray;
    border-radius: 50%;
  }
  .Itempreguntas:nth-child(2){
    text-align: center;
    font-size: 25px;
    font-weight: 500;
    color:gray;
    border-radius: 50%;
  }


}
.ArraysQuestionsAboutApp{
  width: 90%;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  gap:50px;
  .itemArrayQuestion{
    display: flex;
    flex-direction: column;
    .firtsitem{
      width: 100%;
      height: 50px;
      background-color: aliceblue;
      color: black;
      display: flex;
      align-items: center;
      .firstItemques{
        font-size: 20px;
        font-weight: bold;
      }
    }
    .seconditem{
      width: 100%;
      height: 100px;
      background-color: gray;
      color: white;
      display: flex;
      align-items: center;
      .seconditemnsp{
        font-size: 18px;
      }
    }

  }

}


`;
export default Preguntas
