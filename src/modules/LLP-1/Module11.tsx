import React from 'react'
import styled from 'styled-components'
import { DesktopStyle, MobileStyle, MOBILE_BREAKPOINT } from '../../constants'
import { ModuleWrapper } from '../common'

const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background-color: blue;

  ${DesktopStyle} {
    flex-direction: row;
  }
  ${MobileStyle} {
    flex-direction: column;
  }
`

const RedBox = styled.div`
  padding: 8px;
  gap: 8px;
  display: flex;

  background-color: firebrick;

  ${DesktopStyle} {
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    flex: 0 0 300px;
    height: 100%;
  }
  ${MobileStyle} {
    flex-direction: row;
    align-items: center;
    width: 100%;
    flex: 1;
    gap: 8px;
    overflow-x: auto;
  }
`

const SmallGreenBox = styled.div`
  background-color: green;

  ${DesktopStyle} {
    flex: 0 0 40px;
    width: 100%;
  }
  ${MobileStyle} {
    flex: 0 0 180px;
    height: 50px;
  }
`

const BlueBox = styled.div`
  padding: 16px;
  gap: 8px;

  background-color: blue;

  display: flex;
  flex-wrap: wrap;
  overflow-y: auto;

  ${DesktopStyle} {
    flex: 1;
    height: 100%;
  }
  ${MobileStyle} {
    width: 100%;
    flex: 5;
    padding: 32px;
    justify-content: center;
  }
`

const SmallRedBox = styled.div`
  flex: 0 0 200px;
  height: 200px;

  background-color: firebrick;
`

export const Module11 = () => {
  return (
    <ModuleWrapper>
      <Container>
        <RedBox>
          <SmallGreenBox />
          <SmallGreenBox />
          <SmallGreenBox />
          <SmallGreenBox />
          <SmallGreenBox />
        </RedBox>

        <BlueBox>
          {new Array(36).fill(0).map((_, i) => (
            <SmallRedBox key={i} />
          ))}
        </BlueBox>
      </Container>
    </ModuleWrapper>
  )
}
