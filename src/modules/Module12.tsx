import React from 'react'
import styled from 'styled-components'
import { ModuleWrapper } from './common'

const Container = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: blue;
`

const RedBox = styled.div`
  width: 300px;
  height: 300px;
  background-color: red;
  padding: 8px;
  overflow-y: scroll;
  display: flex;
`

const GreenBox = styled.div`
  flex: 1;
  height: 800px;
  background-color: green;
`

export const Module12 = () => {
  return (
    <ModuleWrapper>
      <Container>
        <RedBox>
          <GreenBox />
        </RedBox>
      </Container>
    </ModuleWrapper>
  )
}
