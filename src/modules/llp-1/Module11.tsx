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
  width: 300px;
  padding: 8px;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  @media (max-width: ${MOBILE_BREAKPOINT}) {
    flex-direction: row;
    width: fit-content;
  }
`
const BlueScrollWrapper = styled.div`
  overflow: scroll;
  padding: 16px;
`

const RedScrollWrapper = styled.div`
  overflow: scroll;
  min-height: 56px;
  width: 300px;
  @media (max-width: ${MOBILE_BREAKPOINT}) {
    width: 100%;
  }
  background-color: red;
`

const ContentArea = styled.div`
  max-width: 616px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`

const SmallBox = styled.div`
  width: 200px;
  aspect-ratio: 1;
  background-color: red;
`

const GreenBox = styled.div`
  height: 40px;
  width: 284px;
  background-color: green;
`

export const Module11 = () => {
  const objects = new Array<undefined>(36)
  objects.fill(undefined)
  return (
    <ModuleWrapper>
      <Container>
        <RedScrollWrapper>
          <RedBox>
            <GreenBox />
            <GreenBox />
            <GreenBox />
            <GreenBox />
            <GreenBox />
          </RedBox>
        </RedScrollWrapper>
        <BlueScrollWrapper>
          <ContentArea>
            {objects.map(() => (
              <SmallBox />
            ))}
          </ContentArea>
        </BlueScrollWrapper>
      </Container>
    </ModuleWrapper>
  )
}
