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

const GreenBox = styled.div`
  background-color: green;
  width: 100%;
  height: 100%;
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
