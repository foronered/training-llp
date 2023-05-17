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
  padding-left: 300px;
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

const BlueBox = styled.div`
  width: 100%;
  height: 100%;
  padding-left: 16px;
  padding-top: 8px;
  padding-right: 16px;

  @media (min-width: ${MOBILE_BREAKPOINT}) {
    background-color: blue;
  }

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    background-color: blue;
  }
`

export const Module8 = () => {
  return (
    <ModuleWrapper>
      <Container>
        <BlueBox>
          <GreenBox />
        </BlueBox>
      </Container>
    </ModuleWrapper>
  )
}
