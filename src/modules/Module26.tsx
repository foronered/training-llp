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
  flex: 2;
  width: 100%;
  padding: 16px;
  gap: 16px;
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
const RedButton = styled.div`
  flex: 1;
  display: flex;
  overflow-y: auto;
  background-color: red;
`
const OrangeHeader = styled.div`
  width: 100%;
  height: 80px;
  padding: 16px;
  gap: 16px;
  display: flex;
  background-color: orange;
`
const OrangeFooter = styled.div`
  flex: 1;
  width: 100%;
  padding: 16px;
  gap: 16px;
  display: flex;
  flex-direction: column;
  background-color: orange;
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
  flex: 2;
  height: 100%;
  padding: 16px;
  gap: 16px;
  overflow-y: auto;
  display: flex;
  flex-wrap: wrap;
  background-color: #357afb;
`
const BlueBigSquare2 = styled.div`
  flex: 1;
  height: 100%;
  padding: 16px;
  gap: 16px;
  overflow-y: auto;
  display: flex;
  flex-wrap: wrap;
  background-color: #357afb;
`
const GreenSquare = styled.div`
  height: 60px;
  width: 60px;
  background-color: green;
`
const GreenRectangle = styled.div`
  height: 60px;
  width: 100%;
  background-color: green;
`
const EmptyRectangle = styled.div`
  flex: 1;
  width: 100%;
  justify-content: space-between;
  display: flex;
  gap: 16px;
`

const BlueRectangleRight = styled.div`
  height: 100%;
  width: 400px;
  gap: 8px;
  padding: 8px;
  margin-left: auto;
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
  height: 100%;
  width: 90px;
  background-color: red;
`
const RedSquare2 = styled.div`
  height: 100%;
  width: 90px;
  margin-left: auto;
  background-color: red;
`

const YellowBox = styled.div`
  height: 100%;
  width: 60px;
  background-color: yellow;
`
const GreenBox2 = styled.div`
  height: 60px;
  width: 100%;
  background-color: green;
`
const GreenBox3 = styled.div`
  height: 100px;
  width: 100%;
  padding: 16px;
  gap: 16px;
  display: flex;
  background-color: green;
`
const RedSquare1 = styled.div`
  height: 100%;
  aspect-ratio: 1;
  background-color: red;
`
const BlueRectangle1 = styled.div`
  height: 100%;
  width: 100%;
  background-color: blue;
`

export const Module26 = () => {
  return (
    <ModuleWrapper>
      <Container>
        <LeftContainer>
          <RedBox>
            <GreenSquare />
            <GreenBox />
          </RedBox>
          <OrangeFooter>
            <GreenRectangle />
            <EmptyRectangle>
              <RedButton />
              <RedButton />
              <RedButton />
            </EmptyRectangle>
          </OrangeFooter>
        </LeftContainer>
        <RightContainer>
          <OrangeHeader>
            <RedSquare1 />
            <RedRectangle />
            <BlueRectangleRight>
              <RedSquare />
              <RedSquare />
              <RedSquare2 />
            </BlueRectangleRight>
          </OrangeHeader>
          <BlueBox>
            <BlueBigSquare>
              <GreenBox3>
                <RedSquare1 />
                <BlueRectangle1 />
              </GreenBox3>
              <GreenBox3>
                <RedSquare1 />
                <BlueRectangle1 />
              </GreenBox3>
              <GreenBox3>
                <RedSquare1 />
                <BlueRectangle1 />
              </GreenBox3>
              <GreenBox3>
                <RedSquare1 />
                <BlueRectangle1 />
              </GreenBox3>
              <GreenBox3>
                <RedSquare1 />
                <BlueRectangle1 />
              </GreenBox3>
              <GreenBox3>
                <RedSquare1 />
                <BlueRectangle1 />
              </GreenBox3>
            </BlueBigSquare>
            <BlueBigSquare2>
              <GreenBox2 />
              <GreenBox2 />
              <GreenBox2 />
              <GreenBox2 />
              <GreenBox2 />
              <GreenBox2 />
              <GreenBox2 />
              <GreenBox2 />
              <GreenBox2 />
              <GreenBox2 />
              <GreenBox2 />
              <GreenBox2 />
              <GreenBox2 />
              <GreenBox2 />
              <GreenBox2 />
            </BlueBigSquare2>
          </BlueBox>
        </RightContainer>
      </Container>
    </ModuleWrapper>
  )
}
