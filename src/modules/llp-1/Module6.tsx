import React from 'react'
import styled from 'styled-components'
import { MOBILE_BREAKPOINT } from '../../constants'
import { ModuleWrapper } from '../common'

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: blue;
`

const Box = styled.div`
  width: calc(100% - 32px);
  height: calc(100% - 16px);
  display: flex;
  justify-content: center;
  background-color: red;

  @media (min-width: ${MOBILE_BREAKPOINT}) {
  }

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    flex-direction: column;
  }
`
const RedBox = styled.div`
  width: 300px;
  min-height: 100px;
`
const GreenBox = styled.div`
  min-width: calc(100% - 300px);
  height: 100%;
  background-color: lime;
`

export const Module6 = () => {
  return (
    <ModuleWrapper>
      <Container>
        <Box>
          <RedBox />
          <GreenBox />
        </Box>
      </Container>
    </ModuleWrapper>
  )
}
