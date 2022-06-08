import React from 'react'
import styled from 'styled-components'
import { DesktopStyle, MobileStyle, MOBILE_BREAKPOINT } from '../../constants'
import { ModuleWrapper } from '../common'

const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;

  background-color: blue;

  ${DesktopStyle} {
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
  }

  ${MobileStyle} {
    flex-direction: column;
    overflow-y: auto;
  }
`

const RedBox = styled.div`
  display: flex;
  background-color: firebrick;

  ${DesktopStyle} {
    flex: 0 0 300px;
    height: 100%;
    justify-content: center;
    align-items: center;
  }
  ${MobileStyle} {
    flex: 0 0 100px;
  }
`

const BlueBox = styled.div`
  padding: 8px 16px;

  background-color: blue;
  ${DesktopStyle} {
    flex: 1;
    height: 100%;
  }
  ${MobileStyle} {
    width: 100%;
    flex: 4;
  }
`

const PurpleBox = styled.div`
  padding: 8px;

  display: flex;
  gap: 8px;

  ${DesktopStyle} {
    flex: 1;
    height: 100%;
    background-color: purple;
    flex-wrap: wrap;
    align-content: flex-start;
  }

  ${MobileStyle} {
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;
  }
`

const SmallRedBox = styled.div`
  background-color: firebrick;

  ${DesktopStyle} {
    width: calc((100% - 16px) / 3);
    height: 200px;
  }
  ${MobileStyle} {
    width: 200px;
    flex: 0 0 200px;
  }
`

export const Module9 = () => {
  return (
    <ModuleWrapper>
      <Container>
        <RedBox />

        <BlueBox>
          <PurpleBox>
            <SmallRedBox />
            <SmallRedBox />
            <SmallRedBox />
            <SmallRedBox />
            <SmallRedBox />
            <SmallRedBox />
          </PurpleBox>
        </BlueBox>
      </Container>
    </ModuleWrapper>
  )
}
