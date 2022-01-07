import React from 'react'
import styled from 'styled-components'
import {ModuleWrapper} from './common'
import {MOBILE_BREAKPOINT} from "../constants";


const Container = styled.div`
  width: 100%;
  height: 100%;
  
  display: flex;
  flex-direction: column;
  background-color: blue;

  @media (min-width: ${MOBILE_BREAKPOINT}) {
    flex-direction: row;
  }
`

const RedSidebar = styled.div`
  flex: 0 0 150px;
  width: 100%;
  
  background-color: red;
  
  @media (min-width: ${MOBILE_BREAKPOINT}) {
    flex: 0 0 300px;
    width: auto;
    height: 100%;
  }
`

const ContentBox = styled.div`
  flex: 1 0 auto;
  width: 100%;

  padding: 8px 16px 0 16px;
  display: flex;

  @media (min-width: ${MOBILE_BREAKPOINT}) {
    width: auto;
    height: 100%;
  }
`

const GreenBox = styled.div`
  flex: 1 0 auto;
  width: 100%;
  
  background-color: lime;

  @media (min-width: ${MOBILE_BREAKPOINT}) {
    width: auto;
    height: 100%;
  }
`

export const Module8 = () => {
  return (
    <ModuleWrapper>
      <Container>
        <RedSidebar />
        <ContentBox>
          <GreenBox />
        </ContentBox>
      </Container>
    </ModuleWrapper>
  )
}
