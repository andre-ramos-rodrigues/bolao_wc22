import React from 'react'
import styled from "styled-components"

const Container = styled.div`
width: 100wh;
background-color: #010400;
color: #fffbfc;
min-height: 120px;
display: flex;
justify-content: center;
align-items: center;
border-bottom: 10px solid #30332e;
`
const Wrapper = styled.div`
margin: 25px 500px;
width: 100%;
height: 100%;
display: flex;
`
const Left = styled.div`
flex: 1;
`
const Logo = styled.img`
width: 75px;
height: 75px;
border-radius: 50%;
`
const Right = styled.div`
flex: 3;
display: flex;
`
const Items = styled.div`
display: flex;
flex-direction: row;
width: 100%;
justify-content: space-around;
align-items: center;
`
const Item = styled.div`
padding: 7px;
cursor: pointer;

&:hover{
  background-color: #30332e;
  border-radius: 30px;
  
}
`

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
         <Logo src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmxx_IEHufCgYdbQR-W3Tpz3rmsSis7r5gBP9jXI3RwstIRwi7bgDYR8l7OvgsXf8a4hg&usqp=CAU" alt=""/>
        </Left>
        <Right>
        <Items>
        <Item>Home</Item>
        <Item>Apostar</Item>
        <Item>Regulamento</Item>
        <Item>
          Login
        </Item>
        </Items>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar