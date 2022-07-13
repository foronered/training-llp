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

const Box = styled.div`
  flex: 1;

  ${DESKTOP_STYLE} {
    background-color: red;
  }

  ${MOBILE_STYLE} {
    background-color: dodgerblue;
  }
`

export const Module4 = () => {
  return (
    <ModuleWrapper>
      <Container>
        <Box />
      </Container>
    </ModuleWrapper>
  )
}
