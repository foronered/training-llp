import React from 'react'
import styled from 'styled-components'
import {ModuleWrapper} from './common'
import {MOBILE_BREAKPOINT} from "../constants";


const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  background-color: blue;
`

const RedBox = styled.div`
  width: 200px;
  height: 200px;
  
  padding: 16px;
  
  display: flex;
  flex-direction: column;
  background-color: red;
  
  overflow: scroll;
`

const GreenRectangle = styled.div`
  width: 100%;
  flex: 0 0 500%;

  background-color: orange;
  
  @media (min-width: ${MOBILE_BREAKPOINT}) {
    background-color: lime;
  }
`

export const Module12 = () => {
  return (
    <ModuleWrapper>
      <Container>
        <RedBox>
          <GreenRectangle />
        </RedBox>
      </Container>
    </ModuleWrapper>
  )
}
