import React from 'react'
import styled from 'styled-components'
import { MOBILE_BREAKPOINT } from '../constants'
import { ModuleWrapper } from './common'

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  background-color: blue;
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
  padding: 16px;
  gap: 8px;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  background-color: red;
`
const BlueBox = styled.div`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  padding: 16px;
  gap: 16px;
  overflow-y: auto;
  background-color: blue;
`
const PinkHeader = styled.div`
  width: 100%;
  height: 80px;
  padding: 16px;
  display: flex;
  justify-content: space-between;
  background-color: pink;
`
const OrangeHeader = styled.div`
  width: 100%;
  height: 80px;
  padding: 16px;
  display: flex;
  justify-content: space-between;
  background-color: orange;
`
const YellowFooter = styled.div`
  width: 100%;
  height: 80px;
  padding: 16px;
  display: flex;
  gap: 16px;
  background-color: yellow;
`
const GreenBox = styled.div`
  flex: 0 0 9px;
  width: 100%;
  padding: 16px;
  gap: 16px;
  display: flex;
  justify-content: center;
  background-color: green;
`
const BlueBigSquare = styled.div`
  height: 180px;
  width: 40%;
  gap: 16px;
  background-color: #357afb;
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
  width: 400px;
  gap: 8px;
  padding: 8px;
  display: flex;
  flex-wrap: wrap;
  background-color: blue;
`
const RedRectangle = styled.div`
  height: 100%;
  width: 100px;
  background-color: red;
`
const RedSquare = styled.div`
  flex: 1;
  height: 100%;
  background-color: red;
`

const YellowBox = styled.div`
  height: 100%;
  width: 60px;
  background-color: yellow;
`

export const Module25 = () => {
  return (
    <ModuleWrapper>
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
              <RedSquare />
              <RedSquare />
              <RedSquare />
              <RedSquare />
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
    </ModuleWrapper>
  )
}
