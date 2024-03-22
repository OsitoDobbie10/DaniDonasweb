import styled from 'styled-components'
import {ItemList} from "../../index";
const ViewRestaurantesList = ({data}) => {
  return (
    <Container>
      {
        data.map((view)=>{
            return <ItemList key={view.id} item={view}/>
        })
      }
    </Container>
  )
}
const Container = styled.div`
width: 100%;
height: 400px;
display: flex;
justify-content: space-around;
gap:10px;

`;
export default ViewRestaurantesList;
