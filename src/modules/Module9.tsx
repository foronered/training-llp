import React from 'react'
import styled from 'styled-components'
import { MOBILE_BREAKPOINT } from '../constants'
import { ModuleWrapper } from './common'

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: red;
  padding-left: 300px;
`

const PurpleBox = styled.div`
  width: 100%;
  height: 100%;
  padding-left: 8px;
  padding-top: 8px;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;

  @media (min-width: ${MOBILE_BREAKPOINT}) {
    background-color: purple;
  }

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    background-color: purple;
  }
`

const BlueBox = styled.div`
  width: 100%;
  height: 100%;
  padding-left: 16px;
  padding-top: 8px;
  padding-right: 16px;

  @media (min-width: ${MOBILE_BREAKPOINT}) {
    background-color: blue;
  }

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    background-color: blue;
  }
`

const RedBox = styled.div`
  width: calc(33.33% - 8px);
  aspect-ratio: 1;
  margin-right: 8px;
  margin-bottom: 8px;

  @media (min-width: ${MOBILE_BREAKPOINT}) {
    background-color: red;
  }

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    background-color: red;
  }
`

export const Module9 = () => {
  return (
    <ModuleWrapper>
      <Container>
        <BlueBox>
          <PurpleBox>
            {[...Array(6)].map((_, idx) => (
              <RedBox key={idx} />
            ))}
          </PurpleBox>
        </BlueBox>
      </Container>
    </ModuleWrapper>
  )
}
