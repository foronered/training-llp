import React from 'react'
import styled from 'styled-components'
import { MOBILE_BREAKPOINT } from '../constants'
import { ModuleWrapper } from './common'

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: blue;
`
const LeftBox = styled.div`
  flex: 8;
  height: 100%;
  background-color: black;
`
const CenterBox = styled.div`
  flex: 6;
  height: 100%;
  gap: 16px;
  padding: 32px;
  display: flex;
  flex-wrap: wrap;
  overflow-y: auto;
  background-color: red;
`

const RightBox = styled.div`
  flex: 8;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: blue;
`
const OrangeLeft = styled.div`
  height: 50%;
  width: 100%;
  padding: 16px;
  gap: 16px;
  display: flex;
  flex-wrap: wrap;
  overflow-y: auto;
  background-color: Orange;
`
const BlueLeft = styled.div`
  height: 50%;
  width: 100%;
  padding: 16px;
  gap: 16px;
  display: flex;
  flex-wrap: wrap;
  overflow-y: auto;
  background-color: blue;
`
const BlueRight = styled.div`
  flex: 1;
  width: 100%;
  padding: 32px;
  gap: 16px;
  flex-wrap: wrap;
  display: flex;
  overflow-y: auto;
  background-color: blue;
`
const PinkRight = styled.div`
  flex: 3;
  width: 100%;
  gap: 16px;
  padding: 32px;
  display: flex;
  overflow-y: auto;
  background-color: pink;
`
const RedBox = styled.div`
  height: 120px;
  width: 100%;
  padding: 16px;
  gap: 16px;
  display: flex;
  align-items: center;
  background-color: red;
`
const RedBox2 = styled.div`
  height: 100px;
  width: 100%;
  padding: 16px;
  gap: 16px;
  display: flex;
  align-items: center;
  background-color: red;
`
const BlueBox = styled.div`
  height: 100%;
  width: 100%;
  padding: 16px;
  gap: 16px;
  display: flex;
  align-items: center;
  background-color: lightskyblue;
`
const BlackBox = styled.div`
  height: 100%;
  aspect-ratio: 1;
  display: flex;
  align-items: center;
  background-color: black;
`
const OrangeSquare = styled.div`
  height: 60%;
  aspect-ratio: 1;
  padding: 16px;
  display: flex;
  background-color: orange;
`
const BlueSquare = styled.div`
  height: 100%;
  aspect-ratio: 1;
  display: flex;
  background-color: lightskyblue;
`
const RedBoxBottom = styled.div`
  width: 100%;
  height: 180px;
  padding: 32px;
  gap: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: red;
`
const GreenSquare = styled.div`
  height: 100%;
  width: 100px;
  padding: 32px;
  display: flex;
  background-color: green;
`
const BlackSquare = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  background-color: black;
`
const GreenBox = styled.div`
  height: 200px;
  width: 100%;
  padding: 16px;
  align-content: space-between;
  display: flex;
  flex-wrap: wrap;
  background-color: #55fa55;
`
const BlueTittle = styled.div`
  height: 50px;
  width: 100px;
  display: flex;
  background-color: #34ccff;
`
const BlueTittle2 = styled.div`
  height: 60px;
  width: 100%;
  display: flex;
  background-color: #34ccff;
`
const RightBlue = styled.div`
  flex: 50%;
  height: 2000px;
  padding: 32px;
  display: flex;
  background-color: #34ccff;
`

const RightContainer = styled.div`
  flex: 50%;
  height: 2000px;
  gap: 32px;
  flex-direction: column;
  display: flex;
`
const BlackBox2 = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  background-color: black;
`
const RightBlue2 = styled.div`
  width: 100%;
  flex: 1;
  padding: 32px;
  display: flex;
  background-color: #34ccff;
