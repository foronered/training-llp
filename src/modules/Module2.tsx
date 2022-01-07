import React from 'react'
import styled from 'styled-components'
import {ModuleWrapper} from './common'
import {MOBILE_BREAKPOINT} from "../constants";


const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background-color: blue;

  @media (min-width: ${MOBILE_BREAKPOINT}) {
    flex-direction: row;
  }
`

const RedBox = styled.div`
  width: 150px;  // The container is only 600px tall, so in order to get the spaced effect we need to shrink the boxes
  height: 150px;
  background-color: red;

  @media (min-width: ${MOBILE_BREAKPOINT}) {
    width: 200px;
    height: 200px;
  }
`

export const Module2 = () => {
  return (
    <ModuleWrapper>
      <Container>
        <RedBox/>
        <RedBox/>
        <RedBox/>
      </Container>
    </ModuleWrapper>
  )
}
