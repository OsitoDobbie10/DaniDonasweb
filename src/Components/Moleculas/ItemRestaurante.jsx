import React from 'react'
import styled from 'styled-components'
const ItemRestaurante = ({item}) => {
    const {imagen} = item;
  return (
    <Container>
    <img src={imagen} className='imagen' alt="View"/>
    </Container>
  )
}
const Container = styled.div`
width: 100%;
height: 400px;
.imagen{
    width:50%;
    height: 100%;
    border-radius: 15px;
    display: block;
    margin: 0 auto;
    
}
`
export default ItemRestaurante;
