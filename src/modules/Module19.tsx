import React from 'react'
import { ModuleWrapper } from './common'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  background-color: lime;
  justify-content: center;
  align-items: center;
  gap: 64px;
`

const Square = styled.div`
  flex: 0 0 120px;
  height: 120px;
  background-color: red;
  position: relative;
`

const OuterCircle = styled.div`
  position: absolute;
  top: -36px;
  right: -36px;
  background-color: dodgerblue;
  width: 72px;
  height: 72px;
  border-radius: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const InnerCircle = styled.div`
  background-color: orange;
  height: 40px;
  flex: 0 0 40px;
  border-radius: 20px;
`

const NotificationElement = () => {
  return (
    <Square>
      <OuterCircle>
        <InnerCircle />
      </OuterCircle>
    </Square>
  )
}

export const Module19 = () => {
  return (
    <ModuleWrapper>
      <Container>
        <NotificationElement />
        <NotificationElement />
        <NotificationElement />
        <NotificationElement />
      </Container>
    </ModuleWrapper>
  )
}
