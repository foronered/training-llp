import React from 'react'
import styled from 'styled-components'
import { MOBILE_BREAKPOINT } from '../../constants'
import { ModuleWrapper } from '../common'

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  background-color: blue;
  @media (max-width: ${MOBILE_BREAKPOINT}) {
    flex-direction: column;
    align-items: stretch;
  }
`

const RedBox = styled.div`
  width: 300px;
  min-height: 100px;
  background-color: red;
  @media (max-width: ${MOBILE_BREAKPOINT}) {
    width: 100%;
  }
`
const GreenBox = styled.div`
  height: 100%;
  min-width: calc(100% - 332px);
  margin: 0 16px;
  margin-top: 8px;
  background-color: lime;
`

export const Module8 = () => {
  return (
    <ModuleWrapper>
      <Container>
        <RedBox />
        <GreenBox />
      </Container>
    </ModuleWrapper>
  )
}
