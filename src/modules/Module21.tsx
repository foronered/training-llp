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
  flex-direction: column;
  position: relative;
`

// not sure if this is allowed, but I learned that if the blackbar is parent (this would be a bit cleaner for the positioning) it can never be in front of the other elements.

const BlackBar = styled.div`
  width: 64px;
  height: 320px;
  background-color: black;
  z-index: 1;
`

const BlueSquare = styled.div`
  align-items: flex-start;
  background-color: lightblue;
  display: flex;
  height: 160px;
  justify-content: center;
  margin-bottom: 32px;
  padding-top: 32px;
  width: 240px;
`

const RedSquare = styled.div`
  width: 320px;
  height: 240px;
  background-color: red;
`

export const Module21 = () => {
  return (
    <ModuleWrapper>
      <Container>
        <BlueSquare>
          <BlackBar />
        </BlueSquare>
        <RedSquare />
      </Container>
    </ModuleWrapper>
  )
}
