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
`

const Text = styled.p`
  color: white;
  font-size: 20px;
  font-weight: bold;
`

const RedBox = styled.div`
  width: 200px;
  height: 200px;

  @media (min-width: ${MOBILE_BREAKPOINT}) {
    background-color: red;
  }

  @media (min-width: ${MOBILE_BREAKPOINT}) {
    background-color: red;
  }
`

export const Module1 = () => {
  return (
    <ModuleWrapper>
      <Container>
        <Text>This is Module 1</Text>
        <RedBox />
      </Container>
    </ModuleWrapper>
  )
}
