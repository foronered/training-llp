import React from 'react'
import styled from 'styled-components'
import { DESKTOP_STYLE, MOBILE_STYLE } from '../../constants'
import { ModuleWrapper } from '../common'

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 8px 16px;
  display: flex;
  background-color: blue;
`

const RedBox = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: red;

  ${MOBILE_STYLE} {
    flex-direction: column;
  }
`
const GreenBox = styled.div`
  background-color: lime;
  ${DESKTOP_STYLE} {
    flex: 0 0 64px;
    height: 64px;
  }

  ${MOBILE_STYLE} {
    flex: 0 0 64px;
    width: 64px;
  }
`
const BlueBox = styled.div`
  background-color: dodgerblue;
  ${DESKTOP_STYLE} {
    flex: 0 0 256px;
    height: 64px;
  }
  ${MOBILE_STYLE} {
    flex: 0 0 64px;
    width: 256px;
  }
`
const OrangeBox = styled.div`
  background-color: orange;
  ${DESKTOP_STYLE} {
    flex: 0 0 128px;
    height: 64px;
  }
  ${MOBILE_STYLE} {
    flex: 0 0 64px;
    width: 128px;
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
