import React from 'react'
import styled from 'styled-components'
import { ModuleWrapper } from './common'

const Container = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  background-color: blue;
  padding: 8px 16px;
`
const RedBox = styled.div`
  flex: 0 0 304px;
  height: 100%;
  background-color: red;
`

const GreenBox = styled.div`
  flex: 1;
  height: 100%;
  background-color: lime;
`


export const Module6 = () => {
  return (
    <ModuleWrapper>
      <Container>
        <RedBox />
        <GreenBox />
      </Container>
    </ModuleWrapper>
  )
}
