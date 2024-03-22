import React from 'react'
import styled from 'styled-components'
const SwipeRightDataSimple = ({funcion}) =>  ({
    content: (
      <Container>
        <span>Borrar</span>
      </Container>
    ),
    action: () => funcion()
  });
const Container = styled.div`
background-color: red;
color: black;
height: 100%;
width: 100%;
display: flex;
align-items: center;
padding: 4px;
`;
export default SwipeRightDataSimple;
