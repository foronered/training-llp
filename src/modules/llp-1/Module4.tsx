import React from 'react'
import styled from 'styled-components'
import { DESKTOP_STYLE, MOBILE_STYLE } from '../../constants'
import { ModuleWrapper } from '../common'

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background-color: blue;
`

const Box = styled.div`
  width: calc(100% - 32px);
  height: calc(100% - 16px);

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
