import React from 'react'
import styled from 'styled-components'
import { DESKTOP_STYLE, MOBILE_BREAKPOINT, MOBILE_STYLE } from '../constants'
import { ModuleWrapper } from './common'

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
`
const GreenHeader = styled.div`
  background-color: lime;
  display: flex;
  ${DESKTOP_STYLE} {
    justify-content: space-between;
    padding: 20px;
    height: 100px;
  }
  ${MOBILE_STYLE} {
    height: 150px;
    //Why can't I control Height on desktop version with flex = 1 while I can on mobile version??
    flex-direction: column;
    padding-top: 20px;
    padding-bottom: 20px;
    padding-left: 160px;
    gap: 30px;
  }
`
const PinkBox = styled.div`
  height: 70px;
  width: 150px;
  background-color: pink;
`
const PinkLongBox = styled.div`
  height: 70px;
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
  ${MOBILE_STYLE} {
    padding: 40px 200px;
  }
`
const BlueBox = styled.div`
  flex: 0 0 80px;
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
