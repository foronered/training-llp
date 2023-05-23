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
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  gap: 16px;
  overflow-y: auto;
  background-color: blue;
  ${DESKTOP_STYLE} {
    padding: 16px;
    flex: 1;
  }
  ${MOBILE_STYLE} {
    flex-direction: column;
    overflow-y: auto;
    flex: 1;
  }
`
const RedButton = styled.div`
  display: flex;
  overflow-y: auto;
  background-color: red;
  ${DESKTOP_STYLE} {
    flex: 1;
  }
  ${MOBILE_STYLE} {
    flex: 0;
  }
`
const EmptyBox = styled.div`
  flex: 50%;
  gap: 16px;
  display: flex;
  flex-direction: row;
`
const OrangeHeader = styled.div`
  width: 100%;
  padding: 16px;
  gap: 16px;
  display: flex;
  background-color: orange;
  ${DESKTOP_STYLE} {
    height: 80px;
  }
  ${MOBILE_STYLE} {
    height: 150px;
    flex-direction: column;
  }
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
  display: flex;
  justify-content: center;
  background-color: green;

  ${DESKTOP_STYLE} {
    flex: 0 0 50px;
    width: 100%;
  }
  ${MOBILE_STYLE} {
    width: 0px;
    height: 0px;
  }
`
const BlueBigSquare = styled.div`
  flex: 2;
  padding: 16px;
  gap: 16px;
  display: flex;
  flex-wrap: wrap;
  background-color: #357afb;
  ${DESKTOP_STYLE} {
    overflow-y: auto;
    height: 100%;
  }
  ${MOBILE_STYLE} {
  }
`
const BlueBigSquare2 = styled.div`
  padding: 16px;
  gap: 16px;
  overflow-y: auto;
  display: flex;
  flex-wrap: wrap;
  background-color: #357afb;
  ${DESKTOP_STYLE} {
    flex: 1;
    height: 100%;
  }
  ${MOBILE_STYLE} {
    flex: 1;
    height: 100%;
  }
`
const GreenSquare = styled.div`
  background-color: green;
  ${DESKTOP_STYLE} {
    height: 60px;
    width: 60px;
  }
  ${MOBILE_STYLE} {
    aspect-ratio: 1;
    width: 100%;
  }
`
const GreenRectangle = styled.div`
  background-color: green;
  ${DESKTOP_STYLE} {
    height: 60px;
    width: 100%;
  }
  ${MOBILE_STYLE} {
    aspect-ratio: 1;
    width: 100%;
  }
`
const EmptyRectangle = styled.div`
  flex: 1;
  width: 100%;
  justify-content: space-between;
  display: flex;
  gap: 16px;
`

const BlueRectangleRight = styled.div`
  flex: 50%;
  width: 400px;
  gap: 8px;
  padding: 8px;
  margin-left: auto;
  display: flex;
  flex-wrap: wrap;
  background-color: blue;
`
const RedSquare = styled.div`
  height: 100%;
  width: 90px;
  background-color: red;
`
const RedRectangle = styled.div`
  height: 100%;
  width: 150px;
  background-color: red;
`
const RedSquare2 = styled.div`
  height: 100%;
  width: 50px;
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
  width: 100%;
  gap: 16px;
  display: flex;
  background-color: green;
  ${DESKTOP_STYLE} {
    padding: 16px;
    height: 100px;
  }
  ${MOBILE_STYLE} {
    flex-direction: column;
    padding: 16px 32px;
    height: 150px;
    align-items: center;
  }
`
const RedSquare1 = styled.div`
  background-color: red;
  ${DESKTOP_STYLE} {
    height: 100%;
    aspect-ratio: 1;
  }
  ${MOBILE_STYLE} {
    height: 100%;
    width: 100px;
  }
`
const BlueRectangle1 = styled.div`
  height: 100%;
  width: 100%;
  background-color: blue;
`

export const Module26 = () => {
  return (
    <ModuleWrapper>
      <BigContainer>
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
              <EmptyBox>
                <RedSquare2 />
                <RedRectangle />
              </EmptyBox>
              <BlueRectangleRight>
                <RedSquare />
                <RedSquare />
                <RedSquare style={{ marginLeft: 'auto' }} />
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
      </BigContainer>
    </ModuleWrapper>
  )
}
