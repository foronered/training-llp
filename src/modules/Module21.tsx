import React from 'react'
import styled from 'styled-components'
import { ModuleWrapper } from './common'

const Container = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  background-color: lightgreen;
  align-items: center;
  justify-content: space-evenly;
  position: relative;
`

// not sure if this is allowed, but I learned that if the blackbar is parent (this would be a bit cleaner for the positioning) it can never be in front of the other elements.

const BlackBar = styled.div`
  width: 64px;
  height: 320px;
  background-color: black;
  position: absolute;
  display: flex;
  justify-content: center;
  z-index: 1;
`

const BlueSquare = styled.div`
  width: 240px;
  height: 160px;
  background-color: lightblue;
  display: flex;
  justify-content: center;
  position: absolute;
  top: 15%;
  z-index: 0;
`

const RedSquare = styled.div`
  width: 320px;
  height: 240px;
  background-color: red;
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: 10%;
  z-index: 0;
`

export const Module21 = () => {
  return (
    <ModuleWrapper>
      <Container>
        <BlackBar />
        <BlueSquare />
        <RedSquare />
      </Container>
    </ModuleWrapper>
  )
}
