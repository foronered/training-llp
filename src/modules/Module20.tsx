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
  height: 400px;
  background-color: red;
  position: relative;
  display: flex;
  justify-content: center;
`

const BlackCircleLeftUp = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: black;
  position: absolute;
  top: 0;
  left: 0;
  margin: -16px;
`

const BlackCircleLeftDown = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: black;
  position: absolute;
  bottom: 0;
  left: 0;
  margin: -16px;
`

const BlackCircleRightUp = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: black;
  position: absolute;
  right: 0;
  top: 0;
  margin: -16px;
`

const BlackCircleRightDown = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: black;
  position: absolute;
  right: 0;
  bottom: 0;
  margin: -16px;
`

const BlackCircleCenter = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: black;
  position: absolute;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
  margin: auto;
`

export const Module20 = () => {
  return (
    <ModuleWrapper>
      <Container>
        <RedSquare>
          <BlackCircleLeftUp />
          <BlackCircleLeftDown />
          <BlackCircleRightUp />
          <BlackCircleRightDown />
          <BlackCircleCenter />
        </RedSquare>
      </Container>
    </ModuleWrapper>
  )
}
