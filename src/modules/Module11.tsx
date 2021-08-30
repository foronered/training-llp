import React from 'react'
import styled from 'styled-components'
import { ModuleWrapper } from './common'

const Container = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: blue;
`

const MediaContainer = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  background-color: blue;
  padding: 8px 16px 0px 16px;
  overflow-y: scroll;
`

const RedBox = styled.div`
  flex: 0 0 300px;
  height: 100%;
  background-color: red;
  padding: 8px;
`

const GreenBox = styled.div`
  flex: 1;
  height: 40px;
  background-color: green;
  margin-bottom: 8px;
`

const RedSquare = styled.div`
  width: 200px;
  height: 200px;
  background-color: red;
  margin: 8px;
`

const NumberOfBoxes = 36;

export const Module11 = () => {
  return (
    <ModuleWrapper>
      <Container>
        <RedBox>
          <GreenBox />
          <GreenBox />
          <GreenBox />
          <GreenBox />
          <GreenBox />
        </RedBox>
        <MediaContainer>
          {[...Array(NumberOfBoxes)].map((_, i) => <RedSquare key={i} />)}
        </MediaContainer>
      </Container>
    </ModuleWrapper>
  )
}
