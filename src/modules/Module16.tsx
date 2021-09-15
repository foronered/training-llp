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
  height: 100%;
  display: flex;
  flex-direction: column;

  ${DESKTOP_STYLE}  {
    flex: 0 0 280px;
  }

  ${MOBILE_STYLE} {
    flex: 0 0 104px;
  }
`

const RedBox = styled.div`
  width: 100%;
  flex: 1;
  background-color: red;
  padding: 16px;

  ${MOBILE_STYLE} {
    display: flex;
    justify-content: center;
  }
`

const GreenSquare = styled.div`
  width: 36px;
  height: 36px;
  background-color: green;
  margin-bottom: 16px;
`

const GreenSquareMobile = styled.div`
  width: 36px;
  height: 36px;
  background-color: green;
  margin-bottom: 16px;

  ${DESKTOP_STYLE} {
    display: none;
  }
`

const GreenBox = styled.div`
  width: 100%;
  height: 36px;
  display: flex;
  background-color: green;

  ${MOBILE_STYLE} {
    display: none;
  }
`

const OrangeBox = styled.div`
  width: 100%;
  flex: 0 0 128px;
  display: flex;
  flex-wrap: wrap;
  background-color: orange;
  padding: 16px;

  ${DESKTOP_STYLE}  {
    justify-content: space-between;
  }

  ${MOBILE_STYLE} {
    justify-content: center;
  }
`

const RedSquareDesktop = styled.div`
  width: 32px;
  height: 32px;
  background-color: red;

  ${MOBILE_STYLE} {
    display: none;
  }
`

const RedSquaresDesktop = 3

const RedSquare = styled.div`
  width: 32px;
  height: 32px;
  background-color: red;

  ${DESKTOP_STYLE}  {
    margin: 0px;
  }

  ${MOBILE_STYLE} {
    margin: 16px;
  }
`

// Contentview Bar

const ContentViewBar = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
`

const OrangeBar = styled.div`
  display: flex;
  background-color: orange;
  padding: 8px;

  ${DESKTOP_STYLE}  {
    align-items: center;
    flex-wrap: nowrap;
  }

  ${MOBILE_STYLE} {
    flex-wrap: wrap;
  }
`

const RedNav = styled.div`
  width: 128px;
  height: 32px;
  display: flex;
  background-color: red;

  ${DESKTOP_STYLE}  {
    margin-left: 16px;
    margin-right: auto;
  }

  ${MOBILE_STYLE} {
    margin: 16px;
  }
`

const BlueNav = styled.div`
  width: 256px;
  height: 40px;
  display: flex;
  background-color: lightblue;
  padding: 8px;
  align-items: center;
  div:nth-child(2) {
    margin-right: auto;
  }

  ${DESKTOP_STYLE}  {
    margin: 0px;
  }

  ${MOBILE_STYLE} {
    margin: 16px;
  }
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
  width: 100%;
  display: flex;
  overflow: hidden;

  ${DESKTOP_STYLE}  {
    padding: 32px;
  }

  ${MOBILE_STYLE} {
    padding: 0px;
  }
`

const LeftContent = styled.div`
  background-color: lightblue;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;

  ${DESKTOP_STYLE}  {
    flex: 2;
    height: 100%;
    margin-right: 32px;
    padding: 16px;
  }

  ${MOBILE_STYLE} {
    flex: 1;
    height: 100%;
    margin-right: 0px;
    padding: 32px;
  }
`

const GreenContent = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: green;
  margin-bottom: 32px;
  padding: 16px;

  ${DESKTOP_STYLE}  {
    flex-direction: row;
  }

  ${MOBILE_STYLE} {
    flex-direction: column;
  }
`

const GreenContentCount = 16

const RightContent = styled.div`
  flex: 1;
  width: 100%;
  background-color: lightblue;
  overflow-y: scroll;
  padding: 16px;
  display: flex;
  flex-direction: column;

  ${MOBILE_STYLE} {
    display: none;
  }
`

const GreenContentRight = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  background-color: green;
  margin-bottom: 16px;
`

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
            <GreenSquareMobile />
            {[...Array(RedSquaresDesktop)].map((_, i) => (
              <RedSquareDesktop key={i} />
            ))}
          </OrangeBox>
        </NavBar>

        <ContentViewBar>
          <OrangeBar>
            <RedSquare />
            <RedNav />
            <BlueNav>
              <RedBar />
              <RedBar />
              <RedBar />
            </BlueNav>
          </OrangeBar>
          <ContentView>
            <LeftContent>
              {[...Array(GreenContentCount)].map((_, i) => (
                <GreenContent key={i}>
                  <RedSquare />
                  <BlueNav />
                </GreenContent>
              ))}
            </LeftContent>
            <RightContent>
              {[...Array(GreenContentCount)].map((_, i) => (
                <GreenContentRight />
              ))}
            </RightContent>
          </ContentView>
        </ContentViewBar>
      </Container>
    </ModuleWrapper>
  )
}
