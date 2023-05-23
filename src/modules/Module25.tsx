import React from 'react'
import styled from 'styled-components'
import { DESKTOP_STYLE, MOBILE_BREAKPOINT, MOBILE_STYLE } from '../constants'
import { ModuleWrapper } from './common'

const BigContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: blue;
  display: flex;
  justify-content: center;
`
const Container = styled.div`
  height: 100%;
  display: flex;
  background-color: blue;
  ${DESKTOP_STYLE} {
    width: 100%;
  }
  ${MOBILE_STYLE} {
    width: 80%;
  }
`
const LeftContainer = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #ff00ae;
`
const RightContainer = styled.div`
  flex: 2;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #4aaf44;
`

const RedBox = styled.div`
  flex: 1;
  width: 100%;
  gap: 16px;
  display: flex;
  overflow-y: auto;
  flex-wrap: wrap;
  overflow-y: auto;
  background-color: red;
  ${DESKTOP_STYLE} {
    flex-direction: column;
    padding: 16px;
  }
  ${MOBILE_STYLE} {
    padding: 32px;
  }
`
const BlueBox = styled.div`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  padding: 16px;
  gap: 16px;
  overflow-y: auto;
  background-color: blue;
  ${DESKTOP_STYLE} {
    justify-content: flex-start;
  }
  ${MOBILE_STYLE} {
    justify-content: center;
  }
`
const PinkHeader = styled.div`
  width: 100%;
  height: 80px;
  padding: 16px;
  gap: 32px;
  display: flex;
  background-color: pink;
  ${DESKTOP_STYLE} {
    height: 80px;
    justify-content: space-between;
  }
  ${MOBILE_STYLE} {
    height: 150px;
    flex-wrap: wrap;
    justify-content: center;
  }
`
const OrangeHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color: orange;
  ${DESKTOP_STYLE} {
    height: 80px;
    padding: 16px;
  }
  ${MOBILE_STYLE} {
    height: 150px;
    padding: 32px;
  }
`
const YellowFooter = styled.div`
  width: 100%;
  padding: 16px;
  display: flex;
  gap: 16px;
  background-color: yellow;
  ${DESKTOP_STYLE} {
    height: 80px;
    justify-content: space-between;
  }
  ${MOBILE_STYLE} {
    height: 150px;
    flex-wrap: wrap;
    justify-content: center;
  }
`
const GreenBox = styled.div`
  padding: 16px;
  display: flex;
  justify-content: center;
  background-color: green;
  ${DESKTOP_STYLE} {
    flex: 0 0 9px;
    width: 100%;
  }
  ${MOBILE_STYLE} {
    aspect-ratio: 1;
    width: 100%;
  }
`
const BlueBigSquare = styled.div`
  height: 180px;
  gap: 16px;
  background-color: #357afb;
  ${DESKTOP_STYLE} {
    width: 40%;
  }
  ${MOBILE_STYLE} {
    width: 80%;
  }
`
const BlueSquare = styled.div`
  height: 100%;
  aspect-ratio: 1;
  background-color: blue;
`
const BlueRectangle = styled.div`
  height: 100%;
  width: 100%;
  background-color: blue;
`
const BlueRectangleRight = styled.div`
  height: 100%;
  display: flex;
  background-color: blue;
  ${DESKTOP_STYLE} {
    width: 400px;
    gap: 8px;
    padding: 8px;
  }
  ${MOBILE_STYLE} {
    width: 100px;
    padding: 8px 16px;
  }
`
const RedRectangle = styled.div`
  height: 100%;
  width: 150px;
  background-color: red;
`
const RedSquare = styled.div`
  flex: 1;
  height: 100%;
  background-color: red;
`
const RedSquare2 = styled.div`
  background-color: red;
  ${DESKTOP_STYLE} {
    flex: 1;
    height: 100%;
  }
  ${MOBILE_STYLE} {
    width: 0%;
    height: 100%;
  }
`

const YellowBox = styled.div`
  height: 100%;
  width: 60px;
  background-color: yellow;
`

export const Module25 = () => {
  return (
    <ModuleWrapper>
      <BigContainer>
        <Container>
          <LeftContainer>
            <PinkHeader>
              <BlueSquare />
              <BlueSquare />
            </PinkHeader>
            <RedBox>
              <GreenBox />
              <GreenBox />
              <GreenBox />
              <GreenBox />
              <GreenBox />
              <GreenBox />
            </RedBox>
            <YellowFooter>
              <BlueSquare />
              <BlueRectangle />
            </YellowFooter>
          </LeftContainer>
          <RightContainer>
            <OrangeHeader>
              <RedRectangle />
              <BlueRectangleRight>
                <RedSquare2 />
                <RedSquare2 />
                <RedSquare />
                <RedSquare2 />
              </BlueRectangleRight>
            </OrangeHeader>
            <BlueBox>
              <BlueBigSquare />
              <BlueBigSquare />
              <BlueBigSquare />
              <BlueBigSquare />
              <BlueBigSquare />
              <BlueBigSquare />
              <BlueBigSquare />
              <BlueBigSquare />
            </BlueBox>
          </RightContainer>
        </Container>
      </BigContainer>
    </ModuleWrapper>
  )
}
