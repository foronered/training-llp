import React from 'react'
import styled from 'styled-components'
import { MOBILE_BREAKPOINT } from '../constants'
import { ModuleWrapper } from './common'

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  align-items: center;
  justify-content: center;
  background-color: #4ac04a;
  gap: 64px;
`

const RedBox = styled.div`
  position: absolute;
  background-color: red;
  width: 200px;
  height: 150px;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%); // centers the dot in the container
`

const BlueBox = styled.div`
  position: absolute;
  background-color: blue;
  width: 150px;
  height: 100px;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%); // centers the dot in the container
`

const BlackBox = styled.div`
  position: absolute;
  background-color: black;
  width: 30px;
  height: 250px;
  top: 48%;
  left: 50%;
  transform: translate(-50%, -50%); // centers the dot in the container
`

export const Module44 = () => {
  return (
    <ModuleWrapper>
      <Container>
        <RedBox />
        <BlueBox />
        <BlackBox />
      </Container>
    </ModuleWrapper>
  )
}
// border radius hoch
// position absolute and pos relative
