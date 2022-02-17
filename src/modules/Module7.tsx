import React from 'react'
import styled from 'styled-components'
import { DESKTOP_STYLE, MOBILE_STYLE, ModuleWrapper } from './common'

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: blue;

  ${DESKTOP_STYLE} {
    padding: 8px 16px;
    flex-direction: row;
  }

  ${MOBILE_STYLE} {
    padding: 75px;
    flex-direction: column;
  }
`

const TopContainer = styled.div`
  display: flex;

  ${DESKTOP_STYLE} {
    height: 100%;
    width: 50%;
  }

  ${MOBILE_STYLE} {
    width: 100%;
    flex: 1;
  }
`

const RedContainer = styled.div`
  background-color: red;

  ${DESKTOP_STYLE} {
    flex: 1;
    height: 100%;
  }

  ${MOBILE_STYLE} {
    width: 50%;
    flex: 1;
  }
`

const OrangeContainer = styled.div`
  background-color: orange;

  ${DESKTOP_STYLE} {
    flex: 1;
    height: 100%;
  }

  ${MOBILE_STYLE} {
    width: 50%;
    flex: 1;
  }
`

const GreenContainer = styled.div`
  background-color: greenyellow;

  ${DESKTOP_STYLE} {
    height: 100%;
    flex: 1;
  }

  ${MOBILE_STYLE} {
    flex: 2;
    width: 100%;
  }
`

export const Module7 = () => {
  return (
    <ModuleWrapper>
      <Container>
        <TopContainer>
          <RedContainer />
          <OrangeContainer />
        </TopContainer>
        <GreenContainer />
      </Container>
    </ModuleWrapper>
  )
}
