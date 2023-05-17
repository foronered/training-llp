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
  background-color: red;
`

const PurpleBox = styled.div`
  width: 100%;
  height: 100%;
  padding-left: 8px;
  padding-top: 8px;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  justify-content: space-between;

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
  width: 200px;
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
const RedRectangle = styled.div`
  width: 100%;
  height: 144px;
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
const BlueButton = styled.div`
  height: 40px;
  margin: 8px 8px 8px 8px;

  @media (min-width: ${MOBILE_BREAKPOINT}) {
    background-color: blue;
  }
`

export const Module10 = () => {
  return (
    <ModuleWrapper>
      <RedContainer>
        <LeftColumn>
          <BlueButton />
          <BlueButton />
          <BlueButton />
          <BlueButton />
        </LeftColumn>
        <BlueBox>
          <PurpleBox>
            <RedRectangle />
            <RedBox />
            <RedBox />
          </PurpleBox>
        </BlueBox>
      </RedContainer>
    </ModuleWrapper>
  )
}
