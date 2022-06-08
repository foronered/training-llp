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
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: firebrick;

  ${DesktopStyle} {
    flex: 1;
    height: 100%;
  }

  ${MobileStyle} {
    flex: 1;
    width: 100%;
  }
`

const GreenBox = styled.div`
  ${DesktopStyle} {
    flex: 1;
    height: 100%;
  }

  ${MobileStyle} {
    flex: 1;
  }

  background-color: green;
`

const OrangeBox = styled.div`
  ${DesktopStyle} {
    flex: 1;
    height: 100%;
  }

  ${MobileStyle} {
    flex: 1;
    height: 100%;
  }

  background-color: orange;
`

const HelperBox = styled.div`
  display: flex;

  ${DesktopStyle} {
    flex: 1;
    height: 100%;
  }
  ${MobileStyle} {
    flex: 0 0 100px;
  }
`

export const Module7 = () => {
  return (
    <ModuleWrapper>
      <Container>
        <HelperBox>
          <RedBox />
          <OrangeBox />
        </HelperBox>
        <GreenBox />
      </Container>
    </ModuleWrapper>
  )
}
