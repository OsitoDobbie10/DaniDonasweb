import {UseGlobal,SpinnerIntro,Templeted} from "../index"
import Swal from "sweetalert2";
import styled from "styled-components";
const Home = () => {
  const {openspinnerloading,
         setOpenspinnerloading} = UseGlobal();
  setTimeout(()=>{setOpenspinnerloading(false);},3500)
  //if (openspinnerloading) return <SpinnerIntro/>;
  return (
    <Container>
     <Templeted/>
    </Container>
  )
}
const Container = styled.main`
height:100vh;`;
export default Home;
