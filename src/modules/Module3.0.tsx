import React from 'react'
import styled from 'styled-components'
import { MOBILE_BREAKPOINT } from '../constants'
import { ModuleWrapper } from './common'

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 300px 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  background-color: blue;
`

const RedBox = styled.div`
  display: flex;
  flex-direction: column;
  grid-column: 2;
  grid-row: 1/5;
  background-color: red;
  width: 1 flex;
  height: 1 flex;
  padding: 8px 8px 0px;
  overflow-y: scroll;
  gap: 16px;
`
const MiddleGreenBox = styled.div`
  flex: 0 0 auto;
  width: 100%;
  height: 100px;
  background-color: green;
  display: flex;
  flex-direction: column;
  padding: 8px;
  justify-content: space-between;
`
const MiddleBlueBox1 = styled.div`
  width: 60px;
  height: 20px;
  background-color: #00e1ff;
`
const MiddleBlueBox2 = styled.div`
  width: 100%;
  height: 30px;
  background-color: #00e1ff;
`

const OrangeBox = styled.div`
  display: flex;
  flex-direction: column;
  grid-column: 1;
  grid-row: 1/3;
  background-color: orange;
  width: 1 flex;
  height: 1 flex;
  padding: 8px 8px 0px;
  overflow-y: scroll;
  gap: 16px;
`

const LeftTopRedBox = styled.div`
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  background-color: red;
  display: grid;
  padding: 8px;
  grid-template-columns: 80px 80px 1fr 80px;
`
const LeftMiddleOrangeBox = styled.div`
  width: 60px;
  height: 60px;
  background-color: orange;
  display: flex;
  justify-content: center;
  align-items: center;
`
const LeftMiddleBlueBox = styled.div`
  width: 30px;
  height: 30px;
  background-color: blue;
`
const LeftNothing = styled.div`
  width: 60px;
  height: 60px;
  background-color: red;
  display: flex;
  justify-content: center;
  align-items: center;
`

const BlueBox = styled.div`
  display: flex;
  flex-direction: column;
  grid-column: 1;
  grid-row: 3/5;
  background-color: blue;
  width: 1 flex;
  height: 1 flex;
  padding: 8px 8px 0px;
  overflow-y: scroll;
  gap: 16px;
`

const LeftBotRedBox = styled.div`
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  background-color: red;
  display: grid;
  padding: 8px;
  gap: 8px;
  grid-template-columns: 1fr 1fr 1fr;
`
const LeftMiddleGreenBox = styled.div`
  width: 1 flex;
  height: 140px;
  background-color: green;
  display: flex;
  justify-content: center;
  align-items: center;
`
const LeftBotBlackBox = styled.div`
  width: 60px;
  height: 60px;
  background-color: black;
`

const BlueBoxRight = styled.div`
  display: flex;
  flex-direction: column;
  grid-column: 3;
  grid-row: 1/2;
  background-color: blue;
  width: 1 flex;
  height: 1 flex;
  padding: 8px 8px 0px;
  overflow-y: scroll;
  gap: 16px;
`

const RightTopRedBox = styled.div`
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  background-color: red;
  display: flex;
  padding: 8px;
`
const TopRightBlueBox = styled.div`
  width: 100%;
  height: 50px;
  background-color: #00a2ff;
  display: flex;
  padding: 8px;
  align-items: center;
`
const RightTopBlackBox = styled.div`
  width: 20px;
  height: 20px;
  background-color: black;
`
const PinkBox = styled.div`
  display: grid;
  grid-column: 3;
  grid-row: 2/6;
  background-color: #b8229a;
  width: 1 flex;
  height: 1 flex;
  padding: 8px 8px 0px;
  overflow-y: scroll;
  gap: 16px;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 200px 1fr;
`
const BotRightBlueBox = styled.div`
  grid-column: 1;
  grid-row: 1/3;
  width: 100%;
  height: 1000px;
  background-color: #00a2ff;
  display: flex;
  padding: 8px;
  align-items: center;
`
const BotRightBlackBoxInner = styled.div`
  width: 100%;
  height: 100%;
  background-color: black;
`
const BotRightBlackBox = styled.div`
  grid-column: 2;
  grid-row: 1;
  width: 100%;
  height: 200px;
  background-color: black;
`
const BotRightBlueBox2 = styled.div`
  grid-column: 2;
  grid-row: 2;
  width: 100%;
  height: 850px;
  background-color: #00a2ff;
`

export const Module30 = () => {
  const greenboxesmiddle = Array.from({ length: 10 }).map((_, index) => (
    <MiddleGreenBox key={index}>
      <MiddleBlueBox1 />
      <MiddleBlueBox2 />
    </MiddleGreenBox>
  ))
  const redboxeslefttop = Array.from({ length: 10 }).map((_, index) => (
    <LeftTopRedBox key={index}>
      <LeftMiddleOrangeBox>
        <LeftMiddleBlueBox />
      </LeftMiddleOrangeBox>
      <LeftMiddleOrangeBox>
        <LeftMiddleBlueBox />
      </LeftMiddleOrangeBox>
      <LeftNothing />
      <LeftMiddleOrangeBox>
        <LeftMiddleBlueBox />
      </LeftMiddleOrangeBox>
    </LeftTopRedBox>
  ))
  const redboxesleftbot = Array.from({ length: 10 }).map((_, index) => (
    <LeftBotRedBox key={index}>
      <LeftMiddleGreenBox />
      <LeftMiddleGreenBox>
        <LeftBotBlackBox />
      </LeftMiddleGreenBox>
      <LeftMiddleGreenBox />
    </LeftBotRedBox>
  ))

  const redboxesrighttop = Array.from({ length: 10 }).map((_, index) => (
    <RightTopRedBox key={index}>
      <TopRightBlueBox>
        <RightTopBlackBox />
      </TopRightBlueBox>
    </RightTopRedBox>
  ))
  return (
    <ModuleWrapper>
      <Container>
        <RedBox>{greenboxesmiddle}</RedBox>
        <OrangeBox> {redboxeslefttop}</OrangeBox>
        <BlueBox> {redboxesleftbot}</BlueBox>
        <BlueBoxRight> {redboxesrighttop}</BlueBoxRight>
        <PinkBox>
          <BotRightBlueBox>
            {' '}
            <BotRightBlackBoxInner />
          </BotRightBlueBox>
          <BotRightBlackBox />
          <BotRightBlueBox2 />
        </PinkBox>
      </Container>
    </ModuleWrapper>
  )
}
