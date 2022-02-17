import React from 'react'
import styled from 'styled-components'
import { ModuleWrapper, DESKTOP_STYLE, MOBILE_STYLE } from './common'

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background-color: blue;

  ${DESKTOP_STYLE} {
    flex-direction: row;
  }

  ${MOBILE_STYLE} {
    flex-direction: column;
  }
`

const RedBox = styled.div`
  width: 200px;
  height: 200px;
  background-color: red;

  ${MOBILE_STYLE} {
    height: 150px;
    width: 150px;
  }
`

export const Module2 = () => {
  return (
    <ModuleWrapper>
      <Container>
        <RedBox />
        <RedBox />
        <RedBox />
      </Container>
    </ModuleWrapper>
  )
}
