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
    align-items: center;
    flex-direction: column;
  }
`

const RedBox = styled.div`
  display: flex;
  flex: 0 0 300px;
  padding: 8px;
  gap: 8px;
  flex-direction: column;
  @media (max-width: ${MOBILE_BREAKPOINT}) {
    flex-direction: row;
    width: 100%;
    max-height: 56px;
  }
  background-color: red;
  overflow-y: scroll;
`

const BlueContentArea = styled.div`
  max-width: 700px;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  overflow-y: scroll;
  padding: 16px;
`

const SmallBox = styled.div`
  width: 200px;
  aspect-ratio: 1;
  background-color: red;
`

const GreenBox = styled.div`
  // use flex 0 0 40px instead. good practice so that the height/width doesn't change
  // --> so that scroll is possible within the flex container.
  // otherwise, a wrapper is needed or flex-direction row and flex-wrap wrap
  @media (min-width: ${MOBILE_BREAKPOINT}) {
    flex: 0 0 40px;
  }
  @media (max-width: ${MOBILE_BREAKPOINT}) {
    flex: 0 0 200px;
  }
  background-color: green;
`

export const Module11 = () => {
  const objects = new Array<undefined>(36)
  objects.fill(undefined)
  return (
    <ModuleWrapper>
      <Container>
        <RedBox>
          <GreenBox />
          <GreenBox />
          <GreenBox />
          <GreenBox />
          <GreenBox />
          <GreenBox />
          <GreenBox />
          <GreenBox />
          <GreenBox />
          <GreenBox />
          <GreenBox />
          <GreenBox />
          <GreenBox />
          <GreenBox />
          <GreenBox />
          <GreenBox />
          <GreenBox />
          <GreenBox />
        </RedBox>
        <BlueContentArea>
          {objects.map(() => (
            <SmallBox />
          ))}
        </BlueContentArea>
      </Container>
    </ModuleWrapper>
  )
}
