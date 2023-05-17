import React from 'react'
import styled from 'styled-components'
import { MOBILE_BREAKPOINT } from '../constants'
import { ModuleWrapper } from './common'

const RedContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #00ffa2;
`

const BlueBox = styled.div`
  width: 100%;
  height: 100%;
  padding-left: 16px;
  padding-top: 16px;
  padding-right: 5%;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  overflow-y: auto;

  @media (min-width: ${MOBILE_BREAKPOINT}) {
    background-color: blue;
  }

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    background-color: blue;
  }
`

const RedBox = styled.div`
  width: 200px;
  height: 200px;
  margin-right: 8px;
  margin-bottom: 8px;

  @media (min-width: ${MOBILE_BREAKPOINT}) {
    background-color: red;
  }

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    background-color: red;
  }
`

const LeftColumn = styled.div`
  flex: 0 0 300px;
  height: 100%;

  @media (min-width: ${MOBILE_BREAKPOINT}) {
    background-color: red;
  }
`
const GreenButton = styled.div`
  height: 40px;
  margin: 8px 8px 8px 8px;

  @media (min-width: ${MOBILE_BREAKPOINT}) {
    background-color: green;
  }
`

export const Module11 = () => {
  return (
    <ModuleWrapper>
      <RedContainer>
        <LeftColumn>
          <GreenButton />
          <GreenButton />
          <GreenButton />
          <GreenButton />
        </LeftColumn>
        <BlueBox>
          {[...Array(36)].map((_, idx) => (
            <RedBox key={idx} />
          ))}
        </BlueBox>
      </RedContainer>
    </ModuleWrapper>
  )
}
