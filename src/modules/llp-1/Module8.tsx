import React from 'react'
import styled from 'styled-components'
import { DESKTOP_STYLE, MOBILE_STYLE } from '../../constants'
import { ModuleWrapper } from '../common'

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  ${MOBILE_STYLE} {
    flex-direction: column;
  }
`

const RedBox = styled.div`
  background-color: red;
  ${DESKTOP_STYLE} {
    flex: 0 0 300px;
  }
  ${MOBILE_STYLE} {
    flex: 0 0 100px;
  }
`
const BlueBox = styled.div`
  flex: 1;
  background-color: blue;
  display: flex;
  padding: 16px 32px 0 32px;
`
const GreenBox = styled.div`
  background-color: lime;
  flex: 1;
`

export const Module8 = () => {
  return (
    <ModuleWrapper>
      <Container>
        <RedBox />
        <BlueBox>
          <GreenBox />
        </BlueBox>
      </Container>
    </ModuleWrapper>
  )
}
