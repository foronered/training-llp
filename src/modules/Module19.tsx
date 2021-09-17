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
`

const RedSquare = styled.div`
  width: 512px;
  height: 128px;
  background-color: red;
  position: relative;
  display: flex;
`

const BlueCircle = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background-color: lightblue;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;¨
  top: 0;
  right: 0;
  margin: -32px;
`

const OrangeCircle = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: orange;
`

// how do you do this centering here? feels like a lot of code for what it is

const BlueBox = styled.div`
  width: 400px;
  height: 64px;
  background-color: lightblue;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  position: relative;
`

const BlackCircleLeft = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: black;
  position: absolute;
  bottom: 0;
  left: 0;
  margin: -16px;
`

// Also here, how to correctly center with position: relative parent?

const BlackCircleMid = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: black;
  position: absolute;
  left: 0;
  right: 0;
  margin-right: auto;
  margin-left: auto;
  margin-top: -16px;
`

const BlackCircleRight = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: black;
  position: absolute;
  right: 0;
  bottom: 0;
  margin: -16px;
`

export const Module19 = () => {
  return (
    <ModuleWrapper>
      <Container>
        <RedSquare>
          <BlueCircle>
            <OrangeCircle />
          </BlueCircle>
          <BlueBox>
            <BlackCircleLeft />
            <BlackCircleMid />
            <BlackCircleRight />
          </BlueBox>
        </RedSquare>
      </Container>
    </ModuleWrapper>
  )
}