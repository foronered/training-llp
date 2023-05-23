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
`

const RedBox = styled.div`
  width: 400px;
  height: 400px;
  padding: 16px;
  display: flex;
  overflow-y: auto;
  background-color: red;
`
const GreenBox = styled.div`
  flex: 1;
  height: 2000px;
  ${DESKTOP_STYLE} {
    background-color: green;
  }
  ${MOBILE_STYLE} {
    background-color: orange;
  }
`

export const Module21 = () => {
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
