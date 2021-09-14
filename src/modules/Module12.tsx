import React from 'react'
import styled from 'styled-components'
import { DESKTOP_STYLE, MOBILE_STYLE } from '../constants'
import { ModuleWrapper } from './common'

const Container = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: blue;
`

const RedBox = styled.div`
  width: 304px;
  height: 304px;
  background-color: red;
  overflow-y: scroll;
  display: flex;

  ${DESKTOP_STYLE} {
    padding: 8px;
  }

  ${MOBILE_STYLE} {
    padding: 32px;
  }
`

const GreenBox = styled.div`
  flex: 1;
  height: 800px;

  ${DESKTOP_STYLE} {
    background-color: green;
  }

  ${MOBILE_STYLE} {
    background-color: orange;
  }
`

export const Module12 = () => {
  return (
    <ModuleWrapper>
      <p>Module 12 - LLP2</p>
      <Container>
        <RedBox>
          <GreenBox />
        </RedBox>
      </Container>
    </ModuleWrapper>
  )
}
