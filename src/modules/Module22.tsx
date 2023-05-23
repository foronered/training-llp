import React from 'react'
import styled from 'styled-components'
import { DESKTOP_STYLE, MOBILE_BREAKPOINT, MOBILE_STYLE } from '../constants'
import { ModuleWrapper } from './common'

const Container = styled.div`
  width: 100%;
  height: 100%;
  gap: 16px;
  padding-top: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: blue;

  ${DESKTOP_STYLE} {
  }
  ${MOBILE_STYLE} {
    flex-direction: column;
    overflow-y: auto;
  }
`

const RedBox = styled.div`
  width: 400px;
  padding: 16px;
  gap: 8px;
  display: flex;
  align-content: flex-start;
  flex-direction: column;
  overflow-y: auto;
  background-color: red;
  ${DESKTOP_STYLE} {
    height: 400px;
  }
  ${MOBILE_STYLE} {
    flex: 400px;
  }
`
const GreenBox = styled.div`
  flex: 0 0 80px;
  width: 100%;
  background-color: green;
`

export const Module22 = () => {
  return (
    <ModuleWrapper>
      <Container>
        <RedBox>
          <GreenBox />
          <GreenBox />
          <GreenBox />
          <GreenBox />
          <GreenBox />
          <GreenBox />
          <GreenBox />
        </RedBox>
        <RedBox>
          <GreenBox />
          <GreenBox />
          <GreenBox />
          <GreenBox />
          <GreenBox />
          <GreenBox />
          <GreenBox />
        </RedBox>
      </Container>
    </ModuleWrapper>
  )
}
