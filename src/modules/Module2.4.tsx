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
`
const GreenBox = styled.div`
  display: flex;
  background-color: green;
  align-items: center;
  width: 100%;
  height: auto;
  padding: 8px;
  gap: 16px;
  @media (min-width: ${MOBILE_BREAKPOINT}) {
    flex-direction: row;
    justify-content: space-between;
  }

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    flex-direction: column;
    justify-content: flex-start;
  }
`
const PinkBox1 = styled.div`
  background-color: pink;
  height: 60px;
  width: 80px;
`
const PinkBox2 = styled.div`
  background-color: pink;
  height: 60px;
  width: 300px;
  @media (min-width: ${MOBILE_BREAKPOINT}) {
  }

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    display: none;
  }
`
const PinkBox21 = styled.div`
  background-color: pink;
  height: 60px;
  width: 300px;
`

const GhostContainer = styled.div`
  display: flex;
  background-color: green;
  height: auto;
  width: 500px;
  gap: 8px;
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
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 0 0 auto;
  width: 100%;
  height: 100px;
  background-color: blue;
`
const YellowBox = styled.div`
  flex: 0 0 auto;
  width: 50px;
  height: 50px;
  background-color: yellow;
`

export const Module24 = () => {
  const blueboxes = Array.from({ length: 8 }).map((_, index) => (
    <BlueBox key={index}>
      <YellowBox />
    </BlueBox>
  ))
  return (
    <ModuleWrapper>
      <Container>
        <GreenBox>
          <PinkBox1 />
          <PinkBox2 />
        </GreenBox>
        <RedBox>{blueboxes}</RedBox>
        <GreenBox>
          <GhostContainer>
            <PinkBox21 />
            <PinkBox1 />
          </GhostContainer>
          <PinkBox1 />
        </GreenBox>
      </Container>
    </ModuleWrapper>
  )
}
