import React from 'react'
import styled from 'styled-components'
import { MOBILE_BREAKPOINT } from '../../constants'
import { ModuleWrapper } from '../common'

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 8px 16px;
  display: flex;
  background-color: blue;

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    flex-direction: column;
  }
`

const RedBox = styled.div`
  flex: 0 0 300px;
  height: 100%;

  background-color: firebrick;

  @media ((max-width: ${MOBILE_BREAKPOINT})) {
    width: 100%;
    flex: 1;
  }
`

// how to make red box bigger than green one?

const GreenBox = styled.div`
  flex: 1;
  height: 100%;

  background-color: green;
  @media (max-width: ${MOBILE_BREAKPOINT}) {
    flex: 3;
    width: 100%;
  }
`

export const Module6 = () => {
  return (
    <ModuleWrapper>
      <Container>
        <RedBox />
        <GreenBox />
      </Container>
    </ModuleWrapper>
  )
}
