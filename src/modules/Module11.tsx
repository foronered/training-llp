import React from 'react'
import styled from 'styled-components'
import { DESKTOP_STYLE, MOBILE_BREAKPOINT, MOBILE_STYLE } from '../constants'
import { ModuleWrapper } from './common'

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  ${DESKTOP_STYLE} {
    flex-direction: row;
  }
  ${MOBILE_STYLE} {
    flex-direction: column;
    align-items: center;
    padding-top: 16px;
  }
`
const RedBox = styled.div`
  padding: 8px;
  gap: 8px;
  display: flex;
  background-color: red;
  ${DESKTOP_STYLE} {
    flex: 0 0 300px;
    height: 100%;
    flex-direction: column;
  }
  ${MOBILE_STYLE} {
    flex: 0 0 100px;
    width: 100%;
    flex-direction: column;
    overflow-x: auto;
    flex-wrap: wrap;
  }
`

const BlueBox = styled.div`
  flex: 1;
  display: flex;
  flex-wrap: wrap;

  overflow-y: auto;
  gap: 8px;
  padding: 16px;
  background-color: blue;
  ${DESKTOP_STYLE} {
    align-content: flex-start;
  }
  ${MOBILE_STYLE} {
    justify-content: center;
  }
`
const RedSquare = styled.div`
  height: 200px;
  aspect-ratio: 1;
  background-color: Red;
`
const GreenButton = styled.div`
  display: flex;
  background-color: green;
  ${DESKTOP_STYLE} {
    height: 40px;
    width: 100%;
  }
  ${MOBILE_STYLE} {
    width: 150px;
    height: 100%;
  }
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
