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
const PinkBox = styled.div`
  height: 100%;
  width: 150px;
  background-color: pink;
`
const PinkLongBox = styled.div`
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
  background-color: blue;
`
export const Module23 = () => {
  return (
    <ModuleWrapper>
      <Container>
        <GreenHeader>
          <PinkBox />
          <PinkLongBox />
        </GreenHeader>
        <RedBox>
          {[...Array(36)].map((_, idx) => (
            <BlueBox key={idx} />
          ))}
        </RedBox>
      </Container>
    </ModuleWrapper>
  )
}
