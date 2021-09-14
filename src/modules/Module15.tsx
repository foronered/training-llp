import React from 'react'
import styled from 'styled-components'
import { DESKTOP_STYLE, MOBILE_STYLE } from '../constants'
import { ModuleWrapper } from './common'

const Container = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  background-color: blue;
`

// Navbar

const NavBar = styled.div`
  display: flex;
  flex-direction: column;

  ${DESKTOP_STYLE}  {
    flex: 0 0 280px;
    height: 100%;
  }

  ${MOBILE_STYLE}  {
    flex: 0 0 104px;
    height: 100%;
  }
`

const PinkBox = styled.div`
  width: 100%;
  height: 64px;
  display: flex;
  background-color: pink;
  align-items: center;
  padding: 8px;

  ${DESKTOP_STYLE}  {
    justify-content: space-between;
  }

  ${MOBILE_STYLE}  {
    justify-content: center;
  }
`

const BlueSquare = styled.div`
  width: 36px;
  height: 36px;
  display: flex;
  background-color: lightblue;
`

const BlueSquareDesktop = styled.div`
  width: 36px;
  height: 36px;
  display: flex;
  background-color: lightblue;

  ${MOBILE_STYLE}  {
    display: none;
  }
`

const BlueBox = styled.div`
  width: 128px;
  height: 36px;
  display: flex;
  background-color: lightblue;

  ${MOBILE_STYLE}  {
    display: none;
  }
`

const RedBox = styled.div`
  width: 100%;
  flex: 1;
  background-color: red;
  overflow-y: scroll;
  padding: 8px;
  flex-wrap: wrap;

  ${MOBILE_STYLE}  {
    display: flex;
    justify-content: center;
  }
`

const OrangeBox = styled.div`
  width: 100%;
  height: 64px;
  display: flex;
  background-color: orange;
  align-items: center;
  padding: 8px;

  ${DESKTOP_STYLE}  {
    justify-content: space-between;
  }

  ${MOBILE_STYLE}  {
    justify-content: center;
  }
`

const GreenBox = styled.div`
  background-color: green;
  margin-bottom: 8px;
  display: flex;

  ${DESKTOP_STYLE}  {
    flex: 1;
    height: 64px;
  }

  ${MOBILE_STYLE}  {
    width: 36px;
    height: 36px;
    margin: 16px;
  }
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
  display: flex;
  background-color: lightblue;
  padding: 8px;

  ${DESKTOP_STYLE}  {
    width: 256px;
    height: 40px;
    justify-content: space-evenly;
  }

  ${MOBILE_STYLE}  {
    width: 60px;
    height: 40px;
    justify-content: center;
  }
`

const RedSquare = styled.div`
  width: 32px;
  height: 24px;
  background-color: red;

  ${DESKTOP_STYLE}  {
    margin-right: 8px;
  }

  ${MOBILE_STYLE}  {
    margin: 0px;
  }
`

const RedSquareDesktop = styled.div`
  width: 32px;
  height: 24px;
  background-color: red;
  margin-right: 8px;

  ${MOBILE_STYLE}  {
    display: none;
  }
`

const ContentView = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  overflow-y: scroll;

  ${MOBILE_STYLE}  {
    justify-content: center;
  }
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
            <BlueSquareDesktop />
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
              <RedSquare />
              <RedSquareDesktop />
              <RedSquareDesktop />
              <RedSquareDesktop />
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
