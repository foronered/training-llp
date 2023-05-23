import React from 'react'
import styled from 'styled-components'
import { DESKTOP_STYLE, MOBILE_BREAKPOINT, MOBILE_STYLE } from '../constants'
import { ModuleWrapper } from './common'

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  background-color: blue;
  padding: 8px 16px;
  ${DESKTOP_STYLE} {
    align-items: center;
    flex-direction: row;
  }
  ${MOBILE_STYLE} {
    flex-direction: column;
  }
`
const Container2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  ${DESKTOP_STYLE} {
    flex: 50%;
    height: 100%;
  }
  ${MOBILE_STYLE} {
    flex: 3;
    height: 100%;
  }
`

const GreenBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
  background-color: #60d937;
  ${DESKTOP_STYLE} {
    flex: 50%;
    height: 100%;
  }
  ${MOBILE_STYLE} {
    flex: 7;
    height: 100%;
  }
`

const RedBox = styled.div`
  flex: 50%;
  height: 100%;
  background-color: red;
`
const OrangeBox = styled.div`
  flex: 50%;
  height: 100%;
  background-color: Orange;
`

export const Module7 = () => {
  return (
    <ModuleWrapper>
      <Container>
        <Container2>
          <RedBox />
          <OrangeBox />
        </Container2>
        <GreenBox />
      </Container>
    </ModuleWrapper>
  )
}
