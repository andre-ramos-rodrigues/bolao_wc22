import React from 'react'
import styled from 'styled-components'
import SingleFixture from './SingleFixture'

const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin-top: 10px;
`
const Wrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
const Name = styled.div`
background-color: #ec058e;
width: 70px;
text-align: center;
border-radius: 20px;
padding: 2px;
`

const Group = ({group, teamA, teamB, flagA, flagB, teamC, teamD, flagC, flagD}) => {
  return (
    <Container>
      <Wrapper>
        <Name>Grupo {group}</Name>
        <SingleFixture teamA={teamA} teamB={teamB} flagA={flagA} flagB={flagB}/>
        <SingleFixture teamA={teamC} teamB={teamD} flagA={flagC} flagB={flagD}/>
        <SingleFixture teamA={teamA} teamB={teamC} flagA={flagA} flagB={flagC}/>
        <SingleFixture teamA={teamD} teamB={teamB} flagA={flagD} flagB={flagB}/>
        <SingleFixture teamA={teamD} teamB={teamA} flagA={flagD} flagB={flagA}/>
        <SingleFixture teamA={teamB} teamB={teamC} flagA={flagB} flagB={flagC}/>
      </Wrapper>
    </Container>
  )
}

export default Group