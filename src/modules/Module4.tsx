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
  }

  ${MOBILE_STYLE} {
    padding: 75px;
  }
`

const BlueBox = styled.div`
  width: 100%;
  height: 100%;

  ${DESKTOP_STYLE} {
    background-color: red;
    padding: 8px 16px;
  }

  ${MOBILE_STYLE} {
    background-color: dodgerblue;
    padding: 75px;
  }
`

export const Module4 = () => {
  return (
    <ModuleWrapper>
      <Container>
        <BlueBox />
      </Container>
    </ModuleWrapper>
  )
}
