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

  ${DESKTOP_STYLE} {
    flex-direction: row;
  }

  ${MOBILE_STYLE} {
    flex-direction: column;
  }
`

const Wrapper = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
`

const RedBox = styled.div`
  flex: 1;
  height: 100%;
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
        <Wrapper>
          <RedBox />
          <OrangeBox />
        </Wrapper>
        <GreenBox />
      </Container>
    </ModuleWrapper>
  )
}
