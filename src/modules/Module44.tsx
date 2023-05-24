import React from 'react'
import styled from 'styled-components'
import { DESKTOP_STYLE, MOBILE_BREAKPOINT, MOBILE_STYLE } from '../constants'
import { ModuleWrapper } from './common'

const Container = styled.div`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  gap: 100px;
  background-color: lime;
`
const RedBox = styled.div`
  width: 500px;
  height: 300px;
  position: relative;
  align-items: center;
  justify-content: center;
  background-color: red;
`
const BlackBar = styled.div`
  width: 50px;
  height: 400px;
  position: absolute;
  top: 10%;
  right: 50%;
  transform: translate(50%, -50%);
  background-color: black;
`
const BlueBox = styled.div`
  width: 200px;
  height: 100px;
  align-items: center;
  justify-content: center;
  background-color: DodgerBlue;
`

export const Module44 = () => {
  return (
    <ModuleWrapper>
      <Container>
        <BlueBox />
        <RedBox>
          <BlackBar />
        </RedBox>
      </Container>
    </ModuleWrapper>
  )
}
