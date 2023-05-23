import React from 'react'
import styled from 'styled-components'
import { DESKTOP_STYLE, MOBILE_BREAKPOINT, MOBILE_STYLE } from '../constants'
import { ModuleWrapper } from './common'

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  background-color: blue;
  padding: 8px 16px;
`

const RedBox = styled.div`
  width: 100%;
  height: 100%;

  ${DESKTOP_STYLE} {
    background-color: red;
  }
  ${MOBILE_STYLE} {
    background-color: lightskyblue;
  }
`

export const Module4 = () => {
  return (
    <ModuleWrapper>
      <Container>
        <RedBox />
      </Container>
    </ModuleWrapper>
  )
}
