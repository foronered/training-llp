import React from 'react'
import styled from 'styled-components'
import { DESKTOP_STYLE, MOBILE_BREAKPOINT, MOBILE_STYLE } from '../constants'
import { ModuleWrapper } from './common'

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: blue;
  justify-content: space-evenly;

  ${MOBILE_STYLE} {
    flex-direction: column;
  }
`

const RedBox = styled.div`
  width: 200px;
  height: 200px;
  background-color: red;
  ${MOBILE_STYLE} {
    background-color: green;
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
