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
  background-color: blue;
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
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: flex-start;
  background-color: purple;
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
        <BlueBox>
          <PurpleBox>
            <LongRedBox />
            <RedBox />
            <RedBox />
          </PurpleBox>
        </BlueBox>
      </Container>
    </ModuleWrapper>
  )
}
