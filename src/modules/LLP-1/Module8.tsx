import React from 'react'
import styled from 'styled-components'
import { MOBILE_BREAKPOINT } from '../../constants'
import { ModuleWrapper } from '../common'

const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background-color: blue;

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    flex-direction: column;
  }
`

const RedBox = styled.div`
  flex: 0 0 300px;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: firebrick;

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    width: 100%;
    flex: 1;
  }
`

const BlueBox = styled.div`
  flex: 1;
  height: 100%;
  padding: 8px 16px;

  background-color: blue;

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    width: 100%;
    flex: 4;
  }
`

const GreenBox = styled.div`
  flex: 1;
  height: 100%;

  background-color: green;
`

export const Module8 = () => {
  return (
    <ModuleWrapper>
      <Container>
        <RedBox />

        <BlueBox>
          <GreenBox />
        </BlueBox>
      </Container>
    </ModuleWrapper>
  )
}
