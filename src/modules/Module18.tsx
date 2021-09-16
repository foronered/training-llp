import React from 'react'
import styled from 'styled-components'
import { ModuleWrapper } from './common'

const Container = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  background-color: lightgreen;
  align-items: center;
  justify-content: center;
`

const Wrapper = styled.div`
  width: 128px;
  height: 128px;
  display: grid;
  grid-template-columns: 16px 16px 1fr 16px 16px;
  grid-template-rows: 16px 16px 1fr 16px 16px;
`

const Count = 4

const RedSquare = styled.div`
  background-color: red;
  grid-row-start: 2;
  grid-row-end: 5;
  grid-column-start: 2;
  grid-column-end: 5;
`

const BlueCircle = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: lightblue;
  display: flex;
  align-items: center;
  justify-content: center;
  grid-column: 4;
`

const OrangeCircle = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: orange;
`

export const Module18 = () => {
  return (
    <ModuleWrapper>
      <p>LLP-4</p>
      <Container>
        {[...Array(Count)].map((_, i) => (
          <Wrapper key={i}>
            <RedSquare />
            <BlueCircle>
              <OrangeCircle />
            </BlueCircle>
          </Wrapper>
        ))}
      </Container>
    </ModuleWrapper>
  )
}
