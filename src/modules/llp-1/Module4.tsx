import React from 'react'
import styled from 'styled-components'
import { MOBILE_BREAKPOINT } from '../../constants'
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

  @media (min-width: ${MOBILE_BREAKPOINT}) {
    background-color: red;
  }

  @media (max-width: ${MOBILE_BREAKPOINT}) {
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
