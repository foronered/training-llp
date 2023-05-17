import React from 'react'
import styled from 'styled-components'
import { MOBILE_BREAKPOINT } from '../constants'
import { ModuleWrapper } from './common'

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
`
const RedColumn = styled.div`
  flex: 0 0 300px;
  height: 100%;
  padding: 8px;
  gap: 8px;
  display: flex;
  flex-direction: column;
  background-color: red;
`
const BlueBotton = styled.div`
  height: 40px;
  background-color: green;
`
const BlueBox = styled.div`
  flex: 1;
  padding: 16px;
  gap: 8px;
  display: flex;
  flex-wrap: wrap;
  overflow-y: auto;
  background-color: blue;
`
const RedBox = styled.div`
  height: 200px;
  width: 200px;
  background-color: red;
`
export const Module11 = () => {
  return (
    <ModuleWrapper>
      <Container>
        <RedColumn>
          <BlueBotton />
          <BlueBotton />
          <BlueBotton />
          <BlueBotton />
          <BlueBotton />
        </RedColumn>
        <BlueBox>
          {[...Array(36)].map((_, idx) => (
            <RedBox key={idx} />
          ))}
        </BlueBox>
      </Container>
    </ModuleWrapper>
  )
}
