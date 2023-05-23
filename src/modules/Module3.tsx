import React from 'react'
import styled from 'styled-components'
import { DESKTOP_STYLE, MOBILE_STYLE } from '../constants'
import { ModuleWrapper } from './common'

// How do I get them to overlap? Disable flex?
const Container = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: blue;
`

const RedBox = styled.div`
  width: 400px;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;

  ${DESKTOP_STYLE} {
    background-color: red;
  }

  ${MOBILE_STYLE} {
    background-color: black;
  }
`

const OrangeBox = styled.div`
  width: 200px;
  height: 200px;

  ${DESKTOP_STYLE} {
    background-color: orange;
  }

  ${MOBILE_STYLE} {
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
