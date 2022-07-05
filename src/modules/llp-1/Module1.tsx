import React from 'react'
import styled from 'styled-components'
import { DESKTOP_STYLE, MOBILE_STYLE } from '../../constants'
import { ModuleWrapper } from '../common'

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: blue;
`

const RedBox = styled.div`
  width: 200px;
  height: 200px;

  ${DESKTOP_STYLE} {
    background-color: red;
  }

  ${MOBILE_STYLE} {
    background-color: red;
  }
`

export const Module1 = () => {
  return (
    <ModuleWrapper>
      <Container>
        <RedBox />
      </Container>
    </ModuleWrapper>
  )
}
