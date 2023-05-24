import React from 'react'
import styled from 'styled-components'
import { DESKTOP_STYLE, MOBILE_BREAKPOINT, MOBILE_STYLE } from '../constants'
import { ModuleWrapper } from './common'

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  ${MOBILE_STYLE} {
    flex-direction: column;
  }
`
const RedColumn = styled.div`
  height: 100%;
  background-color: red;
  ${DESKTOP_STYLE} {
    flex: 0 0 300px;
  }
  ${MOBILE_STYLE} {
    flex: 0 0 150px;
  }
`
const BlueBox = styled.div`
  flex: 1;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 8px;
  display: flex;
  background-color: blue;
`
const PurpleBox = styled.div`
  flex: 0 0 100%;
  height: 100%;
  padding: 8px;
  gap: 8px;
  display: flex;
  ${DESKTOP_STYLE} {
    background-color: DarkViolet;
  }
  ${MOBILE_STYLE} {
    background-color: blue;
    flex-direction: column;
    padding: 8px 250px;
    gap: 16px;
  }
`
const RedBox = styled.div`
  background-color: red;
  ${DESKTOP_STYLE} {
    flex: 1;
  }
  ${MOBILE_STYLE} {
    flex: 1;
    aspect-ratio: 1;
  }
`

export const Module9 = () => {
  return (
    <ModuleWrapper>
      <Container>
        <RedColumn />
        <BlueBox>
          <PurpleBox>
            <RedBox />
            <RedBox />
            <RedBox />
          </PurpleBox>
        </BlueBox>
      </Container>
    </ModuleWrapper>
  )
}
