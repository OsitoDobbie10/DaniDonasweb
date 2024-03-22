import styled from "styled-components"
const SwipeLefthDataSimple = ({funcion}) => ({
    content: (
      <Container>
        <span>Editar</span>
      </Container>
    ),
    action: () => funcion()
  });
  const Container = styled.div`
  background-color: green;
  color: white;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 4px;
  `;
export default SwipeLefthDataSimple;
