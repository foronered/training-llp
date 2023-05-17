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
  background-color: blue;
  padding-left: 16px;
  padding-right: 16px;
  padding-bottom: 8px;
  padding-top: 8px;
`
const GreenBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: left;

  @media (min-width: ${MOBILE_BREAKPOINT}) {
    background-color: #49ff49;
  }
`
const RedBox = styled.div`
  width: 25%;
  height: 100%;

  @media (min-width: ${MOBILE_BREAKPOINT}) {
    background-color: red;
  }
`

const OrangeBox = styled.div`
  width: 25%;
  height: 100%;

  @media (min-width: ${MOBILE_BREAKPOINT}) {
    background-color: orange;
  }
`

export const Module7 = () => {
  return (
    <ModuleWrapper>
      <Container>
        <GreenBox>
          <RedBox />
          <OrangeBox />
        </GreenBox>
      </Container>
    </ModuleWrapper>
  )
}
