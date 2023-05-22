import React from 'react'
import styled from 'styled-components'
import { MOBILE_BREAKPOINT } from '../constants'
import { ModuleWrapper } from './common'

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
`
const GreenHeader = styled.div`
  height: 120px;
  background-color: greenyellow;
  display: flex;
  padding: 20px;
  justify-content: space-between;
`
const GreenFooter = styled.div`
  height: 120px;
  background-color: greenyellow;
  display: flex;
  align-items: flex-start;
  gap: 20px;
  padding: 20px;
`
const PinkBox = styled.div`
  height: 100%;
  width: 150px;
  background-color: pink;
`
const PinkBox1 = styled.div`
  height: 100%;
  width: 130px;
  background-color: pink;
`
const PinkBox2 = styled.div`
  height: 100%;
  align-self: end;
  width: 150px;
  background-color: pink;
  margin-left: auto;
`
const PinkLongBox1 = styled.div`
  height: 100%;
  width: 400px;
  background-color: pink;
`
const PinkLongBox2 = styled.div`
  height: 100%;
  width: 400px;
  background-color: pink;
`
const RedBox = styled.div`
  flex: 1;
  padding: 50px;
  gap: 20px;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  background-color: red;
`
const BlueBox = styled.div`
  flex: 0 0 60px;
  width: 100%;
  display: flex;
  padding: 10px;
  justify-content: center;
  background-color: blue;
`
const YellowBox = styled.div`
  height: 100%;
  width: 60px;
  background-color: gold;
`
export const Module24 = () => {
  return (
    <ModuleWrapper>
      <Container>
        <GreenHeader>
          <PinkBox />
          <PinkLongBox1 />
        </GreenHeader>
        <RedBox>
          {[...Array(36)].map((_, idx) => (
            <BlueBox key={idx}>
              <YellowBox />
            </BlueBox>
          ))}
        </RedBox>
        <GreenFooter>
          <PinkLongBox2 />
          <PinkBox1 />
          <PinkBox2 />
        </GreenFooter>
      </Container>
    </ModuleWrapper>
  )
}
