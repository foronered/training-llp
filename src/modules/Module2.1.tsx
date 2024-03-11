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

const RedBox = styled.div`
  background-color: red;
  width: 200px;
  height: 200px;
  padding: 8px 8px 0px;
  overflow-y: scroll;
`
const GreenBox = styled.div`
  width: 100%;
  height: 500px;
  @media (min-width: ${MOBILE_BREAKPOINT}) {
    background-color: green;
  }

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    background-color: orange;
  }
`

export const Module21 = () => {
  return (
    <ModuleWrapper>
      <Container>
        <RedBox>
          <GreenBox />
        </RedBox>
      </Container>
    </ModuleWrapper>
  )
}
