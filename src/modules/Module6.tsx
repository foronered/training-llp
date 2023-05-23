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
  padding: 8px 16px;
`

const GreenBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  background-color: #60d937;

  ${DESKTOP_STYLE} {
    align-items: center;
    flex-direction: row;
  }
  ${MOBILE_STYLE} {
    flex-direction: column;
  }
`

const RedBox = styled.div`
  display: flex;
  background-color: red;
  ${DESKTOP_STYLE} {
    flex: 0 0 300px;
    height: 100%;
  }
  ${MOBILE_STYLE} {
    flex: 0 0 300px;
    width: 100%;
  }
`

export const Module6 = () => {
  return (
    <ModuleWrapper>
      <Container>
        <GreenBox>
          <RedBox />
        </GreenBox>
      </Container>
    </ModuleWrapper>
  )
}
