import React from 'react'
import styled from 'styled-components'
import {ModuleWrapper} from './common'


const Container = styled.div`
  width: 100%;
  height: 100%;
  
  display: flex;
`

const LeftColumn = styled.div`
  flex: 0 0 37.5%;
  height: 100%;
  
  display: flex;
  flex-direction: column;
`

const LeftTopColumn = styled.div`
  flex: 0 0 50%;
  width: 100%;
  
  padding: 32px 32px 0 32px;
  display: flex;
  flex-direction: column;
  background-color: orange;
  
  overflow: scroll;
`

const RedRow = styled.div`
  flex: 0 0 64px;
  width: 100%;
  
  margin: 0 0 32px 0;
  padding: 16px;
  display: flex;
  justify-content: space-between;
  background-color: red;
`

const OrangeBox = styled.div`
  flex: 0 0 32px;
  height: 32px;
  
  padding: 8px;
  background-color: orange;
`

const OrangeMarginBox = styled.div`
  flex: 0 0 32px;
  height: 32px;

  margin: 0 auto 0 16px;
  padding: 8px;
  background-color: orange;
`

const BlueBox = styled.div`
  flex: 1 0 auto;
  height: 16px;
  
  background-color: rgb(71, 159, 248);
`

const LeftBottomColumn = styled.div`
  flex: 0 0 50%;
  width: 100%;

  display: flex;
  padding: 32px 32px 0 32px;
  flex-direction: column;
  background-color: blue;

  overflow: scroll;
`

const BigRedRow = styled.div`
  flex: 0 0 128px;
  width: 100%;

  margin: 0 0 32px 0;
  padding: 16px 16px 16px 32px;
  display: flex;
  justify-content: space-between;
  background-color: red;
`

const GreenBox = styled.div`
  flex: 1 0 auto;
  height: 100%;
  
  margin: 0 16px 0 0;
  padding: 16px 24px;
  background-color: lime;
`

const BlackBox = styled.div`
  flex: 1 0 auto;
  height: 100%;
  
  background-color: black;
`

const MiddleColumn = styled.div`
  flex: 0 0 25%;
  height: 100%;

  display: flex;
  padding: 32px 32px 0 32px;
  flex-direction: column;
  background-color: red;
  
  overflow: scroll;
`

const GreenRow = styled.div`
  flex: 0 0 128px;
  width: 100%;

  margin: 0 0 32px 0;
  padding: 16px 16px 16px 16px;
  background-color: lime;
`

const TopBlueBox = styled.div`
  width: 64px;
  height: 32px;
  
  margin: 0 0 32px 0;
  background-color: rgb(71, 159, 248);
`

const BottomBlueBox = styled.div`
  width: 100%;
  height: 32px;
  
  background-color: rgb(71, 159, 248);
`

const RightColumn = styled.div`
  flex: 0 0 37.5%;
  height: 100%;
  
  display: flex;
  flex-direction: column;
`

const RightTopColumn = styled.div`
  flex: 0 0 25%;
  width: 100%;

  padding: 32px 32px 0 32px;
  display: flex;
  flex-direction: column;
  background-color: blue;
  
  overflow: scroll;
`

const RedTopRow = styled.div`
  flex: 0 0 64px;
  width: 100%;
  
  display: flex;
  margin: 0 0 16px 0;
  padding: 16px;
  background-color: red;
  
  :last-of-type {
    margin: 0 0 32px 0;
  }
`

const LightBlueBox = styled.div`
  flex: 1 0 auto;
  height: 100%;
  
  padding: 8px;
  display: flex;
  background-color: rgb(71, 159, 248);
`

const TopBlackBox = styled.div`
  flex: 0 0 16px;
  height: 100%;
  
  background-color: black;
`

const RightBottomColumn = styled.div`
  flex: 0 0 75%;
  width: 100%;
  
  padding: 32px;
  display: flex;
  justify-content: center;
  gap: 16px;
  background-color: fuchsia;
  overflow-x: hidden;
  overflow-y: scroll;
`

const RightBottomLeft = styled.div`
  flex: 0 1 50%;
  height: 800px;
`

const RightBottomLeftBlueBox = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  padding: 32px;
  background-color: rgb(71, 159, 248);
`

const RightBottomLeftBlackBox = styled.div`
  flex: 1 0 auto;
  width: 100%;
  
  background-color: black;
`

const RightBottomRight = styled.div`
  flex: 0 1 50%;
  height: 800px;
  
  display: flex;
  flex-direction: column;
  gap: 16px;
`

const RightBottomRightBlackBox = styled.div`
  flex: 0 0 150px;
  width: 100%;
  
  background-color: black;
`

const RightBottomRightBlueBox = styled.div`
  flex: 1 0 auto;
  width: 100%;

  background-color: rgb(71, 159, 248);
`

const LeftTopContent = () => {
  return (
    <RedRow>
      <OrangeBox>
        <BlueBox />
      </OrangeBox>
      <OrangeMarginBox>
        <BlueBox />
      </OrangeMarginBox>
      <OrangeBox>
        <BlueBox />
      </OrangeBox>
    </RedRow>
  )
}

const LeftBottomContent = () => {
  return (
    <BigRedRow>
      <GreenBox />
      <GreenBox>
        <BlackBox />
      </GreenBox>
      <GreenBox />
    </BigRedRow>
  )
}

const MiddleContent = () => {
  return (
    <GreenRow>
      <TopBlueBox />
      <BottomBlueBox />
    </GreenRow>
  )
}

const RightTopContent = () => {
  return (
    <RedTopRow>
      <LightBlueBox>
        <TopBlackBox />
      </LightBlueBox>
    </RedTopRow>
  )
}

export const Module18 = () => {
  return (
    <ModuleWrapper>
      <Container>
        <LeftColumn>
          <LeftTopColumn>
            <LeftTopContent />
            <LeftTopContent />
            <LeftTopContent />
            <LeftTopContent />
            <LeftTopContent />
          </LeftTopColumn>
          <LeftBottomColumn>
            <LeftBottomContent />
            <LeftBottomContent />
            <LeftBottomContent />
            <LeftBottomContent />
            <LeftBottomContent />
          </LeftBottomColumn>
        </LeftColumn>
        <MiddleColumn>
          <MiddleContent />
          <MiddleContent />
          <MiddleContent />
          <MiddleContent />
          <MiddleContent />
          <MiddleContent />
        </MiddleColumn>
        <RightColumn>
          <RightTopColumn>
            <RightTopContent />
            <RightTopContent />
            <RightTopContent />
            <RightTopContent />
            <RightTopContent />
          </RightTopColumn>
          <RightBottomColumn>
            <RightBottomLeft>
              <RightBottomLeftBlueBox>
                <RightBottomLeftBlackBox />
              </RightBottomLeftBlueBox>
            </RightBottomLeft>
            <RightBottomRight>
              <RightBottomRightBlackBox />
              <RightBottomRightBlueBox />
            </RightBottomRight>
          </RightBottomColumn>
        </RightColumn>
      </Container>
    </ModuleWrapper>
  )
}
