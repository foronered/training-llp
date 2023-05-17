import React from 'react'
import styled from 'styled-components'
import { MOBILE_BREAKPOINT } from '../constants'
import { ModuleWrapper } from './common'

const RedBox = styled.div`
  width: 100%;
  height: 100%;
  padding-left: 300px;
  @media (min-width: ${MOBILE_BREAKPOINT}) {
    background-color: red;
  }
  @media (max-width: ${MOBILE_BREAKPOINT}) {
    background-color: red;
  }
`

const BlueBox = styled.div`
  width: 100%;
  height: 100%;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 8px;

  @media (min-width: ${MOBILE_BREAKPOINT}) {
    background-color: blue;
  }
  @media (max-width: ${MOBILE_BREAKPOINT}) {
    background-color: blue;
  }
`

const PurpleBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  padding-left: 8px;
  padding-top: 8px;

  @media (min-width: ${MOBILE_BREAKPOINT}) {
    background-color: purple;
  }
  @media (max-width: ${MOBILE_BREAKPOINT}) {
    background-color: purple;
  }
`
const SmallRedBox = styled.div`
  width: calc(33.33% - 16px);
  aspect-ratio: 1/1;
  margin-bottom: 8px;
  margin-right: 8px;

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
      <RedBox>
        <BlueBox>
          <PurpleBox>
            {[...Array(6)].map((_, idx) => (
              <SmallRedBox key={idx} />
            ))}
          </PurpleBox>
        </BlueBox>
      </RedBox>
    </ModuleWrapper>
  )
}
