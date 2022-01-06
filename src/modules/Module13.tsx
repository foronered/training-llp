import React from 'react'
import styled from 'styled-components'
import {ModuleWrapper} from './common'
import {MOBILE_BREAKPOINT} from "../constants";


const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background-color: blue;
`

const RedBox = styled.div`
  width: 200px;
  height: 200px;
  
  padding: 16px;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: red;
  
  overflow: scroll;

  @media (min-width: ${MOBILE_BREAKPOINT}) {
    :first-of-type {
      margin-right: -50%;
    }

    :last-of-type {
      margin-left: -50%;
    }
  }
`

const GreenRectangle = styled.div`
  width: 100%;
  height: 40px;
  
  margin: 8px 0;
  
  flex: 0 0 40px;
  background-color: rgb(129, 214,83);

  :first-of-type {
    margin: 0 0 8px 0;
  }

  :last-of-type {
    margin: 8px 0 0 0;
  }
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
