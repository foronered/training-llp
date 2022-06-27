import React from 'react'
import styled from 'styled-components'
import { MOBILE_BREAKPOINT } from '../../constants'
import { ModuleWrapper } from '../common'

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content:flex-start;
  background-color: blue;
  @media (max-width: ${MOBILE_BREAKPOINT}) {
    flex-direction: column;
  }
`

const RedBox = styled.div`
  min-width: 300px;
  min-height: 64px;
  background-color: red;
`

const PurpleBox = styled.div`
  padding: 8px;
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 8px;
  align-content: start;
  background-color: purple;
  width: calc(100% - 32px);
  margin: 0 16px;
  margin-top: 8px;
  @media (max-width: ${MOBILE_BREAKPOINT}) {
    display: flex;
    background-color: transparent;
    flex-direction: column;
    align-items: center;
    
  }
  
`
const SmallBox = styled.div`
width: 100%;
aspect-ratio: 1;
background-color: red;
@media (max-width: ${MOBILE_BREAKPOINT}) {
  width: 250px;
}
`

export const Module9 = () => {
  return (
    <ModuleWrapper>
      <Container>
        <RedBox/>
        <PurpleBox>
          <SmallBox/>
          <SmallBox/>
          <SmallBox/>
          <SmallBox/>
          <SmallBox/>
          <SmallBox/>
        </PurpleBox>
      </Container>
    </ModuleWrapper>
  )
}
