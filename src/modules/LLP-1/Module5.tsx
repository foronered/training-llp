import React from 'react'
import styled from 'styled-components'
import { MOBILE_BREAKPOINT } from '../../constants'
import { ModuleWrapper } from '../common'

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 8px 16px;
  background-color: blue;
`

const RedBox = styled.div`
  flex: 1;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: ${MOBILE_BREAKPOINT}) {
    background-color: firebrick;
  }

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    background-color: firebrick;
  }
`

const GreenBox = styled.div`
  flex: 0 0 64px;
  height: 64px;

  background-color: green;
`

const BlueBox = styled.div`
  flex: 0 0 256px;
  height: 64px;

  background-color: blue;
`

const OrangeBox = styled.div`
  flex: 0 0 128px;
  height: 64px;

  background-color: orange;
`

export const Module5 = () => {
  return (
    <ModuleWrapper>
      <Container>
        <RedBox>
          <GreenBox />
          <BlueBox />
          <OrangeBox />
        </RedBox>
      </Container>
    </ModuleWrapper>
  )
}
