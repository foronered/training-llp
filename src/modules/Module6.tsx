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
const RedBox = styled.div`
  width: 100%;
  height: 100%;
  padding-left: 300px;

  @media (min-width: ${MOBILE_BREAKPOINT}) {
    background-color: red;
  }
`
const GreenBox = styled.div`
  width: 100%;
  height: 100%;

  @media (min-width: ${MOBILE_BREAKPOINT}) {
    background-color: #49ff49;
  }
`

export const Module6 = () => {
  return (
    <ModuleWrapper>
      <Container>
        <RedBox>
          <GreenBox />
        </RedBox>
      </Container>
    </ModuleWrapper>
  )
}
