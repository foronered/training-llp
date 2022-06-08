import React from 'react'
import styled from 'styled-components'
import { DesktopStyle, MobileStyle, MOBILE_BREAKPOINT } from '../../constants'
import { ModuleWrapper } from '../common'

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 8px 16px;
  display: flex;
  background-color: blue;
  ${DesktopStyle} {
    flex-direction: row;
  }

  ${MobileStyle} {
    flex-direction: column;
  }
`

const RedBox = styled.div`
  background-color: firebrick;

  ${DesktopStyle} {
    flex: 0 0 300px;
    height: 100%;
  }

  ${MobileStyle} {
    width: 100%;
    flex: 1;
  }
`

// how to make red box bigger than green one?

const GreenBox = styled.div`
  background-color: green;

  ${DesktopStyle} {
    flex: 1;
    height: 100%;
  }

  ${MobileStyle} {
    flex: 3;
    width: 100%;
  }
`

export const Module6 = () => {
  return (
    <ModuleWrapper>
      <Container>
        <RedBox />
        <GreenBox />
      </Container>
    </ModuleWrapper>
  )
}
