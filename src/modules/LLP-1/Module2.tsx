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
`

const RedBox = styled.div`
  flex: 0 0 200px;
  height: 200px;

  @media (min-width: ${MOBILE_BREAKPOINT}) {
    background-color: firebrick;
  }

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    background-color: firebrick;
  }
`

export const Module2 = () => {
  return (
    <ModuleWrapper>
      <Container>
        <RedBox />
        <RedBox />
        <RedBox />
      </Container>
    </ModuleWrapper>
  )
}
