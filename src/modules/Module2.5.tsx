import React from 'react'
import styled from 'styled-components'
import { MOBILE_BREAKPOINT } from '../constants'
import { ModuleWrapper } from './common'

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: 80px 1fr 80px;
  background-color: red;
  @media (min-width: ${MOBILE_BREAKPOINT}) {
  }

  @media (max-width: ${MOBILE_BREAKPOINT}) {
  }
`
const BlueMain = styled.div`
  grid-column: 2;
  grid-row: 2 / 4;
  display: grid;
  overflow-y: scroll;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(6, 200px);
  background-color: blue;
  width: 100%;
  height: 100%;
  padding: 8px 80px 8px 8px;
  gap: 8px;
`
const PinkBar = styled.div`
  background-color: pink;
  padding: 8px;
  height: 100%;
  width: 100%;
  grid-column: 1;
  grid-row: 1;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  gap: 8px;
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
  background-color: yellow;
  height: 100%;
  width: 200px;
  padding: 8px;
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
const RedFillGrid = styled.div`
  width: 100%;
  height: 100%;
  background-color: red;
`
const YellowBarBot = styled.div`
  background-color: yellow;
  padding: 8px;
  height: 80px;
  width: 100%;
  grid-column: 1;
  grid-row: 3;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  gap: 8px;
`

const RedBox = styled.div`
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
const GreenBox = styled.div`
  flex: 0 0 auto;
  width: 100%;
  height: 100px;
  background-color: green;
`
const BlueSquare1 = styled.div`
  flex: 0 0 auto;
  grid-column: 1;
  width: 100%;
  height: 100%;
  background-color: #0096ff;
`
const BlueSquare5 = styled.div`
  flex: 0 0 auto;
  grid-column: 5;
  width: 100%;
  height: 100%;
  background-color: #0096ff;
`
const BlueSquareLong = styled.div`
  flex: 0 0 auto;
  grid-column: 3/6;
  width: 100%;
  height: 100%;
  background-color: #0096ff;
`
const BrightBlueBox = styled.div`
  flex: 0 0 auto;
  width: 100%;
  height: 100%;
  background-color: #0096ff;
`
const RedBoxRightLong = styled.div`
  flex: 0 0 auto;
  width: 100%;
  height: 100%;
  background-color: red;
`

export const Module25 = () => {
  const greenboxes = Array.from({ length: 8 }).map((_, index) => (
    <GreenBox key={index} />
  ))
  const blueboxes = Array.from({ length: 8 }).map((_, index) => (
    <BrightBlueBox key={index} />
  ))

  const redboxes = Array.from({ length: 4 }).map((_, index) => (
    <RedFillGrid key={index} />
  ))
  return (
    <ModuleWrapper>
      <Container>
        <PinkBar>
          <BlueSquare1 />
          <BlueSquare5 />
        </PinkBar>

        <RedBox>{greenboxes}</RedBox>
        <YellowBarBot>
          <BlueSquare1 />
          <BlueSquareLong />
        </YellowBarBot>

        <YellowBarRight>
          <YellowYellow>
            <RedBoxRightLong />
          </YellowYellow>
          <YellowBlueRight>{redboxes}</YellowBlueRight>
        </YellowBarRight>

        <BlueMain> {blueboxes} </BlueMain>
      </Container>
    </ModuleWrapper>
  )
}
