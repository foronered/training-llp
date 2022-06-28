import React from 'react'
import styled from 'styled-components'
import { DesktopStyle, MobileStyle, MOBILE_BREAKPOINT } from '../../constants'
import { ModuleWrapper } from '../common'

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 8px 16px;
  background-color: blue;
`

const RedBox = styled.div`
  flex: 1;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: firebrick;

  ${DesktopStyle} {
    flex-direction: row;
  }

  ${MobileStyle} {
    flex-direction: column;
  }
`

const GreenBox = styled.div`
  background-color: green;

  ${DesktopStyle} {
    flex: 0 0 64px;
    height: 64px;
  }
  ${MobileStyle} {
    flex: 0 0 64px;
    width: 64px;
  }
`

const BlueBox = styled.div`
  ${DesktopStyle} {
    background-color: blue;
    flex: 0 0 256px;
    height: 64px;
  }

  ${MobileStyle} {
    width: 256px;
    flex: 0 0 64px;
    background-color: lightblue;
  }
`

const OrangeBox = styled.div`
  background-color: orange;

  ${DesktopStyle} {
    flex: 0 0 128px;
    height: 64px;
  }
  ${MobileStyle} {
    width: 128px;
    flex: 0 0 64px;
  }
`

export const Module5 = () => {
  return (
    <ModuleWrapper>
      <Container>
        <RedBox>
          <GreenBox />
          <BlueBox />
          <OrangeBox />
        </RedBox>
      </Container>
    </ModuleWrapper>
  )
}
