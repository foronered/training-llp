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
  justify-content: space-between;
  display: flex;
  background-color: green;
`
const GreenFooter = styled.div`
  width: 100%;
  height: 80px;
  padding: 16px;
  display: flex;
  gap: 16px;
  background-color: green;
`
const BlueBox = styled.div`
  flex: 0 0 90px;
  width: 100%;
  padding: 16px;
  gap: 16px;
  display: flex;
  justify-content: center;
  align-content: center;
  background-color: blue;
`
const PinkBox = styled.div`
  height: 100%;
  aspect-ratio: 1;
  background-color: pink;
`
const PinkBox2 = styled.div`
  height: 100%;
  aspect-ratio: 1;
  margin-left: auto;
  background-color: pink;
`
const PinkRectangle = styled.div`
  height: 100%;
  width: 300px;
  background-color: pink;
`
const YellowBox = styled.div`
  height: 100%;
  width: 60px;
  background-color: yellow;
`

export const Module24 = () => {
  return (
    <ModuleWrapper>
      <Container>
        <GreenBox>
          <PinkBox />
          <PinkRectangle />
        </GreenBox>
        <RedBox>
          {[...Array(10)].map((_, index) => (
            <BlueBox key={index}>
              <YellowBox />
            </BlueBox>
          ))}
        </RedBox>
        <GreenFooter>
          <PinkRectangle />
          <PinkBox />
          <PinkBox2 />
        </GreenFooter>
      </Container>
    </ModuleWrapper>
  )
}
