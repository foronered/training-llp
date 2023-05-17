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
  padding-top: 8px;
  padding-bottom: 8px;
  padding-right: 16px;
`

const GreenBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: left;

  @media (min-width: ${MOBILE_BREAKPOINT}) {
    background-color: #60d937;
  }

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    background-color: #60d937;
  }
`

const RedBox = styled.div`
  width: 25%;
  height: 100%;

  @media (min-width: ${MOBILE_BREAKPOINT}) {
    background-color: red;
  }

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    background-color: red;
  }
`
const OrangeBox = styled.div`
  width: 25%;
  height: 100%;

  @media (min-width: ${MOBILE_BREAKPOINT}) {
    background-color: orange;
  }

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    background-color: Orange;
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
