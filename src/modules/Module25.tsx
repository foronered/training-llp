import React from 'react'
import styled from 'styled-components'
import { MOBILE_BREAKPOINT } from '../constants'
import { ModuleWrapper } from './common'

const ContainerMain = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
`
const ContainerLeft = styled.div`
  flex: 0 0 33%;
  height: 100%;
  display: flex;
  flex-direction: column;
`
const PinkHeader = styled.div`
  height: 100px;
  background-color: #f702eb;
  display: flex;
  padding: 20px;
  justify-content: space-between;
`
const BlueBox = styled.div`
  height: 100%;
  width: 70px;
  background-color: #00befd;
`
const RedContainer = styled.div`
  flex: 1;
  padding: 50px;
  gap: 20px;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  background-color: red;
`
const GreenBox = styled.div`
  flex: 0 0 60px;
  width: 100%;
  background-color: lime;
`
const YellowFooter = styled.div`
  height: 100px;
  padding: 20px;
  gap: 20px;
  display: flex;
  background-color: gold;
`
const BlueLongBox = styled.div`
  flex: 1;
  height: 100;
  background-color: #00befd;
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
  padding: 20px;
  padding-left: 30px;
  align-items: center;
  justify-content: space-between;
`
const RedLongBox = styled.div`
  height: calc(100% - 10px);
  width: 250px;
  background-color: red;
`
const BlueLongContainer = styled.div`
  height: 100%;
  width: 300px;
  display: flex;
  padding: 10px;
  gap: 20px;
  justify-content: space-between;
  background-color: #00befd;
`
const RedBox = styled.div`
  flex: 1;
  background-color: red;
`
const BlueContainer = styled.div`
  flex: 1;
  padding: 45px;
  gap: 40px;
  display: flex;
  flex-wrap: wrap;
  overflow-y: auto;
  background-color: blue;
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
            <BlueBox />
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
              <RedBox />
              <RedBox />
              <RedBox />
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
