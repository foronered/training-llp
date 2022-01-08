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
  
  background-color: red;
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
  
  display: flex;
  background-color: blue;
`

const RightBottomColumn = styled.div`
  flex: 0 0 75%;
  width: 100%;
  
  display: flex;
  background-color: fuchsia;
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
        <MiddleColumn />
        <RightColumn>
          <RightTopColumn />
          <RightBottomColumn />
        </RightColumn>
      </Container>
    </ModuleWrapper>
  )
}
