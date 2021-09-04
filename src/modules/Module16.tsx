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

const RedBox = styled.div`
  width: 100%;
  flex: 1;
  background-color: red;
  padding: 16px;
`

const GreenSquare = styled.div`
  width: 36px;
  height: 36px;
  background-color: green;
  margin-bottom: 16px;
`

const GreenBox = styled.div`
  width: 100%;
  height: 36px;
  display: flex;
  background-color: green;
`

const OrangeBox = styled.div`
  width: 100%;
  height: 128px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  background-color: orange;
  padding: 16px;
`

const RedSquare = styled.div`
  width: 32px;
  height: 32px;
  background-color: red;
`
const RedSquares = 3;

// Contentview

const ContentViewBar = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
`

const BarLeft = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

const BarRight = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

const OrangeBar = styled.div`
  width: 100%;
  height: 64px;
  display: flex;
  background-color: orange;
  padding: 8px;
`

const RedNav = styled.div`
  width: 128px;
  height: 32px;
  display: flex;
  background-color: red;
  margin-left: 16px;
`

const BlueNav = styled.div`
  width: 256px;
  height: 40px;
  display: flex;
  background-color: lightblue;
  padding: 8px;
`

const BlueLeft = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

const BlueRight = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

const RedBar = styled.div`
  width: 32px;
  height: 24px;
  background-color: red;
  margin: 8px;
`

// Contentview

const ContentView = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  padding: 32px;
`

const LeftContent = styled.div`
  flex: 2;
  height: 100%;
  background-color: lightblue;
  overflow-y: scroll;
  margin-right: 32px;
  padding: 16px;
`

const GreenContent = styled.div`
  width: 100%;
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: green;
  margin-bottom: 32px;
  padding: 16px;
`

const GreenContentCount = 16;

const RightContent = styled.div`
  flex: 1;
  height: 100%;
  background-color: lightblue;
  overflow-y: scroll;
  padding: 16px;
`

const GreenContentRight = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  background-color: green;
  margin-bottom: 16px;
`

// how to align stuff in navbar without helper bars? barleft, barright


export const Module16 = () => {
  return (
    <ModuleWrapper>
      <Container>
        <NavBar>
          <RedBox>
            <GreenSquare />
            <GreenBox />
          </RedBox>
          <OrangeBox>
            <GreenBox />
            {[...Array(RedSquares)].map((_, i) => <RedSquare key={i} />)}
          </OrangeBox>
        </NavBar>

          <ContentViewBar>
            <OrangeBar>

              <BarLeft>
                <RedSquare />
                <RedNav />
              </BarLeft>
              <BarRight>
                <BlueNav>
                  <BlueLeft>
                    <RedBar />
                    <RedBar />
                  </BlueLeft>
                  <BlueRight>
                    <RedBar />
                  </BlueRight>
                </BlueNav>
              </BarRight>

            </OrangeBar>
            <ContentView>
              <LeftContent>
                {[...Array(GreenContentCount)].map((_, i) => <GreenContent key={i}> <RedSquare /> <BlueNav /> </GreenContent>)}
              </LeftContent>
              <RightContent>
                {[...Array(GreenContentCount)].map((_, i) => <GreenContentRight />)}
              </RightContent>

            </ContentView>
          </ContentViewBar>
      </Container>
    </ModuleWrapper>
  )
}
