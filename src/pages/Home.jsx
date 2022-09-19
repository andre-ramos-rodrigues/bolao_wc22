import React from 'react'
import styled from 'styled-components'
import Group from '../components/Group'
import SingleFixture from '../components/SingleFixture'
import data from "../data/groups.json"

const Container = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
`
const Content = styled.div``

const Sidebar = styled.div`
background-color: teal;
width: 100px;
`

const Home = () => {
  
  return (
    <Container>
      <Content>
      <Group group="A" teamA={data.groups.A.Qatar.name} flagA={data.groups.A.Qatar.flag}
      teamB={data.groups.A.Equador.name} flagB={data.groups.A.Equador.flag}
      teamC={data.groups.A.Senegal.name} flagC={data.groups.A.Senegal.flag}
      teamD={data.groups.A.Holanda.name} flagD={data.groups.A.Holanda.flag}
      />
      <Group group="B" teamA={data.groups.B.Inglaterra.name} flagA={data.groups.B.Inglaterra.flag}
      teamB={data.groups.B.Ira.name} flagB={data.groups.B.Ira.flag}
      teamC={data.groups.B.USA.name} flagC={data.groups.B.USA.flag}
      teamD={data.groups.B.Gales.name} flagD={data.groups.B.Gales.flag}
      />
      <Group group="C" teamA={data.groups.C.Argentina.name} flagA={data.groups.C.Argentina.flag}
      teamB={data.groups.C.Arabia.name} flagB={data.groups.C.Arabia.flag}
      teamC={data.groups.C.Mexico.name} flagC={data.groups.C.Mexico.flag}
      teamD={data.groups.C.Polonia.name} flagD={data.groups.C.Polonia.flag}
      />
      <Group group="D" teamA={data.groups.D.Franca.name} flagA={data.groups.D.Franca.flag}
      teamB={data.groups.D.Australia.name} flagB={data.groups.D.Australia.flag}
      teamC={data.groups.D.Dinamarca.name} flagC={data.groups.D.Dinamarca.flag}
      teamD={data.groups.D.Tunisia.name} flagD={data.groups.D.Tunisia.flag}
      />
      <Group group="E" teamA={data.groups.E.Alemanha.name} flagA={data.groups.E.Alemanha.flag}
      teamB={data.groups.E.Espanha.name} flagB={data.groups.E.Espanha.flag}
      teamC={data.groups.E.CostaRica.name} flagC={data.groups.E.CostaRica.flag}
      teamD={data.groups.E.Japao.name} flagD={data.groups.E.Japao.flag}
      />
      <Group group="F" teamA={data.groups.F.Belgica.name} flagA={data.groups.F.Belgica.flag}
      teamB={data.groups.F.Canada.name} flagB={data.groups.F.Canada.flag}
      teamC={data.groups.F.Marrocos.name} flagC={data.groups.F.Marrocos.flag}
      teamD={data.groups.F.Croacia.name} flagD={data.groups.F.Croacia.flag}
      />
      <Group group="G" teamA={data.groups.G.Brasil.name} flagA={data.groups.G.Brasil.flag}
      teamB={data.groups.G.Servia.name} flagB={data.groups.G.Servia.flag}
      teamC={data.groups.G.Suica.name} flagC={data.groups.G.Suica.flag}
      teamD={data.groups.G.Camaroes.name} flagD={data.groups.G.Camaroes.flag}
      />
      <Group group="H" teamA={data.groups.H.Portugal.name} flagA={data.groups.H.Portugal.flag}
      teamB={data.groups.H.Gana.name} flagB={data.groups.H.Gana.flag}
      teamC={data.groups.H.Uruguai.name} flagC={data.groups.H.Uruguai.flag}
      teamD={data.groups.H.Coreia.name} flagD={data.groups.H.Coreia.flag}
      />
      </Content>
      
      
    </Container>
  )
}

export default Home