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
    align-items: center;
    justify-content: space-evenly;
  }

  ${MobileStyle} {
    padding: 16px;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    overflow-y: auto;
  }
`

const RedBox = styled.div`
  background-color: firebrick;

  ${DesktopStyle} {
    flex: 0 0 200px;
    height: 200px;
  }
  ${MobileStyle} {
    flex: 0 0 200px;
    width: 200px;
  }
`

export const Module2 = () => {
  return (
    <ModuleWrapper>
      <Container>
        <RedBox />
        <RedBox />
        <RedBox />
      </Container>
    </ModuleWrapper>
  )
}
