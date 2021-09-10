import React from 'react'
import styled from 'styled-components'
import { ModuleWrapper } from './common'
import { DESKTOP_STYLE, MOBILE_BREAKPOINT, MOBILE_STYLE } from '../constants'

const Container = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  align-items: center;
  background-color: blue;

  ${DESKTOP_STYLE} {
    flex-direction: row;
    justify-content: space-evenly;
  }

  ${MOBILE_STYLE} {
    flex-direction: column;
    justify-content: space-evenly;
    align-items: ;
  }
`

const RedBox = styled.div`
  width: 150px;
  height: 150px;
  background-color: red;
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
