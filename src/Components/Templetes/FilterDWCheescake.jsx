import styled from "styled-components";
import {UseGlobal} from "../../index"
const FilterDWCheescake = ({data,abrir,filter}) => {
    const {estadoDW,setEstadoDW} = UseGlobal();
    const obtener = (id,nombre)=>{
        const newfilter = data.find((data)=>data.id === id);
        const {name} = newfilter;
        setEstadoDW({...estadoDW,name:name});
        filter(nombre)
      }
  return (
    <Container>
    <div className="center">
    {
       data.map((element) => {
       return <button 
              onClick={()=>obtener(element.id,element.name)}
              key={element.id}
              className="verdadero"
              >{element.name}</button>
              
       })
   }
    </div>
   </Container>
  )
}
const Container = styled.div`
width: 100%;
height: 100%;
display: flex;
.center{
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  .verdadero{
    background-color: red;
    color: white;
    font-size: 10px;
    font-weight: bold;
    border-radius: 20px;
    padding: 10px 20px;
    &:hover{
        color: yellow;
        opacity: 0.7;
    }
}
}

`
export default FilterDWCheescake
