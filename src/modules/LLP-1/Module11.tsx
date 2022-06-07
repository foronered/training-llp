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

const RedBox = styled.div`
  width: 300px;
  height: 100%;
  padding: 8px;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;

  @media (min-width: ${MOBILE_BREAKPOINT}) {
    background-color: firebrick;
  }

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    background-color: firebrick;
  }
`

const SmallGreenBox = styled.div`
  flex: 0 0 40px;
  width: 100%;
  margin-bottom: 8px;

  background-color: green;
`

const BlueBox = styled.div`
  flex: 1;
  height: 100%;
  padding: 16px;
  gap: 8px;

  background-color: blue;

  display: flex;
  flex-wrap: wrap;

  overflow: scroll;
`

const SmallRedBox = styled.div`
  flex: 0 0 200px;
  height: 200px;

  background-color: firebrick;
`

export const Module11 = () => {
  return (
    <ModuleWrapper>
      <Container>
        <RedBox>
          <SmallGreenBox />
          <SmallGreenBox />
          <SmallGreenBox />
          <SmallGreenBox />
          <SmallGreenBox />
        </RedBox>

        <BlueBox>
          {new Array(36).fill(0).map((_, i) => (
            <SmallRedBox key={i} />
          ))}
        </BlueBox>
      </Container>
    </ModuleWrapper>
  )
}
