import React from 'react'
import styled from 'styled-components'
import { ModuleWrapper } from './common'

const Container = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background-color: blue;
`

const RedBox = styled.div`
  width: 300px;
  height: 300px;
  background-color: red;
  padding: 8px;
  overflow-y: scroll;
`

const GreenBox = styled.div`
  width: 100%;
  height: 36px;
  background-color: green;
  margin-bottom: 8px;
`

const greenBoxes = 36;

export const Module13 = () => {
  return (
    <ModuleWrapper>
      <Container>
        <RedBox>
          {[...Array(greenBoxes)].map((_, i) => <GreenBox key={i} />)}
        </RedBox>
        <RedBox>
          {[...Array(greenBoxes)].map((_, i) => <GreenBox key={i} />)}
        </RedBox>
      </Container>
    </ModuleWrapper>
  )
}
