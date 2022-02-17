import React from 'react'
import styled from 'styled-components'
import { DESKTOP_STYLE, MOBILE_STYLE, ModuleWrapper } from './common'

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: blue;

  ${DESKTOP_STYLE} {
    padding: 8px 16px;
    flex-direction: row;
  }

  ${MOBILE_STYLE} {
    padding: 75px;
    flex-direction: column;
  }
`

const RedContainer = styled.div`
  background-color: red;

  ${DESKTOP_STYLE} {
    width: 300px;
    height: 100%;
  }

  ${MOBILE_STYLE} {
    width: 100%;
    flex: 1;
  }
`

const GreenContainer = styled.div`
  background-color: greenyellow;

  ${DESKTOP_STYLE} {
    height: 100%;
    flex: 1;
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
        <RedContainer />
        <GreenContainer />
      </Container>
    </ModuleWrapper>
  )
}
