import React from 'react'
import styled from 'styled-components'
import { MOBILE_BREAKPOINT } from '../../constants'
import { ModuleWrapper } from '../common'

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  background-color: blue;
  @media (max-width: ${MOBILE_BREAKPOINT}) {
    overflow: scroll;
    padding: 8px;
    align-items: center;
    flex-direction: column;
  }
`

const RedBox = styled.div`
  width: 300px;
  background-color: red;
  padding: 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`

const PurpleBox = styled.div`
  padding: 8px;
  display: grid;
  grid-template-columns: 200px auto 200px;
  grid-template-rows: 144px 200px;
  grid-gap: 8px;
  background-color: purple;
  min-width: calc(100% - 332px);
  margin: 0 16px;
  margin-top: 8px;
`

const SmallBox = styled.div`
  width: 200px;
  aspect-ratio: 1;
  background-color: red;
`
const WideBox = styled.div`
  width: 100%;
  height: 100%;
  grid-column-start: 1;
  grid-column-end: 4;
  background-color: red;
`

const BlueBox = styled.div`
  height: 40px;
  width: 100%;
  background-color: blue;
`

export const Module10 = () => {
  return (
    <ModuleWrapper>
      <Container>
        <RedBox>
          <BlueBox />
          <BlueBox />
          <BlueBox />
          <BlueBox />
          <BlueBox />
        </RedBox>
        <PurpleBox>
          <WideBox />
          <SmallBox />
          <div />
          <SmallBox />
        </PurpleBox>
      </Container>
    </ModuleWrapper>
  )
}
