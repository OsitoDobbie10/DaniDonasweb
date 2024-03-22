import styled from 'styled-components'
import { useEffect, useRef } from 'react';
import Typed from 'typed.js';
const Texto = ({texto}) => {
  const Typedref = useRef(null);
  useEffect(()=>{
    new Typed(Typedref.current,{
        strings:[`${texto}`],
        startDelay:300,
        typeSpeed:150,
        backDelay:150,
        backSpeed:150,
        smartBackspace:true,
        showCursor:true,
        loop:true
      })
})
  return (
    <Container>
    <h1><span ref={Typedref}></span></h1>
    </Container>
  )
}
const Container = styled.div`
h1{
    margin-top: 85px;
    font-size: 35px;
    text-align: center;
    color:black;
    text-shadow: 0 0 6px yellow;
}
span{
    font-size: 35px;
    text-align: center;
    color:black;
    text-shadow: 0 0 6px yellow;
}

@media screen and (max-width:768px){
   h1{
        margin-top: 15px;
        font-size: 20px;
        text-align: center;
        color:black;
        text-shadow: 0 0 6px yellow;
    }
   span{
        font-size: 20px;
        text-align: center;
        color:white;
        text-shadow: 0 0 6px yellow;
    }
    
}
`;
export default Texto;
