import React from 'react'
import styled from 'styled-components'
import { DESKTOP_STYLE, MOBILE_BREAKPOINT, MOBILE_STYLE } from '../constants'
import { ModuleWrapper } from './common'

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: blue;
`

const RedBox = styled.div`
  flex: 1;
  width: 100%;
  padding: 16px;
  gap: 8px;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  background-color: red;
  align-items: center;
  ${MOBILE_STYLE} {
    flex: 3;
  }
`
const EmptyBox = styled.div`
  display: flex;
  padding: 16px;
  ${DESKTOP_STYLE} {
    width: 100%;
    height: 80px;
    justify-content: space-between;
  }
  ${MOBILE_STYLE} {
    width: 60%;
    height: 100%;
    flex-direction: column;
    gap: 16px;
  }
`
const GreenBox = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  background-color: green;
  ${MOBILE_STYLE} {
    flex: 1;
    justify-content: center;
  }
`
const BlueBox = styled.div`
  flex: 0 0 90px;
  background-color: blue;
  ${DESKTOP_STYLE} {
    width: 100%;
  }
  ${MOBILE_STYLE} {
    width: 50%;
  }
`
const PinkBox = styled.div`
  background-color: pink;
  ${DESKTOP_STYLE} {
    height: 100%;
    aspect-ratio: 1;
  }
  ${MOBILE_STYLE} {
    height: 100%;
    width: 80px;
  }
`
const PinkRectangle = styled.div`
  height: 100%;
  width: 400px;
  background-color: pink;
`

export const Module23 = () => {
  return (
    <ModuleWrapper>
      <Container>
        <GreenBox>
          <EmptyBox>
            <PinkBox />
            <PinkRectangle />
          </EmptyBox>
        </GreenBox>
        <RedBox>
          <BlueBox />
          <BlueBox />
          <BlueBox />
          <BlueBox />
          <BlueBox />
          <BlueBox />
          <BlueBox />
          <BlueBox />
          <BlueBox />
          <BlueBox />
          <BlueBox />
          <BlueBox />
          <BlueBox />
          <BlueBox />
        </RedBox>
      </Container>
    </ModuleWrapper>
  )
}
