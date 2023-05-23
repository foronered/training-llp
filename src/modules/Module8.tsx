import React from 'react'
import styled from 'styled-components'
import { DESKTOP_STYLE, MOBILE_BREAKPOINT, MOBILE_STYLE } from '../constants'
import { ModuleWrapper } from './common'

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  ${DESKTOP_STYLE} {
    flex-direction: row;
  }
  ${MOBILE_STYLE} {
    flex-direction: column;
  }
`
const RedBox = styled.div`
  flex: 0 0 300px;
  height: 100%;
  background-color: red;
`
const BlueBox = styled.div`
  flex: 1;
  padding-left: 16px;
  padding-top: 8px;
  padding-right: 16px;
  background-color: blue;
`

const GreenBox = styled.div`
  flex: 1;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  background-color: #60d937;
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
