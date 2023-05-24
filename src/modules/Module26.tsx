import React from 'react'
import styled from 'styled-components'
import { DESKTOP_STYLE, MOBILE_BREAKPOINT, MOBILE_STYLE } from '../constants'
import { ModuleWrapper } from './common'

const ContainerMain = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
`
const ContainerLeft = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`
const RedContainer = styled.div`
  flex: 2;
  padding: 20px;
  gap: 20px;
  display: flex;
  flex-direction: column;
  background-color: red;
`
const GreenSmallBox = styled.div`
  height: 60px;
  width: 60px;
  background-color: lime;
`
const GreenLongBox = styled.div`
  background-color: lime;
  ${DESKTOP_STYLE} {
    height: 45px;
    width: 100%;
  }
  ${MOBILE_STYLE} {
    height: 0px;
    width: 0px;
  }
`
const YellowFooter = styled.div`
  flex: 1;
  padding: 20px;
  gap: 20px;
  display: flex;
  flex-wrap: wrap;
  background-color: gold;
`
const GreenBox = styled.div`
  width: 100%;
  background-color: lime;
  ${MOBILE_STYLE} {
    height: 70px;
  }
`
const RedBox = styled.div`
  background-color: red;
  ${DESKTOP_STYLE} {
    flex: 1;
  }
  ${MOBILE_STYLE} {
    width: 0;
    height: 0;
  }
`
const ContainerRight = styled.div`
  display: flex;
  flex-direction: column;
  ${DESKTOP_STYLE} {
    flex: 2;
  }
  ${MOBILE_STYLE} {
    flex: 6;
  }
`
const YellowHeader = styled.div`
  height: 100px;
  background-color: gold;
  display: flex;
  padding: 20px;
  gap: 20px;
  align-items: center;
  ${DESKTOP_STYLE} {
  }
  ${MOBILE_STYLE} {
    flex-wrap: wrap;
  }
`
const RedSmallBox = styled.div`
  height: calc(100% - 5px);
  width: 50px;
  background-color: red;
`
const RedLongBox = styled.div`
  height: calc(100% - 5px);
  width: 250px;
  background-color: red;
`
const BlueLongContainer = styled.div`
  height: 100%;
  width: 300px;
  display: flex;
  padding: 10px;
  gap: 20px;
  margin-left: auto;
  justify-content: space-between;
  background-color: #00befd;
`
const RedSmallBox2 = styled.div`
  width: 55px;
  background-color: red;
`
const BlueContainer = styled.div`
  flex: 1;
  height: 1px;
  padding-left: 45px;
  padding-top: 45px;
  padding-right: 45px;
  gap: 40px;
  display: flex;
  background-color: blue;
`
const BlueContainerLeft = styled.div`
  flex: 2;
  padding: 20px;
  gap: 20px;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  background-color: #00befd;
`
const GreenBox1 = styled.div`
  flex: 0 0 150px;
  width: 100%;
  display: flex;
  padding: 20px;
  gap: 20px;
  background-color: lime;
`
const RedBox1 = styled.div`
  height: 100%;
  aspect-ratio: 1;
  background-color: red;
`
const BlueContainerRight = styled.div`
  flex: 1;
  padding: 20px;
  gap: 20px;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  background-color: #00befd;
`
const GreenBox2 = styled.div`
  flex: 0 0 75px;
  width: 100%;
  background-color: lime;
`
const BlueBox = styled.div`
  flex: 1;
  background-color: #00befd;
`
export const Module26 = () => {
  return (
    <ModuleWrapper>
      <ContainerMain>
        <ContainerLeft>
          <RedContainer>
            <GreenSmallBox />
            <GreenLongBox />
          </RedContainer>
          <YellowFooter>
            <GreenBox />
            <RedBox />
            <RedBox />
            <RedBox />
          </YellowFooter>
        </ContainerLeft>
        <ContainerRight>
          <YellowHeader>
            <RedSmallBox />
            <RedLongBox />
            <BlueLongContainer>
              <RedSmallBox2 />
              <RedSmallBox2 />
              <RedSmallBox2 style={{ marginLeft: 'auto' }} />
            </BlueLongContainer>
          </YellowHeader>
          <BlueContainer>
            <BlueContainerLeft>
              {[...Array(36)].map((_, idx) => (
                <GreenBox1 key={idx}>
                  <RedBox1 />
                  <BlueBox />
                </GreenBox1>
              ))}
            </BlueContainerLeft>
            <BlueContainerRight>
              {[...Array(36)].map((_, idx) => (
                <GreenBox2 key={idx} />
              ))}
            </BlueContainerRight>
          </BlueContainer>
        </ContainerRight>
      </ContainerMain>
    </ModuleWrapper>
  )
}
