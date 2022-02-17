import React from 'react'
import styled from 'styled-components'
import { DESKTOP_STYLE, MOBILE_STYLE, ModuleWrapper } from './common'

// here since ModuleWrapper shouldn't be edited
const Wrapper = styled.div`
  display: flex;
  height: 100%;
  width: 100%;

  ${DESKTOP_STYLE} {
    flex-direction: row;
  }
  ${MOBILE_STYLE} {
    flex-direction: column;
    align-items: center;
  }
`

const Container = styled.div`
  background-color: blue;
  width: 100%;
  flex: 1;
  overflow: scroll;
  padding: 16px;
`

const RedBox = styled.div`
  background-color: red;
  width: 100%;
  height: 100%;
`

const Bar = styled.div`
  background-color: red;
  display: flex;

  ${DESKTOP_STYLE} {
    padding: 8px;
    flex-direction: column;
    flex: 0 0 300px;
    height: 100%;
  }

  ${MOBILE_STYLE} {
    flex-direction: row;
    width: 100%;
    padding: 8px 0 8px 8px;
    overflow-x: auto;
  }
`

const GreenBox = styled.div`
  background-color: greenyellow;
  flex: 0 0 40px;

  ${DESKTOP_STYLE} {
    flex: 0 0 40px;
    margin-bottom: 8px;
  }
  ${MOBILE_STYLE} {
    height: 40px;
    flex: 0 0 150px;
    margin-right: 8px;
  }
`

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 200px 200px 200px;
  grid-template-rows: repeat(12, 200px);
  grid-gap: 8px;
`

const GridContentArray = [...Array(36)].map(() => <RedBox />)

export const Module11 = () => {
  return (
    <ModuleWrapper>
      <Wrapper>
        <Bar>
          <GreenBox />
          <GreenBox />
          <GreenBox />
          <GreenBox />
          <GreenBox />
        </Bar>
        <Container>
          <GridContainer>{GridContentArray}</GridContainer>
        </Container>
      </Wrapper>
    </ModuleWrapper>
  )
}
