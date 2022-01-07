import React from 'react'
import styled from 'styled-components'
import {ModuleWrapper} from './common'
import {MOBILE_BREAKPOINT} from "../constants";


const Container = styled.div`
  width: 100%;
  height: 100%;

  padding: 8px 16px;

  display: flex;
  flex-wrap: wrap;
  background-color: blue;
`

const RedBox = styled.div`
  flex: 0 0 50%;
  height: 25%;
  
  background-color: red;

  @media (min-width: ${MOBILE_BREAKPOINT}) {
    flex: 0 0 25%;
    height: 100%;
  }
`

const OrangeBox = styled.div`
  flex: 0 0 50%;
  height: 25%;
  
  background-color: orange;

  @media (min-width: ${MOBILE_BREAKPOINT}) {
    flex: 0 0 25%;
    height: 100%;
  }
`

const GreenBox = styled.div`
  flex: 0 0 100%;
  height: 75%;
  
  background-color: lime;

  @media (min-width: ${MOBILE_BREAKPOINT}) {
    flex: 0 0 50%;
    height: 100%;
  }
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
