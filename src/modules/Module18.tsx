import React from 'react'
import { ModuleWrapper } from './common'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
`

const LeftContainer = styled.div`
  flex: 4;
  height: 100%;
  display: flex;
  flex-direction: column;
`

const TopLeft = styled.div`
  background-color: orange;
  flex: 1;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  padding: 32px 48px;
  gap: 24px;
`
const TopLeftBoxContainer = styled.div`
  background-color: red;
  flex: 0 0 80px;
  width: 100%;
  padding: 16px;
  display: flex;
  gap: 16px;
`
const OrangeSquare = styled.div`
  height: 48px;
  flex: 0 0 48px;
  background-color: orange;
  display: flex;
  justify-content: center;
  align-items: center;
`
const BlueSquare = styled.div`
  background-color: dodgerblue;
  height: 24px;
  flex: 0 0 24px;
`

const BottomLeft = styled.div`
  flex: 1;
  background-color: blue;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  padding: 32px 48px;
  gap: 24px;
`
const BottomLeftBoxContainer = styled.div`
  background-color: red;
  flex: 0 0 120px;
  width: 100%;
  display: flex;
  padding: 16px;
  justify-content: center;
  align-items: center;
  gap: 16px;
`
const BottomLeftGreenBox = styled.div`
  height: 80px;
  flex: 0 0 64px;
  background-color: lime;
  display: flex;
  justify-content: center;
  align-items: center;
`
const BottomLeftBlackBox = styled.div`
  background-color: black;
  height: 40px;
  flex: 0 0 32px;
`

const MiddleContainer = styled.div`
  background-color: red;
  flex: 3;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 32px 48px;
`

const MiddleBoxContainer = styled.div`
  flex: 0 0 160px;
  width: 100%;
  background-color: lime;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 16px;
`
const MiddleBoxTopRow = styled.div`
  background-color: dodgerblue;
  flex: 0 0 32px;
  width: 30%;
`
const MiddleBoxBottomRow = styled.div`
  background-color: dodgerblue;
  flex: 0 0 48px;
  width: 100%;
`

const RightContainer = styled.div`
  background-color: chocolate;
  flex: 4;
  display: flex;
  flex-direction: column;
`
const TopRight = styled.div`
  background-color: blue;
  flex: 2;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  padding: 24px 24px;
  gap: 16px;
`
const TopRightOuterBox = styled.div`
  background-color: red;
  width: 100%;
  flex: 0 0 72px;
  padding: 16px;
`
const TopRightInnerBox = styled.div`
  background-color: dodgerblue;
  height: 100%;
  width: 100%;
  padding-left: 8px;
  display: flex;
  align-items: center;
`
const TopRightBlackBox = styled.div`
  background-color: black;
  height: 24px;
  width: 24px;
`

const BottomRight = styled.div`
  background-color: rgb(255, 67, 161);
  flex: 5;
  width: 100%;
  overflow-y: auto;
  padding: 24px;
  display: flex;
  gap: 16px;
`
const BottomRightLeftInnerContainer = styled.div`
  background-color: black;
  height: 100%;
  width: 100%;
`
const BottomRightLeftContainer = styled.div`
  height: 800px;
  flex: 1;
  padding: 24px;
  background-color: dodgerblue;
`
const BottomRightRightContainer = styled.div`
  height: 800px;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
`
const BottomRightBlackContainer = styled.div`
  background-color: black;
  flex: 1;
  width: 100%;
`
const BottomRightBlueContainer = styled.div`
  background-color: dodgerblue;
  flex: 5;
  width: 100%;
`

const TopLeftBox = () => {
  return (
    <TopLeftBoxContainer>
      <OrangeSquare>
        <BlueSquare />
      </OrangeSquare>
      <OrangeSquare style={{ marginRight: 'auto' }}>
        <BlueSquare />
      </OrangeSquare>
      <OrangeSquare>
        <BlueSquare />
      </OrangeSquare>
    </TopLeftBoxContainer>
  )
}

const BottomLeftBox = () => {
  return (
    <BottomLeftBoxContainer>
      <BottomLeftGreenBox />
      <BottomLeftGreenBox>
        <BottomLeftBlackBox />
      </BottomLeftGreenBox>
      <BottomLeftGreenBox />
    </BottomLeftBoxContainer>
  )
}

const MiddleBox = () => {
  return (
    <MiddleBoxContainer>
      <MiddleBoxTopRow />
      <MiddleBoxBottomRow />
    </MiddleBoxContainer>
  )
}

const TopRightBox = () => {
  return (
    <TopRightOuterBox>
      <TopRightInnerBox>
        <TopRightBlackBox />
      </TopRightInnerBox>
    </TopRightOuterBox>
  )
}

const TopLeftBoxesArray = () => [...Array(5)].map(() => <TopLeftBox />)
const BottomLeftBoxesArray = () => [...Array(10)].map(() => <BottomLeftBox />)
const MiddleBoxesArray = () => [...Array(10)].map(() => <MiddleBox />)
const TopRightBoxesArray = () => [...Array(10)].map(() => <TopRightBox />)

export const Module18 = () => {
  return (
    <ModuleWrapper>
      <Container>
        <LeftContainer>
          <TopLeft>{TopLeftBoxesArray()}</TopLeft>
          <BottomLeft>{BottomLeftBoxesArray()}</BottomLeft>
        </LeftContainer>
        <MiddleContainer>{MiddleBoxesArray()}</MiddleContainer>
        <RightContainer>
          <TopRight>{TopRightBoxesArray()}</TopRight>
          <BottomRight>
            <BottomRightLeftContainer>
              <BottomRightLeftInnerContainer />
            </BottomRightLeftContainer>
            <BottomRightRightContainer>
              <BottomRightBlackContainer />
              <BottomRightBlueContainer />
            </BottomRightRightContainer>
          </BottomRight>
        </RightContainer>
      </Container>
    </ModuleWrapper>
  )
}
