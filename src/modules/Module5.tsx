import React from 'react'
import styled from 'styled-components'
import { DESKTOP_STYLE, MOBILE_STYLE } from '../constants'
import { ModuleWrapper } from './common'

const Container = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  background-color: blue;
  padding: 8px 16px;
`

const RedBox = styled.div`
  flex: 1;
  height: 100%;
  background-color: red;
  display: flex;
  align-items: center;
  justify-content: center;

  ${DESKTOP_STYLE} {
    flex-direction: row;
  }

  ${MOBILE_STYLE} {
    flex-direction: column;
  }
`

const GreenBox = styled.div`
  width: 64px;
  height: 64px;
  background-color: lime;
`

const BlueBox = styled.div`
  width: 256px;
  height: 64px;
  background-color: DodgerBlue;
`

const OrangeBox = styled.div`
  width: 128px;
  height: 64px;
  background-color: orange;
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
