import React from 'react'
import styled from 'styled-components'
import { DESKTOP_STYLE, MOBILE_BREAKPOINT, MOBILE_STYLE } from '../constants'
import { ModuleWrapper } from './common'

const ContainerMain = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
`
const ContainerLeft = styled.div`
  display: flex;
  flex-direction: column;
  ${DESKTOP_STYLE} {
    flex: 0 0 33%;
    height: 100%;
  }
  ${MOBILE_STYLE} {
    flex: 0 0 20%;
    height: 100%;
  }
`
const PinkHeader = styled.div`
  height: 100px;
  background-color: #f702eb;
  padding: 20px;
  display: flex;
  ${DESKTOP_STYLE} {
    justify-content: space-between;
  }
  ${MOBILE_STYLE} {
    justify-content: center;
  }
`
const BlueBox = styled.div`
  background-color: #00befd;
  ${DESKTOP_STYLE} {
    height: 100%;
    width: 70px;
  }
  ${MOBILE_STYLE} {
    flex: 1;
    aspect-ratio: 1;
  }
`
const BlueBox1 = styled.div`
  ${DESKTOP_STYLE} {
    height: 100%;
    width: 70px;
    background-color: #00befd;
  }
  ${MOBILE_STYLE} {
    height: 0;
    width: 0;
  }
`
const RedContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  background-color: red;
  ${DESKTOP_STYLE} {
    padding: 50px;
    gap: 20px;
  }
  ${MOBILE_STYLE} {
    padding: 20px;
    gap: 20px;
  }
`
const GreenBox = styled.div`
  flex: 0 0 60px;
  width: 100%;
  background-color: lime;
`
const YellowFooter = styled.div`
  height: 100px;
  display: flex;
  padding: 20px;
  background-color: gold;
  ${DESKTOP_STYLE} {
    gap: 20px;
  }
  ${MOBILE_STYLE} {
    justify-content: center;
  }
`
const BlueLongBox = styled.div`
  ${DESKTOP_STYLE} {
    flex: 1;
    height: 100;
    background-color: #00befd;
  }
  ${MOBILE_STYLE} {
    height: 0;
    width: 0;
  }
`
const ContainerRight = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
`
const YellowHeader = styled.div`
  height: 100px;
  background-color: gold;
  display: flex;
  align-items: center;
  padding: 20px;
  ${DESKTOP_STYLE} {
    justify-content: space-between;
  }
  ${MOBILE_STYLE} {
    justify-content: center;
    gap: 60px;
  }
`
const RedLongBox = styled.div`
  height: calc(100% - 10px);
  width: 200px;
  background-color: red;
`
const BlueLongContainer = styled.div`
  background-color: #00befd;
  display: flex;
  ${DESKTOP_STYLE} {
    height: 100%;
    width: 300px;
    padding: 10px;
    gap: 20px;
    justify-content: space-between;
  }
  ${MOBILE_STYLE} {
    height: 100%;
    width: 100px;
    padding: 10px 20px;
  }
`
const RedBox = styled.div`
  flex: 1;
  background-color: green;
`
const RedBox1 = styled.div`
  background-color: red;
  ${DESKTOP_STYLE} {
    flex: 1;
  }
  ${MOBILE_STYLE} {
    flex: 0;
  }
`
const BlueContainer = styled.div`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  overflow-y: auto;
  background-color: blue;
  ${DESKTOP_STYLE} {
    padding: 45px;
    gap: 40px;
  }
  ${MOBILE_STYLE} {
    padding: 45px 100px;
    gap: 40px;
  }
`
const BlueBigBox = styled.div`
  height: 200px;
  width: 300px;
  background-color: #00befd;
`
export const Module25 = () => {
  return (
    <ModuleWrapper>
      <ContainerMain>
        <ContainerLeft>
          <PinkHeader>
            <BlueBox />
            <BlueBox1 />
          </PinkHeader>
          <RedContainer>
            {[...Array(36)].map((_, idx) => (
              <GreenBox key={idx} />
            ))}
          </RedContainer>
          <YellowFooter>
            <BlueBox />
            <BlueLongBox />
          </YellowFooter>
        </ContainerLeft>
        <ContainerRight>
          <YellowHeader>
            <RedLongBox />
            <BlueLongContainer>
              <RedBox />
              <RedBox1 />
              <RedBox1 />
              <RedBox1 />
            </BlueLongContainer>
          </YellowHeader>
          <BlueContainer>
            {[...Array(36)].map((_, idx) => (
              <BlueBigBox key={idx} />
            ))}
          </BlueContainer>
        </ContainerRight>
      </ContainerMain>
    </ModuleWrapper>
  )
}
