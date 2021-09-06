import React from 'react'
import styled from 'styled-components'
import { ModuleWrapper } from './common'

const Container = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  background-color: blue;
`

// Navbar

const NavBar = styled.div`
  flex: 0 0 280px;
  height: 100%;
  display: flex;
  flex-direction: column;
`

const PinkBox = styled.div`
  width: 100%;
  height: 64px;
  display: flex;
  background-color: pink;
  align-items: center;
  justify-content: space-between;
  padding: 8px;
`

const BlueSquare = styled.div`
  width: 36px;
  height: 36px;
  display: flex;
  background-color: lightblue;
`

const BlueBox = styled.div`
  width: 128px;
  height: 36px;
  display: flex;
  background-color: lightblue;
`

const RedBox = styled.div`
  width: 100%;
  flex: 1;
  background-color: red;
  overflow-y: scroll;
  padding: 8px;
`

const OrangeBox = styled.div`
  width: 100%;
  height: 64px;
  display: flex;
  background-color: orange;
  align-items: center;
  justify-content: space-between;
  padding: 8px;
`

const GreenBox = styled.div`
  flex: 1;
  height: 64px;
  background-color: green;
  margin-bottom: 8px;
`

const GreenBoxes = 18

// Contentview

const ContentViewBar = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
`

const OrangeBar = styled.div`
  width: 100%;
  height: 64px;
  display: flex;
  background-color: orange;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
`

const RedNav = styled.div`
  width: 128px;
  height: 24px;
  display: flex;
  background-color: red;
`

const BlueNav = styled.div`
  width: 256px;
  height: 40px;
  display: flex;
  background-color: lightblue;
  padding: 8px;
  justify-content: space-evenly;
`

const RedSquare = styled.div`
  width: 32px;
  height: 24px;
  background-color: red;
  margin-right: 8px;
`
const RedSquares = 4

const ContentView = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  overflow-y: scroll;
`

const BlueSquareContent = styled.div`
  width: 256px;
  height: 192px;
  background-color: lightblue;
  margin: 24px;
`
const BlueSquares = 36

export const Module15 = () => {
  return (
    <ModuleWrapper>
      <Container>
        <NavBar>
          <PinkBox>
            <BlueSquare />
            <BlueSquare />
          </PinkBox>
          <RedBox>
            {[...Array(GreenBoxes)].map((_, i) => (
              <GreenBox key={i} />
            ))}
          </RedBox>
          <OrangeBox>
            <BlueSquare />
            <BlueBox />
          </OrangeBox>
        </NavBar>
        <ContentViewBar>
          <OrangeBar>
            <RedNav />
            <BlueNav>
              {[...Array(RedSquares)].map((_, i) => (
                <RedSquare key={i} />
              ))}
            </BlueNav>
          </OrangeBar>
          <ContentView>
            {[...Array(BlueSquares)].map((_, i) => (
              <BlueSquareContent key={i} />
            ))}
          </ContentView>
        </ContentViewBar>
      </Container>
    </ModuleWrapper>
  )
}
