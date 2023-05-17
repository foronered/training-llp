import React from 'react'
import styled from 'styled-components'
import { MOBILE_BREAKPOINT } from '../constants'
import { ModuleWrapper } from './common'

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
`
const RedBox = styled.div`
  flex: 0 0 300px;
  height: 100%;
  padding: 8px;
  gap: 8px;
  display: flex;
  flex-direction: column;
  background-color: red;
`

// add a comment

const BlueBox = styled.div`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  overflow-y: auto;
  gap: 8px;
  padding: 16px;
  background-color: blue;
`
const RedSquare = styled.div`
  height: 200px;
  aspect-ratio: 1;
  background-color: Red;
`
const GreenButton = styled.div`
  height: 40px;
  width: 100%;
  display: flex;
  background-color: green;
`

export const Module11 = () => {
  return (
    <ModuleWrapper>
      <Container>
        <RedBox>
          <GreenButton />
          <GreenButton />
          <GreenButton />
          <GreenButton />
          <GreenButton />
        </RedBox>
        <BlueBox>
          {[...Array(36)].map((_, idx) => (
            <RedSquare key={idx} />
          ))}
        </BlueBox>
      </Container>
    </ModuleWrapper>
  )
}
