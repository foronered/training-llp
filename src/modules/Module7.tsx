import React from 'react'
import styled from 'styled-components'
import { DESKTOP_STYLE, MOBILE_BREAKPOINT, MOBILE_STYLE } from '../constants'
import { ModuleWrapper } from './common'

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  padding: 8px 16px;
  background-color: blue;
  ${MOBILE_STYLE} {
    flex-direction: column;
  }
`
const SubContainer = styled.div`
  display: flex;
  ${DESKTOP_STYLE} {
    flex: 2;
  }
  ${MOBILE_STYLE} {
    flex: 1;
  }
`
const RedBox = styled.div`
  flex: 1;
  background-color: red;
`
const OrangeBox = styled.div`
  flex: 1;
  height: 100%;
  background-color: orange;
`
const GreenBox = styled.div`
  flex: 2;
  height: 100%;
  background-color: lime;
`

export const Module7 = () => {
  return (
    <ModuleWrapper>
      <Container>
        <SubContainer>
          <RedBox />
          <OrangeBox />
        </SubContainer>
        <GreenBox />
      </Container>
    </ModuleWrapper>
  )
}
