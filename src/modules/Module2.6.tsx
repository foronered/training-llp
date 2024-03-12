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
  background-color: blue;
  @media (min-width: ${MOBILE_BREAKPOINT}) {
    grid-template-columns: 1fr 2fr;
    grid-template-rows: 80px 1fr 160px;
  }

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    grid-template-columns: 1fr 2fr;
    grid-template-rows: 160px 1fr 160px;
    padding-left: 100px;
    padding-right: 100px;
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

  @media (min-width: ${MOBILE_BREAKPOINT}) {
    justify-content: space-between;
  }

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    flex-direction: column;
  }
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
  height: 60px;
  width: 200px;
  padding: 8px;
  display: grid;
  gap: 8px;
  grid-template-columns: repeat(4, 1fr);
`
const YellowBarBot = styled.div`
  background-color: yellow;
  padding: 20px;
  height: 100%;
  width: 100%;
  grid-column: 1;
  grid-row: 3;
  gap: 20px;

  @media (min-width: ${MOBILE_BREAKPOINT}) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
  }

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    display: flex;
    justify-content: center;
  }
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
  width: 100%;
  @media (min-width: ${MOBILE_BREAKPOINT}) {
  }

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    align-items: center;
  }
`
const GreenSquare = styled.div`
  flex: 0 0 auto;
  width: 60px;
  height: 60px;
  background-color: #00ff51;
`
const RedSquare = styled.div`
  width: 100%;
  height: 100%;
  background-color: #ff0011;
  @media (min-width: ${MOBILE_BREAKPOINT}) {
  }

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    display: none;
  }
`
const RedSquareYellow = styled.div`
  flex: 0 0 auto;
  width: 40px;
  height: 40px;
  background-color: #ff0011;
`
const GreenBoxLong = styled.div`
  flex: 0 0 auto;
  width: 100%;
  height: 40px;
  background-color: #00ff51;
  @media (min-width: ${MOBILE_BREAKPOINT}) {
  }

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    display: none;
  }
`
const GreenBoxLong2 = styled.div`
  height: 60px;
  background-color: #00ff51;
  @media (min-width: ${MOBILE_BREAKPOINT}) {
    grid-column: 1/4;
    grid-row: 1;
    width: 100%;
  }

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    width: 60px;
  }
`
const BlueMain = styled.div`
  grid-column: 2;
  grid-row: 2 / 4;

  overflow-y: hidden;
  grid-template-columns: 2fr 1fr;
  background-color: blue;
  width: 100%;
  height: 100%;
  gap: 8px;
  @media (min-width: ${MOBILE_BREAKPOINT}) {
    display: grid;
    padding: 8px;
  }

  @media (max-width: ${MOBILE_BREAKPOINT}) {
  }
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
  @media (min-width: ${MOBILE_BREAKPOINT}) {
  }

  @media (max-width: ${MOBILE_BREAKPOINT}) {
  }
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
  @media (min-width: ${MOBILE_BREAKPOINT}) {
  }

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    display: none;
  }
`
const RedBoxRightLong = styled.div`
  flex: 0 0 auto;
  width: 100%;
  height: 40px;
  background-color: red;
`
const RedBoxTopRight1 = styled.div`
  width: 40px;
  height: 40px;
  background-color: red;
  grid-column: 1;
`
const RedBoxTopRight2 = styled.div`
  width: 40px;
  height: 40px;
  background-color: red;
  grid-column: 2;
`
const RedBoxTopRight4 = styled.div`
  width: 40px;
  height: 40px;
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

  width: 100%;
  height: auto;
  background-color: #14cc26;
  padding: 8px;
  gap: 8px;
  @media (min-width: ${MOBILE_BREAKPOINT}) {
    flex-direction: row;
  }

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    flex-direction: column;
    align-items: center;
  }
`
const RedBoxScroll = styled.div`
  width: 70px;
  height: 70px;
  background-color: #ef1414;
`
const BlueBarScroll = styled.div`
  height: 70px;
  background-color: #14c3ef;
  @media (min-width: ${MOBILE_BREAKPOINT}) {
    flex: 1;
  }

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    width: 200px;
  }
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
