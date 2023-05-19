import React from 'react'
import styled from 'styled-components'
import { MOBILE_BREAKPOINT } from '../constants'
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
`
const GreenBox = styled.div`
  width: 100%;
  height: 80px;
  padding: 16px;
  display: flex;
  justify-content: space-between;
  background-color: green;
`
const BlueBox = styled.div`
  flex: 0 0 90px;
  width: 100%;
  background-color: blue;
`
const PinkBox = styled.div`
  height: 100%;
  aspect-ratio: 1;
  background-color: pink;
`
const PinkRectangle = styled.div`
  height: 100%;
  width: 300px;
  background-color: pink;
`

export const Module23 = () => {
  return (
    <ModuleWrapper>
      <Container>
        <GreenBox>
          <PinkBox />
          <PinkRectangle />
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
