import React from 'react'
import styled from 'styled-components'
import { DESKTOP_STYLE, MOBILE_STYLE, ModuleWrapper } from './common'

const boxHeight = 64

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: blue;

  ${DESKTOP_STYLE} {
    padding: 8px 16px;
  }

  ${MOBILE_STYLE} {
    padding: 75px;
  }
`

const InnerContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: red;

  ${DESKTOP_STYLE} {
    padding: 8px 16px;
    flex-direction: row;
  }

  ${MOBILE_STYLE} {
    padding: 75px;
    flex-direction: column;
  }
`

const GreenBox = styled.div`
  height: ${boxHeight}px;
  width: 64px;
  background-color: greenyellow;
`

const BlueBox = styled.div`
  height: ${boxHeight}px;
  width: 256px;
  background-color: dodgerblue;
`

const OrangeBox = styled.div`
  height: ${boxHeight}px;
  width: 128px;
  background-color: orange;
`

export const Module5 = () => {
  return (
    <ModuleWrapper>
      <Container>
        <InnerContainer>
          <GreenBox />
          <BlueBox />
          <OrangeBox />
        </InnerContainer>
      </Container>
    </ModuleWrapper>
  )
}
