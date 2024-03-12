import React from 'react'
import styled from 'styled-components'
import { MOBILE_BREAKPOINT } from '../constants'
import { ModuleWrapper } from './common'

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: 80px 1fr 160px;
  background-color: red;
  @media (min-width: ${MOBILE_BREAKPOINT}) {
  }

  @media (max-width: ${MOBILE_BREAKPOINT}) {
  }
`

const YellowBarRight = styled.div`
  background-color: yellow;
  height: 100%;
  width: 100%;
  padding: 8px;
  grid-column: 2;
  grid-row: 1;
  display: flex;
  justify-content: space-between;
`

const YellowYellow = styled.div`
  display: flex;
  background-color: yellow;
  height: 100%;
  width: 200px;
  padding: 8px;
  gap: 8px;
`
const YellowBlueRight = styled.div`
  background-color: blue;
  height: 100%;
  width: 200px;
  padding: 8px;
  display: grid;
  gap: 8px;
  grid-template-columns: repeat(4, 1fr);
`
const YellowBarBot = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  background-color: yellow;
  padding: 20px;
  height: 100%;
  width: 100%;
  grid-column: 1;
  grid-row: 3;
  gap: 20px;
`

const RedBox = styled.div`
  grid-column: 1;
  grid-row: 1/3;
  display: flex;
  flex-direction: column;
  background-color: red;

  flex: 1;
  padding: 8px 8px 0px;
  gap: 8px;
  overflow-y: scroll;

  @media (min-width: ${MOBILE_BREAKPOINT}) {
    width: 100%;
  }

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    width: 40%;
  }
`
const GreenSquare = styled.div`
  flex: 0 0 auto;
  width: 60px;
  height: 60px;
  background-color: #00ff51;
`
const RedSquare = styled.div`
  flex: 0 0 auto;
  width: 100%;
  height: 100%;
  background-color: #ff0011;
`
const RedSquareYellow = styled.div`
  flex: 0 0 auto;
  width: 60px;
  height: 100%;
  background-color: #ff0011;
`
const GreenBoxLong = styled.div`
  flex: 0 0 auto;
  width: 100%;
  height: 40px;
  background-color: #00ff51;
`
const GreenBoxLong2 = styled.div`
  grid-column: 1/4;
  grid-row: 1;
  flex: 0 0 auto;
  width: 100%;
  height: 60px;
  background-color: #00ff51;
`
const BlueMain = styled.div`
  grid-column: 2;
  grid-row: 2 / 4;
  display: grid;
  overflow-y: hidden;
  grid-template-columns: 2fr 1fr;
  background-color: blue;
  width: 100%;
  height: 100%;
  padding: 8px;
  gap: 8px;
`

const BrightBlueBox1 = styled.div`
  grid-column: 1;
  display: flex;
  flex-direction: column;
  height: 500px;
  width: 100%;
  height: 100%;
  background-color: #0096ff;
  gap: 8px;
  padding: 8px;
  overflow-y: scroll;
`
const BrightBlueBox2 = styled.div`
  grid-column: 2;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: #0096ff;
  gap: 8px;
  padding: 8px;
  overflow-y: scroll;
`
const RedBoxRightLong = styled.div`
  flex: 0 0 auto;
  width: 100%;
  height: 100%;
  background-color: red;
`
const RedBoxTopRight1 = styled.div`
  width: 100%;
  height: 100%;
  background-color: red;
  grid-column: 1;
`
const RedBoxTopRight2 = styled.div`
  width: 100%;
  height: 100%;
  background-color: red;
  grid-column: 2;
`
const RedBoxTopRight4 = styled.div`
  width: 100%;
  height: 100%;
  background-color: red;
  grid-column: 4;
`
const GreenBoxesArray = styled.div`
  width: 100%;
  height: 50px;
  background-color: #4cb94c;
  flex: 0 0 auto;
`

const GreenBoxesArrayLeft = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: auto;
  background-color: #4cb94c;
  padding: 8px;
  flex: 0 0 auto;
  gap: 8px;
`
const RedBoxScroll = styled.div`
  width: 100px;
  height: 100px;
  background-color: #ef1414;
`
const BlueBarScroll = styled.div`
  flex: 1;
  height: 100px;
  background-color: #14c3ef;
`
export const Module26 = () => {
  const threeredboxes = Array.from({ length: 3 }).map((_, index) => (
    <RedSquare key={index} />
  ))
  const greenboxesright = Array.from({ length: 10 }).map((_, index) => (
    <GreenBoxesArray key={index} />
  ))
  const greenboxesleft = Array.from({ length: 10 }).map((_, index) => (
    <GreenBoxesArrayLeft key={index}>
      <RedBoxScroll />
      <BlueBarScroll />
    </GreenBoxesArrayLeft>
  ))
  return (
    <ModuleWrapper>
      <Container>
        <RedBox>
          <GreenSquare />
          <GreenBoxLong />
        </RedBox>
        <YellowBarBot>
          <GreenBoxLong2 />
          {threeredboxes}
        </YellowBarBot>

        <YellowBarRight>
          <YellowYellow>
            <RedSquareYellow />
            <RedBoxRightLong />
          </YellowYellow>
          <YellowBlueRight>
            <RedBoxTopRight1 />
            <RedBoxTopRight2 />
            <RedBoxTopRight4 />
          </YellowBlueRight>
        </YellowBarRight>

        <BlueMain>
          <BrightBlueBox1> {greenboxesleft}</BrightBlueBox1>
          <BrightBlueBox2>{greenboxesright}</BrightBlueBox2>
        </BlueMain>
      </Container>
    </ModuleWrapper>
  )
}
