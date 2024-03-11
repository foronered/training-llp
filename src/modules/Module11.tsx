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
  }
`

const SideBar = styled.div`
  background-color: red;
  display: flex;
  padding: 8px;
  gap: 8px;

  @media (min-width: ${MOBILE_BREAKPOINT}) {
    width: 300px;
    height: 100%;
    flex-direction: column;
  }

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    width: 100%;
    height: 20%;
    flex-direction: row;
    align-items: center;
    overflow-x: scroll;
  }
`
const BlueBox = styled.div`
  overflow-y: scroll;
  background-color: blue;
  padding: 8px 16px 0px;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(3, 200px);
  grid-template-rows: repeat(12, 200px);
  gap: 8px;
  @media (min-width: ${MOBILE_BREAKPOINT}) {
    flex: 1;
  }

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    width: 100%;
  }
`

const RedBox = styled.div`
  background-color: red;
  width: 200px;
  height: 200px;
`

const MiniGreenBox = styled.div`
  background-color: green;
  flex: 0 0 auto;

  @media (min-width: ${MOBILE_BREAKPOINT}) {
    width: 100%;
    height: 40px;
  }

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    width: 150px;
    height: 40px;
  }
`

export const Module11 = () => {
  const greenboxes = Array.from({ length: 6 }).map((_, index) => (
    <MiniGreenBox key={index} />
  ))

  const redboxes = Array.from({ length: 36 }).map((_, index) => (
    <RedBox key={index} />
  ))
  return (
    <ModuleWrapper>
      <Container>
        <SideBar>{greenboxes}</SideBar>
        <BlueBox>{redboxes}</BlueBox>
      </Container>
    </ModuleWrapper>
  )
}
