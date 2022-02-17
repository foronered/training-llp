import React from 'react'
import { DESKTOP_STYLE, MOBILE_STYLE, ModuleWrapper } from './common'
import styled from 'styled-components'

const BlueContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: blue;
`

const RedBox = styled.div`
  height: 350px;
  width: 350px;
  padding: 16px;
  background-color: red;
  overflow-y: scroll;
`

const Content = styled.div`
  width: 100%;
  height: 200%;

  ${DESKTOP_STYLE} {
    background-color: lime;
  }
  ${MOBILE_STYLE} {
    background-color: orange;
  }
`

export const Module12 = () => {
  return (
    <ModuleWrapper>
      <BlueContainer>
        <RedBox>
          <Content />
        </RedBox>
      </BlueContainer>
    </ModuleWrapper>
  )
}
