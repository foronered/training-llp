import React from 'react'
import { ModuleWrapper } from './common'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: lime;
  justify-content: center;
  align-items: center;
  gap: 32px;
  position: relative;
`

const BlueRectangle = styled.div`
  background-color: dodgerblue;
  width: 176px;
  flex: 0 0 120px;
`

const RedRectangle = styled.div`
  background-color: red;
  width: 256px;
  flex: 0 0 200px;
`

const BlackBar = styled.div`
  background-color: black;
  width: 40px;
  height: 280px;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
`

export const Module22 = () => {
  return (
    <ModuleWrapper>
      <Container>
        <BlueRectangle />
        <RedRectangle />
        <BlackBar />
      </Container>
    </ModuleWrapper>
  )
}
