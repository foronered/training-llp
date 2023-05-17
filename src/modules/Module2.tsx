import React from 'react'
import styled from 'styled-components'
import { MOBILE_BREAKPOINT } from '../constants'
import { ModuleWrapper } from './common'

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: blue;
  justify-content: space-evenly;
`

const RedBox = styled.div`
  width: 200px;
  height: 200px;
  background-color: red;
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
