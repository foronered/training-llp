import React from 'react'
import styled from 'styled-components'
import { MOBILE_BREAKPOINT } from '../constants'
import { ModuleWrapper } from './common'

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  background-color: blue;
`

const RedBox = styled.div`
  width: 200px;
  height: 200px;
  background-color: red;
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
