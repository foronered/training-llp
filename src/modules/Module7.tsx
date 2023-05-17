import React from 'react'
import styled from 'styled-components'
import { MOBILE_BREAKPOINT } from '../constants'
import { ModuleWrapper } from './common'

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  padding: 8px 16px;
  background-color: blue;
`
const RedBox = styled.div`
  flex: 0 0 25%;
  height: 100%;
  background-color: red;
`
const OrangeBox = styled.div`
  flex: 0 0 25%;
  height: 100%;
  background-color: orange;
`
const GreenBox = styled.div`
  flex: 1;
  height: 100%;
  background-color: #49ff49;
`

export const Module7 = () => {
  return (
    <ModuleWrapper>
      <Container>
        <RedBox />
        <OrangeBox />
        <GreenBox />
      </Container>
    </ModuleWrapper>
  )
}
