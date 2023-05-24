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
  padding: 20px;
  ${DESKTOP_STYLE} {
    height: 120px;
    justify-content: space-between;
  }
  ${MOBILE_STYLE} {
    height: 150px;
    justify-content: center;
    align-items: center;
  }
`
const GreenFooter = styled.div`
  background-color: lime;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  ${DESKTOP_STYLE} {
    align-items: flex-start;
    height: 120px;
    padding: 20px;
  }
  ${MOBILE_STYLE} {
    height: 250px;
    justify-content: center;
    align-content: center;
    padding: 20px;
  }
`
const PinkBox = styled.div`
  height: 100px;
  width: 150px;
  background-color: pink;
`
const PinkBox1 = styled.div`
  background-color: pink;
  ${DESKTOP_STYLE} {
    height: 100%;
    width: 130px;
  }
  ${MOBILE_STYLE} {
    height: 90px;
    width: 150px;
  }
`
const PinkBox2 = styled.div`
  background-color: pink;
  ${DESKTOP_STYLE} {
    align-self: end;
    height: 100%;
    width: 150px;
  }
  ${MOBILE_STYLE} {
    height: 90px;
    width: 150px;
  }
`
const PinkLongBox1 = styled.div`
  ${DESKTOP_STYLE} {
    height: 100%;
    width: 400px;
    background-color: pink;
  }
  ${MOBILE_STYLE} {
    flex: 0;
  }
`
const PinkLongBox2 = styled.div`
  background-color: pink;
  ${DESKTOP_STYLE} {
    height: 100%;
    width: 400px;
  }
  ${MOBILE_STYLE} {
    height: 90px;
    width: 400px;
  }
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
