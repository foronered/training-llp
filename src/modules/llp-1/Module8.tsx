import React from 'react'
import styled from 'styled-components'
import { MOBILE_BREAKPOINT } from '../../constants'
import { ModuleWrapper } from '../common'

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content:flex-start;
  background-color: blue;
  @media (max-width: ${MOBILE_BREAKPOINT}) {
    flex-direction: column;
  }
`

const RedBox = styled.div`
  min-width: 300px;
  min-height: 64px;
  background-color: red;
`
const GreenBox = styled.div`
height: 100%;
width: calc(100% - 32px);
margin: 0 16px;
margin-top: 8px;
background-color: lime;
`

export const Module8 = () => {
  return (
    <ModuleWrapper>
      <Container>
        <RedBox/>
        <GreenBox/>
      </Container>
    </ModuleWrapper>
  )
}
