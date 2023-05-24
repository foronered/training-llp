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
  flex: 4;
  display: flex;
  flex-direction: column;
`
const ContainerTopLeft = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px 40px;
  gap: 20px;
  overflow-y: auto;
  background-color: gold;
`
const RedContainerTopLeft = styled.div`
  flex: 0 0 100px;
  display: flex;
  padding: 0 20px;
  gap: 20px;
  align-items: center;
  background-color: red;
`
const OrangeSquare = styled.div`
  width: 45px;
  aspect-ratio: 1;
  padding: 10px;
  display: flex;
  background-color: gold;
`
const BlueSmallSquare = styled.div`
  flex: 1;
  background-color: #4088e0;
`
const ContainerBottomLeft = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px 40px;
  gap: 20px;
  overflow-y: auto;
  background-color: #3700ff;
`
const RedContainerBottomLeft = styled.div`
  flex: 0 0 150px;
  display: flex;
  padding: 20px 40px;
  gap: 15px;
  background-color: red;
`
const GreenBoxRedContainer = styled.div`
  flex: 1;
  display: flex;
  padding: 20px;
  background-color: lime;
`
const BlackBoxRedContainer = styled.div`
  flex: 1;
  background-color: black;
`
const ContainerMiddle = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  padding: 20px 40px;
  gap: 20px;
  background-color: red;
`
const GreenContainerMiddle = styled.div`
  flex: 0 0 200px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: lime;
`
const ShortBlueGreenContainerMiddle = styled.div`
  height: 40px;
  width: 70px;
  background-color: #4088e0;
`
const LongBlueGreenContainerMiddle = styled.div`
  height: 60px;
  width: 100%;
  background-color: #4088e0;
`
const ContainerRight = styled.div`
  flex: 4;
  display: flex;
  flex-direction: column;
`
const ContainerTopRight = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  padding: 20px 40px;
  gap: 20px;
  background-color: #3700ff;
`
const RedContainerTopRight = styled.div`
  flex: 0 0 90px;
  display: flex;
  padding: 20px;
  background-color: red;
`
const BlueRedContainerTopRight = styled.div`
  flex: 1;
  display: flex;
  padding: 15px;
  background-color: #4088e0;
`
const BlackRedContainerTopRight = styled.div`
  width: 25px;
  background-color: black;
`
const ContainerBottomRight = styled.div`
  flex: 6;
  display: flex;
  overflow-y: auto;
  flex-direction: column;
  padding: 20px 40px;
  gap: 20px;
  flex-wrap: wrap;
  background-color: deeppink;
`
const BigContainerBottomRight = styled.div`
  width: 50%;
  height: 1000px;
  padding: 20px;
  display: flex;
  background-color: #4088e0;
`
const BlackInsideContainerBottomRight = styled.div`
  flex: 1;
  background-color: black;
`
const BlueContainerBottomRight = styled.div`
  flex: 1;
  background-color: #4088e0;
`
const BlackContainerBottomRight = styled.div`
  width: 50%;
  aspect-ratio: 1;
  background-color: black;
`
export const Module31 = () => {
  return (
    <ModuleWrapper>
      <ContainerMain>
        <ContainerLeft>
          <ContainerTopLeft>
            {[...Array(36)].map((_, idx) => (
              <RedContainerTopLeft key={idx}>
                <OrangeSquare>
                  <BlueSmallSquare />
                </OrangeSquare>
                <OrangeSquare>
                  <BlueSmallSquare />
                </OrangeSquare>
                <OrangeSquare style={{ marginLeft: 'auto' }}>
                  <BlueSmallSquare />
                </OrangeSquare>
              </RedContainerTopLeft>
            ))}
          </ContainerTopLeft>
          <ContainerBottomLeft>
            {[...Array(36)].map((_, idx) => (
              <RedContainerBottomLeft key={idx}>
                <GreenBoxRedContainer />
                <GreenBoxRedContainer>
                  <BlackBoxRedContainer />
                </GreenBoxRedContainer>
                <GreenBoxRedContainer />
              </RedContainerBottomLeft>
            ))}
          </ContainerBottomLeft>
        </ContainerLeft>
        <ContainerMiddle>
          {[...Array(36)].map((_, idx) => (
            <GreenContainerMiddle key={idx}>
              <ShortBlueGreenContainerMiddle />
              <LongBlueGreenContainerMiddle />
            </GreenContainerMiddle>
          ))}
        </ContainerMiddle>
        <ContainerRight>
          <ContainerTopRight>
            {[...Array(36)].map((_, idx) => (
              <RedContainerTopRight key={idx}>
                <BlueRedContainerTopRight>
                  <BlackRedContainerTopRight />
                </BlueRedContainerTopRight>
              </RedContainerTopRight>
            ))}
          </ContainerTopRight>
          <ContainerBottomRight>
            <BigContainerBottomRight>
              <BlackInsideContainerBottomRight />
            </BigContainerBottomRight>
            <BlackContainerBottomRight />
            <BlueContainerBottomRight />
          </ContainerBottomRight>
        </ContainerRight>
      </ContainerMain>
    </ModuleWrapper>
  )
}
