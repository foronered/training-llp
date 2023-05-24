import React from 'react'
import styled from 'styled-components'
import { DESKTOP_STYLE, MOBILE_BREAKPOINT, MOBILE_STYLE } from '../constants'
import { ModuleWrapper } from './common'

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  ${DESKTOP_STYLE} {
  }
  ${MOBILE_STYLE} {
    flex-direction: column;
  }
`
const RedColumn = styled.div`
  gap: 8px;
  display: flex;
  background-color: red;
  padding: 8px;
  ${DESKTOP_STYLE} {
    flex: 0 0 300px;
    flex-direction: column;
  }
  ${MOBILE_STYLE} {
    flex: 0 0 100px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow-x: auto;
    flex-wrap: wrap;
  }
`
const GreenButton = styled.div`
  height: 40px;
  background-color: green;
  ${DESKTOP_STYLE} {
    width: 100%;
  }
  ${MOBILE_STYLE} {
    width: 200px;
  }
`
const BlueBox = styled.div`
  flex: 1;
  padding: 16px;
  display: flex;
  flex-wrap: wrap;
  overflow-y: auto;
  background-color: blue;
  ${DESKTOP_STYLE} {
    gap: 8px;
  }
  ${MOBILE_STYLE} {
    padding-top: 70px;
    gap: 20px;
    justify-content: center;
  }
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
          <GreenButton />
          <GreenButton />
          <GreenButton />
          <GreenButton />
          <GreenButton />
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
