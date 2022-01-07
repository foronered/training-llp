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

  background-color: rgb(71, 159, 248);
  
  @media (min-width: ${MOBILE_BREAKPOINT}) {
    background-color: red;
  }
`

export const Module4 = () => {
  return (
    <ModuleWrapper>
      <Container>
        <RedBox />
      </Container>
    </ModuleWrapper>
  )
}
