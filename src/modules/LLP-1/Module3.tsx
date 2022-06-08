import React from 'react'
import styled from 'styled-components'
import { DesktopStyle, MobileStyle, MOBILE_BREAKPOINT } from '../../constants'
import { ModuleWrapper } from '../common'

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: blue;
`

const RedBox = styled.div`
  flex: 0 0 400px;
  height: 400px;

  display: flex;
  justify-content: center;
  align-items: center;

  ${DesktopStyle} {
    background-color: firebrick;
  }
  ${MobileStyle} {
    background-color: black;
  }
`

const OrangeBox = styled.div`
  width: 200px;
  height: 200px;

  ${DesktopStyle} {
    background-color: orange;
  }

  ${MobileStyle} {
    background-color: green;
  }
`

export const Module3 = () => {
  return (
    <ModuleWrapper>
      <Container>
        <RedBox>
          <OrangeBox />
        </RedBox>
      </Container>
    </ModuleWrapper>
  )
}
