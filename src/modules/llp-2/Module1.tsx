import React from 'react'
import styled from 'styled-components'
import { DESKTOP_STYLE, MOBILE_STYLE } from '../../constants'
import { ModuleWrapper } from '../common'

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: blue;
`

const RedBox = styled.div`
  flex: 0 0 200px;
  height: 200px;
  padding: 16px;
  overflow-y: scroll;
  background-color: red;
`
const Inner = styled.div`
  width: 100%;
  height: 400px;
  ${DESKTOP_STYLE} {
    background-color: lime;
  }
  ${MOBILE_STYLE} {
    background-color: orange;
  }
`

export const Module1 = () => {
  return (
    <ModuleWrapper>
      <Container>
        <RedBox>
          <Inner />
        </RedBox>
      </Container>
    </ModuleWrapper>
  )
}
