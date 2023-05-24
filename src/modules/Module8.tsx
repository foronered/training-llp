import React from 'react'
import styled from 'styled-components'
import { DESKTOP_STYLE, MOBILE_BREAKPOINT, MOBILE_STYLE } from '../constants'
import { ModuleWrapper } from './common'

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  ${MOBILE_STYLE} {
    flex-direction: column;
  }
`
const RedBox = styled.div`
  height: 100%;
  background-color: red;
  ${DESKTOP_STYLE} {
    flex: 0 0 300px;
  }
  ${MOBILE_STYLE} {
    flex: 0 0 150px;
  }
`
const BlueBox = styled.div`
  flex: 1;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 8px;
  background-color: blue;
`
const GreenBox = styled.div`
  flex: 1;
  height: 100%;
  background-color: #49ff49;
`
export const Module8 = () => {
  return (
    <ModuleWrapper>
      <Container>
        <RedBox />
        <BlueBox>
          <GreenBox />
        </BlueBox>
      </Container>
    </ModuleWrapper>
  )
}
