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
  flex: 0 0 300px;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: ${MOBILE_BREAKPOINT}) {
    background-color: firebrick;
  }

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    background-color: firebrick;
  }
`

const BlueBox = styled.div`
  flex: 1;
  height: 100%;
  padding: 8px 16px;

  background-color: blue;
`

const PurpleBox = styled.div`
  flex: 1;
  height: 100%;
  padding: 8px;

  display: flex;
  align-content: flex-start;
  background-color: purple;
  flex-wrap: wrap;
  gap: 8px;
`

const SmallRedBox = styled.div`
  width: calc((100% - 16px) / 3);
  height: 200px;

  background-color: firebrick;
`

export const Module9 = () => {
  return (
    <ModuleWrapper>
      <Container>
        <RedBox />

        <BlueBox>
          <PurpleBox>
            <SmallRedBox />
            <SmallRedBox />
            <SmallRedBox />
            <SmallRedBox />
            <SmallRedBox />
            <SmallRedBox />
          </PurpleBox>
        </BlueBox>
      </Container>
    </ModuleWrapper>
  )
}
