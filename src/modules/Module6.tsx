import React from 'react'
import styled from 'styled-components'
import { DESKTOP_STYLE, MOBILE_BREAKPOINT, MOBILE_STYLE } from '../constants'
import { ModuleWrapper } from './common'

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  padding: 8px 16px;
  background-color: blue;
  ${MOBILE_STYLE} {
    flex-direction: column;
  }
`
const RedBox = styled.div`
  flex: 0 0 300px;
  height: 100%;
  background-color: red;
`

const GreenBox = styled.div`
  //Why (flex: 0 0 100%;) instead of (flex: 1;) doesn't work?
  flex: 1;
  height: 100%;
  background-color: #49ff49;
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
