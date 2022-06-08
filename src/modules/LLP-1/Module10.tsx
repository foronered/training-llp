import React from 'react'
import styled from 'styled-components'
import { DesktopStyle, MobileStyle, MOBILE_BREAKPOINT } from '../../constants'
import { ModuleWrapper } from '../common'

const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  background-color: blue;

  ${DesktopStyle} {
    flex-direction: row;
  }
  ${MobileStyle} {
    padding-top: 16px;
    flex-direction: column;
    overflow: scroll;
  }
`

const RedBox = styled.div`
  padding: 8px;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;

  background-color: firebrick;

  ${DesktopStyle} {
    flex: 0 0 300px;
    height: 100%;
  }
  ${MobileStyle} {
    width: 160px;
    flex: 3;
  }
`

const SmallBlueBox = styled.div`
  flex: 0 0 40px;
  width: 100%;
  margin-bottom: 8px;

  background-color: blue;
`

const BlueBox = styled.div`
  padding: 8px 16px;

  background-color: blue;

  ${DesktopStyle} {
    flex: 1;
    height: 100%;
  }
  ${MobileStyle} {
    flex: 1;
    width: 60%;
  }
`

const PurpleBox = styled.div`
  padding: 8px;

  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  background-color: purple;

  ${DesktopStyle} {
    flex: 1;
    height: 100%;
    justify-content: space-between;
    align-content: flex-start;
  }

  ${MobileStyle} {
    flex: 1;
    width: 100%;
  }
`

const SmallRedBox = styled.div`
  background-color: firebrick;
  flex: 0 0 200px;
  height: 200px;
`

export const Module10 = () => {
  return (
    <ModuleWrapper>
      <Container>
        <RedBox>
          <SmallBlueBox />
          <SmallBlueBox />
          <SmallBlueBox />
          <SmallBlueBox />
          <SmallBlueBox />
        </RedBox>

        <BlueBox>
          <PurpleBox>
            <SmallRedBox style={{ height: '144px', flex: '0 0 100%' }} />
            <SmallRedBox />
            <SmallRedBox />
          </PurpleBox>
        </BlueBox>
      </Container>
    </ModuleWrapper>
  )
}
