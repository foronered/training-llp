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
  display: flex;
  padding: 20px;
  overflow-y: auto;
  background-color: red;
`
const Box = styled.div`
  flex: 1;
  height: 2000px;
  ${DESKTOP_STYLE} {
    background-color: green;
  }
  ${MOBILE_STYLE} {
    background-color: gold;
  }
`

export const Module21 = () => {
  return (
    <ModuleWrapper>
      <Container>
        <RedBox>
          <Box />
        </RedBox>
      </Container>
    </ModuleWrapper>
  )
}
