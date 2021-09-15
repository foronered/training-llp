import React from 'react'
import styled from 'styled-components'
import { DESKTOP_STYLE, MOBILE_STYLE } from '../constants'
import { ModuleWrapper } from './common'

const Container = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  background-color: blue;
  padding: 8px 16px;

  ${DESKTOP_STYLE} {
    flex-direction: row;
  }

  ${MOBILE_STYLE} {
    flex-direction: column;
  }
`
const RedBox = styled.div`
  background-color: red;
  ${DESKTOP_STYLE} {
    flex: 0 0 304px;
    height: 100%;
  }

  ${MOBILE_STYLE} {
    flex: 1;
    width: 100%;
  }
`

const GreenBox = styled.div`
  background-color: lime;
  ${DESKTOP_STYLE} {
    flex: 1;
    height: 100%;
  }

  ${MOBILE_STYLE} {
    flex: 2;
    width: 100%;
  }
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
