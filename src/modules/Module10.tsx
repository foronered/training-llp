import React from 'react'
import styled from 'styled-components'
import { MOBILE_BREAKPOINT } from '../constants'
import { ModuleWrapper } from './common'

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  background-color: blue;

  @media (min-width: ${MOBILE_BREAKPOINT}) {
    flex-direction: row;
  }

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    flex-direction: column;
    align-items: center;
    padding: 8px;
    overflow: scroll;
  }
`

const SideBar = styled.div`
  background-color: red;
  display: flex;
  flex-direction: column;
  padding: 8px;
  gap: 8px;

  @media (min-width: ${MOBILE_BREAKPOINT}) {
    width: 300px;
    height: 100%;
  }

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    width: 300px;
    height: 66%;
  }
`
const BlueBox = styled.div`
  background-color: blue;
  padding: 8px 16px 0px;
  height: 100%;
  @media (min-width: ${MOBILE_BREAKPOINT}) {
    flex: 1;
  }

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    width: 80%;
  }
`

const VioletBox = styled.div`
  padding: 8px;
  display: grid;
  grid-template-columns: 200px 1fr 200px;
  grid-template-rows: 144px 200px;
  background-color: violet;
  width: 100%;
  height: 100%;
  gap: 8px;
`
const LongRedBox = styled.div`
  background-color: red;
  grid-column: 1 / -1;
  height: 144px;
`

const MiniRedBox1 = styled.div`
  background-color: red;
  width: 100%;
  height: 100%;
  grid-row: 2;
  grid-column: 1;
`
const MiniRedBox2 = styled.div`
  background-color: red;
  width: 100%;
  height: 100%;
  grid-row: 2;
  grid-column: 3;
`
const MiniBlueBox = styled.div`
  background-color: blue;
  width: 100%;
  height: 40px;
`

export const Module10 = () => {
  const blueboxes = Array.from({ length: 6 }).map((_, index) => (
    <MiniBlueBox key={index} />
  ))
  return (
    <ModuleWrapper>
      <Container>
        <SideBar>{blueboxes}</SideBar>
        <BlueBox>
          <VioletBox>
            <LongRedBox />
            <MiniRedBox1 />
            <MiniRedBox2 />
          </VioletBox>
        </BlueBox>
      </Container>
    </ModuleWrapper>
  )
}
