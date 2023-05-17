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
  padding: 8px 16px;
`

const GreenBox = styled.div`
  flex: 2;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: left;
  background-color: #60d937;
`

const RedBox = styled.div`
  flex: 1;
  height: 100%;
  background-color: red;
`
const OrangeBox = styled.div`
  flex: 1;
  height: 100%;
  background-color: Orange;
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
