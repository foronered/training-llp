import React from 'react'
import styled from 'styled-components'
import {ModuleWrapper} from './common'
import {MOBILE_BREAKPOINT} from "../constants";


const Container = styled.div`
  width: 100%;
  height: 100%;

  padding: 8px 16px;

  display: flex;
  background-color: blue;
`

const RedBox = styled.div`
  flex: 1 0 auto;
  height: 100%;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: red;

  @media (min-width: ${MOBILE_BREAKPOINT}) {
    flex-direction: row;
  }
`

const GreenBox = styled.div`
  width: 64px;
  flex: 0 1 64px;
  
  background-color: lime;

  @media (min-width: ${MOBILE_BREAKPOINT}) {
    flex: 0 1 64px;
    height: 64px;
  }
`

const BlueBox = styled.div`
  width: 256px;
  flex: 0 1 64px;
  
  background-color: deepskyblue;

  @media (min-width: ${MOBILE_BREAKPOINT}) {
    flex: 0 1 256px;
    height: 64px;
  }
`

const OrangeBox = styled.div`
  width: 128px;
  flex: 0 1 64px;
  
  background-color: orange;

  @media (min-width: ${MOBILE_BREAKPOINT}) {
    flex: 0 1 128px;
    height: 64px;
  }
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