`

export const Module31 = () => {
  return (
    <ModuleWrapper>
      <Container>
        <LeftBox>
          <OrangeLeft>
            <RedBox>
              <OrangeSquare>
                <BlueSquare />
              </OrangeSquare>
              <OrangeSquare>
                <BlueSquare />
              </OrangeSquare>
              <OrangeSquare>
                <BlueSquare />
              </OrangeSquare>
            </RedBox>
            <RedBox>
              <OrangeSquare>
                <BlueSquare />
              </OrangeSquare>
              <OrangeSquare>
                <BlueSquare />
              </OrangeSquare>
              <OrangeSquare>
                <BlueSquare />
              </OrangeSquare>
            </RedBox>
            <RedBox>
              <OrangeSquare>
                <BlueSquare />
              </OrangeSquare>
              <OrangeSquare>
                <BlueSquare />
              </OrangeSquare>
              <OrangeSquare>
                <BlueSquare />
              </OrangeSquare>
            </RedBox>
            <RedBox>
              <OrangeSquare>
                <BlueSquare />
              </OrangeSquare>
              <OrangeSquare>
                <BlueSquare />
              </OrangeSquare>
              <OrangeSquare>
                <BlueSquare />
              </OrangeSquare>
            </RedBox>
            <RedBox>
              <OrangeSquare>
                <BlueSquare />
              </OrangeSquare>
              <OrangeSquare>
                <BlueSquare />
              </OrangeSquare>
              <OrangeSquare>
                <BlueSquare />
              </OrangeSquare>
            </RedBox>
            <RedBox>
              <OrangeSquare>
                <BlueSquare />
              </OrangeSquare>
              <OrangeSquare>
                <BlueSquare />
              </OrangeSquare>
              <OrangeSquare>
                <BlueSquare />
              </OrangeSquare>
            </RedBox>
          </OrangeLeft>
          <BlueLeft>
            <RedBoxBottom>
              <GreenSquare />
              <GreenSquare>
                <BlackSquare />
              </GreenSquare>
              <GreenSquare />
            </RedBoxBottom>
            <RedBoxBottom>
              <GreenSquare />
              <GreenSquare>
                <BlackSquare />
              </GreenSquare>
              <GreenSquare />
            </RedBoxBottom>
            <RedBoxBottom>
              <GreenSquare />
              <GreenSquare>
                <BlackSquare />
              </GreenSquare>
              <GreenSquare />
            </RedBoxBottom>
            <RedBoxBottom>
              <GreenSquare />
              <GreenSquare>
                <BlackSquare />
              </GreenSquare>
              <GreenSquare />
            </RedBoxBottom>
            <RedBoxBottom>
              <GreenSquare />
              <GreenSquare>
                <BlackSquare />
              </GreenSquare>
              <GreenSquare />
            </RedBoxBottom>
          </BlueLeft>
        </LeftBox>
        <CenterBox>
          <GreenBox>
            <BlueTittle />
            <BlueTittle2 />
          </GreenBox>
          <GreenBox>
            <BlueTittle />
            <BlueTittle2 />
          </GreenBox>
          <GreenBox>
            <BlueTittle />
            <BlueTittle2 />
          </GreenBox>
          <GreenBox>
            <BlueTittle />
            <BlueTittle2 />
          </GreenBox>
          <GreenBox>
            <BlueTittle />
            <BlueTittle2 />
          </GreenBox>
          <GreenBox>
            <BlueTittle />
            <BlueTittle2 />
          </GreenBox>
        </CenterBox>
        <RightBox>
          <BlueRight>
            <RedBox2>
              <BlueBox>
                <BlackBox />
              </BlueBox>
            </RedBox2>
            <RedBox2>
              <BlueBox>
                <BlackBox />
              </BlueBox>
            </RedBox2>
            <RedBox2>
              <BlueBox>
                <BlackBox />
              </BlueBox>
            </RedBox2>
            <RedBox2>
              <BlueBox>
                <BlackBox />
              </BlueBox>
            </RedBox2>
          </BlueRight>
          <PinkRight>
            <RightBlue>
              <BlackSquare />
            </RightBlue>
            <RightContainer>
              <BlackBox2 />
              <RightBlue2 />
            </RightContainer>
          </PinkRight>
        </RightBox>
      </Container>
    </ModuleWrapper>
  )
}
