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
  align-items: center;
  background-color: red;
`
const GreenBox = styled.div`
  width: 100%;
  height: 80px;
  padding: 16px;
  display: flex;
  background-color: green;
  ${DESKTOP_STYLE} {
    justify-content: space-between;
  }
  ${MOBILE_STYLE} {
    justify-content: center;
  }
`
const GreenFooter = styled.div`
  width: 100%;
  padding: 16px;
  display: flex;
  gap: 16px;
  background-color: green;
  ${DESKTOP_STYLE} {
    height: 80px;
  }
  ${MOBILE_STYLE} {
    height: 180px;
    justify-content: center;
    position: relative;
  }
`
const BlueBox = styled.div`
  flex: 0 0 90px;
  padding: 16px;
  gap: 16px;
  display: flex;
  justify-content: center;
  align-content: center;
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
    height: 65px;
    aspect-ratio: 1;
  }
`
const PinkBox3 = styled.div`
  height: 100%;
  aspect-ratio: 1;
  background-color: pink;
`
const PinkBox2 = styled.div`
  background-color: pink;
  ${DESKTOP_STYLE} {
    height: 100%;
    aspect-ratio: 1;
    margin-left: auto;
  }
  ${MOBILE_STYLE} {
    height: 65px;
    aspect-ratio: 1;
    margin-top: auto;
    position: absolute;
  }
`
const PinkRectangle = styled.div`
  background-color: pink;
  ${DESKTOP_STYLE} {
    height: 100%;
    width: 300px;
  }
  ${MOBILE_STYLE} {
    height: 65px;
    width: 300px;
  }
`
const PinkRectangle2 = styled.div`
  background-color: pink;

  ${DESKTOP_STYLE} {
    height: 100%;
    width: 300px;
  }
  ${MOBILE_STYLE} {
    height: 100%;
    width: 0px;
  }
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
          <PinkBox3 />
          <PinkRectangle2 />
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
          <PinkBox2
            style={{
              bottom: '16px',
            }}
          />
        </GreenFooter>
      </Container>
    </ModuleWrapper>
  )
}
