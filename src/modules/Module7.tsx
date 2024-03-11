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
  padding: 8px 16px;
  flex-wrap: wrap;
  @media (min-width: ${MOBILE_BREAKPOINT}) {
  }

  @media (max-width: ${MOBILE_BREAKPOINT}) {
  }
`

const RedBox = styled.div`
  background-color: red;
  @media (min-width: ${MOBILE_BREAKPOINT}) {
    width: 25%;
    height: 100%;
  }

  @media (max-width: ${MOBILE_BREAKPOINT}) {
  }
  width: 50%;
  height: 25%;
`
const GreenBox = styled.div`
  background-color: green;
  @media (min-width: ${MOBILE_BREAKPOINT}) {
    width: 50%;
    height: 100%;
  }

  @media (max-width: ${MOBILE_BREAKPOINT}) {
  }
  width: 100%;
  height: 75%;
`
const OrangeBox = styled.div`
  background-color: orange;

  @media (min-width: ${MOBILE_BREAKPOINT}) {
    width: 25%;
    height: 100%;
  }

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    width: 50%;
    height: 25%;
  }
`

export const Module7 = () => {
  return (
    <ModuleWrapper>
      <Container>
        <RedBox />
        <OrangeBox />
        <GreenBox />
      </Container>
    </ModuleWrapper>
  )
}
