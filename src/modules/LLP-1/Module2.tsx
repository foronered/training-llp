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
    align-items: space-evenly;
  }
`

const RedBox = styled.div`
  flex: 0 0 200px;
  height: 200px;

  background-color: firebrick;

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    width: 200px;
  }

  // where should the gap between the red boxes come from
  // making the blue container bigger or the red boxes smaller?
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
