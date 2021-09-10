import React from 'react'
import styled from 'styled-components'
import { DESKTOP_STYLE, MOBILE_STYLE } from '../constants'
import { ModuleWrapper } from './common'

const Container = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  background-color: blue;
  ${DESKTOP_STYLE} {
    flex-direction: row;
  }

  ${MOBILE_STYLE} {
    flex-direction: column;
  }
`

// Navbar
const RedBox = styled.div`
  background-color: red;

  ${DESKTOP_STYLE} {
    flex: 0 0 304px;
    height: 100%;
  }

  ${MOBILE_STYLE} {
    flex: 0 0 64px;
    width: 100%;
  }
`

// View
const ViewContainer = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  background-color: blue;

  ${DESKTOP_STYLE} {
    padding: 8px 16px 0px 16px;
  }

  ${MOBILE_STYLE} {
    padding: 40px 64px 0px 64px;
  }
`

// replace width with flex 1
const GreenBox = styled.div`
  flex: 1;
  height: 100%;
  background-color: lime;
`

export const Module8 = () => {
  return (
    <ModuleWrapper>
      <Container>
        <RedBox />
        <ViewContainer>
          <GreenBox />
        </ViewContainer>
      </Container>
    </ModuleWrapper>
  )
}
