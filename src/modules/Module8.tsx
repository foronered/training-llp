import React from 'react'
import styled from 'styled-components'
import { MOBILE_BREAKPOINT } from '../constants'
import { ModuleWrapper } from './common'

const RedBox = styled.div`
  width: 100%;
  height: 100%;
  padding-left: 300px;
  background-color: red;
`

const BlueBox = styled.div`
  width: 100%;
  height: 100%;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 8px;

  @media (min-width: ${MOBILE_BREAKPOINT}) {
    background-color: blue;
  }
`

const GreenBox = styled.div`
  width: 100%;
  height: 100%;

  @media (min-width: ${MOBILE_BREAKPOINT}) {
    background-color: #49ff49;
  }
`

export const Module8 = () => {
  return (
    <ModuleWrapper>
      <RedBox>
        <BlueBox>
          <GreenBox />
        </BlueBox>
      </RedBox>
    </ModuleWrapper>
  )
}
