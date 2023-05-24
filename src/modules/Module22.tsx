import React from 'react'
import styled from 'styled-components'
import { DESKTOP_STYLE, MOBILE_BREAKPOINT, MOBILE_STYLE } from '../constants'
import { ModuleWrapper } from './common'

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  background-color: blue;
  justify-content: center;
  ${DESKTOP_STYLE} {
    gap: 40px;
    height: 100%;
  }
  ${MOBILE_STYLE} {
    gap: 70px;
    height: 100%;
    padding-top: 90px;
    flex-direction: column;
    overflow-x: auto;
  }
`

const RedBox = styled.div`
  // Couldn't make blue container scrollable
  width: 400px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  gap: 20px;
  background-color: red;
  ${DESKTOP_STYLE} {
    height: 400px;
  }
  ${MOBILE_STYLE} {
    height: 400px;
  }
`
const GreenBox = styled.div`
  flex: 0 0 60px;
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
