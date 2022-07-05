import React from 'react'
import styled from 'styled-components'
import { ModuleWrapper } from '../common'

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #6cd144;
  flex-direction: column;
  padding: 160px 440px;
  gap: 48px;
`
const Blue = styled.div`
  width: 70%;
  height: 75%;
  background-color: dodgerblue;
`

const Red = styled.div`
  background-color: red;
  width: 100%;
  height: 100%;
`

const Black = styled.div`
  background-color: black;
  width: 48px;
  height: 300px;
  position: absolute;
`

export const Module4 = () => {
  return (
    <ModuleWrapper>
      <Container>
        <Black />
        <Blue />
        <Red />
      </Container>
    </ModuleWrapper>
  )
}
