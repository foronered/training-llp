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
  width: 200px;
  height: 200px;
  
  padding: 16px 16px 0 16px;
  display: flex;
  flex-direction: column;
  background-color: red;
  
  overflow: scroll;
`

const GreenRectangle = styled.div`
  width: 100%;
  flex: 0 0 40px;
  
  margin: 0 0 16px 0;
  
  background-color: lime;
`

export const Module13 = () => {
  return (
    <ModuleWrapper>
      <Container>
        <RedBox>
          <GreenRectangle />
          <GreenRectangle />
          <GreenRectangle />
          <GreenRectangle />
          <GreenRectangle />
        </RedBox>
        <RedBox>
          <GreenRectangle />
          <GreenRectangle />
          <GreenRectangle />
          <GreenRectangle />
          <GreenRectangle />
        </RedBox>
      </Container>
    </ModuleWrapper>
  )
}
