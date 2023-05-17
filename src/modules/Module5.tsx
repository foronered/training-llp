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

const RedBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: ${MOBILE_BREAKPOINT}) {
    background-color: red;
  }

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    background-color: red;
  }
`
const OrangeBox = styled.div`
  width: 128px;
  height: 64px;

  @media (min-width: ${MOBILE_BREAKPOINT}) {
    background-color: orange;
  }

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    background-color: orange;
  }
`
const BlueBox = styled.div`
  width: 256px;
  height: 64px;

  @media (min-width: ${MOBILE_BREAKPOINT}) {
    background-color: #00a1ff;
  }

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    background-color: #00a1ff;
  }
`
const GreenBox = styled.div`
  width: 64px;
  height: 64px;

  @media (min-width: ${MOBILE_BREAKPOINT}) {
    background-color: #60d937;
  }

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    background-color: #60d937;
  }
`

export const Module5 = () => {
  return (
    <ModuleWrapper>
      <Container>
        <RedBox>
          <GreenBox />
          <BlueBox />
          <OrangeBox />
        </RedBox>
      </Container>
    </ModuleWrapper>
  )
}
