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
  top: -16px;
  left: -16px;
`

const BlackCircleLeftDown = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: black;
  position: absolute;
  bottom: -16px;
  left: -16px;
`

const BlackCircleRightUp = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: black;
  position: absolute;
  right: -16px;
  top: -16px;
`

const BlackCircleRightDown = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: black;
  position: absolute;
  right: -16px;
  bottom: -16px;
`

const BlackCircleCenter = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: black;
  position: absolute;
  right: calc(50% - 16px);
  top: calc(50% - 16px);
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
