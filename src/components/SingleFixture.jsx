import React from 'react'
import styled from "styled-components"
import { screen, mobile, micro } from '../utils/responsive'

const Container = styled.div`
width: 500px;
${mobile({ width: '300px' })};
background-color: #fffbfc;
padding: 5px;
display: flex;
justify-content: center;
align-items: center;
height: 100px;
border-bottom: 1px solid #62bbc1;
position: relative;
`
const Wrapper = styled.div`

`
const MatchInfo = styled.div`
color: gray;
font-size: 14px;
${mobile({ fontSize: '10px' })};
font-weight: 500;
margin-bottom: 10px;
text-align: center;
`
const TeamsInfo = styled.div`
display: flex;
gap: 18px;
${mobile({ gap: '10px' })};
align-items: center;
width: 450px;
${mobile({ width: '240px' })};
justify-content: space-between;
`
const Team = styled.div`
display: flex;
gap: 10px;
justify-content: center;
align-items: center;
width: 200px;
${mobile({ width: '100px' })};
`
const TeamName = styled.div`
${mobile({ fontSize: '14px' })};
`
const TeamFlag = styled.img`
width: 30px;
height: 30px;
${mobile({ width: '20px', height: '20px' })};
border-radius: 50%;
object-fit: cover;
border: 2px solid #30332e;
`
const Score = styled.div`
background-color: #62bbc1;
width: 20px;
${mobile({ width: '16px' })};
text-align: center;
height: 20px;
`
const Bet = styled.button`
position: absolute;
right: 5px;
top: 5px;
${mobile({ fontSize: '10px' })};
`
const InputA = styled.input`
width: 20px;
${mobile({ width: '16px', height: '16px' })};
text-align: center;
outline: none;
border: none;
background-color: #62bbc1;
height: 20px;
`
const InputB = styled.input`
width: 20px;
${mobile({ width: '16px', height: '16px' })};
text-align: center;
outline: none;
border: none;
background-color: #62bbc1;
height: 20px;
`
const Mid = styled.div`
display: flex;
gap: 10px;
`

const SingleFixture = ({ teamA, teamB, flagA, flagB }) => {
  const [bet, setBet] = React.useState(false)

  const handleSave = () => {
    setBet(!bet)
  }

  return (
    <Container>
      <Wrapper>
        <MatchInfo>20/11 - 13:00 - Al Bayt</MatchInfo>
        <TeamsInfo>
        <Team>
        <TeamFlag src={flagA} alt=""/>
        <TeamName>{teamA}</TeamName>
        </Team>
        <Mid>
          {
          bet ? <InputA /> : <Score>0</Score>
        }
        x
        {
          bet ? <InputB /> : <Score>0</Score>
        }
        </Mid>
        <Team>
        <TeamName>{teamB}</TeamName>
        <TeamFlag src={flagB} alt=""/>
        </Team>
        </TeamsInfo>
      </Wrapper>
      {
        bet ? (<Bet
        onClick={handleSave}
        >Salvar</Bet>) :
        (<Bet
      onClick={() => setBet(!bet)}
      >Apostar</Bet>)
      }
    </Container>
  )
}

export default SingleFixture