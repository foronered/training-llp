import React from 'react'
import styled from 'styled-components'
import { MOBILE_BREAKPOINT } from '../constants'
import { ModuleWrapper } from './common'

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: green;
`

const RedBox = styled.div`
  height: 250px;
  width: 400px;
  background-color: red;
`

const BlueBox = styled.div`
  height: 150px;
  width: 250px;
  background-color: blue;
`

const BlackBox = styled.div`
  height: 300px;
  width: 50px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: black;
`

export const Module44 = () => {
  return (
    <ModuleWrapper>
      <Container>
        <BlueBox />
        <RedBox>
          <BlackBox />
        </RedBox>
      </Container>
    </ModuleWrapper>
  )
}
