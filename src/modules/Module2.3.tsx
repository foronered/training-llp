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
  background-color: red;
  flex-direction: column;
  @media (min-width: ${MOBILE_BREAKPOINT}) {
  }

  @media (max-width: ${MOBILE_BREAKPOINT}) {
  }
`
const GreenBox = styled.div`
  background-color: green;
  justify-content: space-between;
  width: 100%;

  padding: 8px;
  gap: 8px;
  @media (min-width: ${MOBILE_BREAKPOINT}) {
    height: 10%;
    display: flex;
    flex-direction: row;
  }

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    height: 20%;
    display: grid;
    flex-direction: column;
    align-items: center;
    grid-template-columns: 2fr 1fr 2fr;
    grid-template-rows: 1fr 1fr;
  }
`
const PinkBox1 = styled.div`
  background-color: pink;
  height: 100%;
  width: 80px;
  grid-column: 2;
  grid-row: 1;
`
const PinkBox2 = styled.div`
  background-color: pink;
  height: 100%;
  width: 300px;
  grid-column: 2;
  grid-row: 2;
`

const RedBox = styled.div`
  display: flex;
  flex-direction: column;
  background-color: red;

  flex-grow: 1;
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
const BlueBox = styled.div`
  flex: 0 0 auto;
  width: 100%;
  height: 100px;
  background-color: blue;
`

export const Module23 = () => {
  const blueboxes = Array.from({ length: 8 }).map((_, index) => (
    <BlueBox key={index} />
  ))
  return (
    <ModuleWrapper>
      <Container>
        <GreenBox>
          <PinkBox1 />
          <PinkBox2 />
        </GreenBox>
        <RedBox>{blueboxes}</RedBox>
      </Container>
    </ModuleWrapper>
  )
}
