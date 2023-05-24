import React from 'react'
import styled from 'styled-components'
import { DESKTOP_STYLE, MOBILE_BREAKPOINT, MOBILE_STYLE } from '../constants'
import { ModuleWrapper } from './common'

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  background-color: blue;
  ${DESKTOP_STYLE} {
  }
  ${MOBILE_STYLE} {
    flex-direction: column;
    overflow-y: auto;
  }
`
const RedColumn = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: red;
  ${DESKTOP_STYLE} {
    gap: 8px;
    padding: 8px;
    flex: 0 0 300px;
  }
  ${MOBILE_STYLE} {
    padding: 20px;
    gap: 16px;
    flex: 0 0 500px;
    margin-top: 16px;
    margin-left: 200px;
    margin-right: 200px;
  }
`
const BlueBotton = styled.div`
  height: 60px;
  background-color: blue;
`
const PurpleBox = styled.div`
  flex: 1;
  height: 100%;
  padding: 8px;
  gap: 8px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: flex-start;
  background-color: purple;
  ${DESKTOP_STYLE} {
    margin-top: 16px;
    margin-left: 16px;
    margin-right: 16px;
  }
  ${MOBILE_STYLE} {
    margin-top: 16px;
    margin-left: 60px;
    margin-right: 60px;
  }
`
const LongRedBox = styled.div`
  height: 144px;
  width: 100%;
  background-color: red;
`
const RedBox = styled.div`
  height: 200px;
  width: 200px;
  background-color: red;
`
export const Module10 = () => {
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
        <PurpleBox>
          <LongRedBox />
          <RedBox />
          <RedBox />
        </PurpleBox>
      </Container>
    </ModuleWrapper>
  )
}
