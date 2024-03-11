import React from 'react'
import styled from 'styled-components'
import { MOBILE_BREAKPOINT } from '../constants'
import { ModuleWrapper } from './common'

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: blue;
  gap: 16px;
  @media (min-width: ${MOBILE_BREAKPOINT}) {
  }
  flex-direction: row;

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    flex-direction: column;
  }
`

const RedBox = styled.div`
  display: flex;
  flex-direction: column;
  background-color: red;
  width: 200px;
  height: 200px;
  padding: 8px 8px 0px;
  gap: 8px;
  overflow-y: scroll;
`
const GreenBox = styled.div`
  flex: 0 0 auto;
  width: 100%;
  height: 30px;
  background-color: green;
`

export const Module22 = () => {
  const greenboxes = Array.from({ length: 8 }).map((_, index) => (
    <GreenBox key={index} />
  ))
  return (
    <ModuleWrapper>
      <Container>
        <RedBox>{greenboxes}</RedBox>
        <RedBox>{greenboxes}</RedBox>
      </Container>
    </ModuleWrapper>
  )
}
