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

const SmallBlueBox = styled.div`
  flex: 0 0 40px;
  width: 100%;
  margin-bottom: 8px;

  background-color: blue;
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
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  align-content: flex-start;
  gap: 8px;

  background-color: purple;
`

const SmallRedBox = styled.div`
  flex: 0 0 200px;
  height: 200px;

  background-color: firebrick;
`

export const Module10 = () => {
  return (
    <ModuleWrapper>
      <Container>
        <RedBox>
          <SmallBlueBox />
          <SmallBlueBox />
          <SmallBlueBox />
          <SmallBlueBox />
          <SmallBlueBox />
        </RedBox>

        <BlueBox>
          <PurpleBox>
            <SmallRedBox style={{ height: '144px', flex: '0 0 100%' }} />
            <SmallRedBox />
            <SmallRedBox />
          </PurpleBox>
        </BlueBox>
      </Container>
    </ModuleWrapper>
  )
}
