import React from 'react'
import styled from 'styled-components'
import { MOBILE_BREAKPOINT } from '../constants'
import { ModuleWrapper } from './common'

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  gap: 40px;
  align-items: center;
  justify-content: center;
  background-color: blue;
`

const RedBox = styled.div`
  width: 400px;
  height: 400px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  gap: 20px;
  background-color: red;
`
const GreenBox = styled.div`
  flex: 0 0 60px;
  width: 100%;
  background-color: green;
`

export const Module22 = () => {
  return (
    <ModuleWrapper>
      <Container>
        <RedBox>
          {[...Array(36)].map((_, idx) => (
            <GreenBox key={idx} />
          ))}
        </RedBox>
        <RedBox>
          {[...Array(36)].map((_, idx) => (
            <GreenBox key={idx} />
          ))}
        </RedBox>
      </Container>
    </ModuleWrapper>
  )
}
