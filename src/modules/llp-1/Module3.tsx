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

const OuterBox = styled.div`
  width: 400px;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: ${MOBILE_BREAKPOINT}) {
    background-color: red;
  }

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    background-color: black;
  }
`

const InnerBox = styled.div`
  width: 200px;
  height: 200px;

  @media (min-width: ${MOBILE_BREAKPOINT}) {
    background-color: orange;
  }

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    background-color: lime;
  }
`

export const Module3 = () => {
  return (
    <ModuleWrapper>
      <Container>
        <OuterBox>
          <InnerBox />
        </OuterBox>
      </Container>
    </ModuleWrapper>
  )
}
