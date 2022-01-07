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
  flex-direction: column;

  @media (min-width: ${MOBILE_BREAKPOINT}) {
    width: auto;
    height: 100%;
    flex-direction: row;
  }
`

const PurpleBox = styled.div`
  flex: 1 0 auto;
  width: 100%;
  
  padding: 8px;
  display: grid;
  grid-template: repeat(6, 150px) / repeat(1, 150px);
  justify-content: center;
  gap: 8px;
  
  @media (min-width: ${MOBILE_BREAKPOINT}) {
    width: auto;
    height: 100%;
    grid-template: repeat(2, 1fr) / repeat(3, 1fr);
    background-color: purple;  
  }
`

const RedBox = styled.div`
  background-color: red;
`

export const Module9 = () => {
  return (
    <ModuleWrapper>
      <Container>
        <RedSidebar />
        <ContentBox>
          <PurpleBox>
            <RedBox />
            <RedBox />
            <RedBox />
            <RedBox />
            <RedBox />
            <RedBox />
          </PurpleBox>
        </ContentBox>
      </Container>
    </ModuleWrapper>
  )
}
