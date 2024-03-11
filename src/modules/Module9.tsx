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
  flex-wrap: wrap;
`

const RedBox = styled.div`
  background-color: red;
  @media (min-width: ${MOBILE_BREAKPOINT}) {
    width: 300px;
    height: 100%;
  }

  @media (max-width: ${MOBILE_BREAKPOINT}) {
  }
  width: 100%;
  height: 25%;
`
const BlueBox = styled.div`
  background-color: blue;
  padding: 8px 16px 0px;
  height: 100%;
  @media (min-width: ${MOBILE_BREAKPOINT}) {
    flex: 1;
  }

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    width: 100%;
  }
`

const VioletBox = styled.div`
  @media (min-width: ${MOBILE_BREAKPOINT}) {
    padding: 8px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    background-color: violet;
    width: 100%;
    height: 100%;
    gap: 8px;
  }

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    padding: 8px;
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: blue;
    width: 100%;
    height: 100%;
    gap: 8px;
  }
`
const MiniRedBox = styled.div`
  background-color: red;

  @media (min-width: ${MOBILE_BREAKPOINT}) {
    width: 100%;
    height: 100%;
  }

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    width: 100px;
    height: 100px;
  }
`
export const Module9 = () => {
  const redSquares = Array.from({ length: 6 }).map((_, index) => (
    <MiniRedBox key={index} />
  ))
  return (
    <ModuleWrapper>
      <Container>
        <RedBox />
        <BlueBox>
          <VioletBox>{redSquares}</VioletBox>
        </BlueBox>
      </Container>
    </ModuleWrapper>
  )
}
