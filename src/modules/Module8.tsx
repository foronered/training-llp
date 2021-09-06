import React from 'react'
import styled from 'styled-components'
import { ModuleWrapper } from './common'

const Container = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  background-color: blue;
`

// Navbar
const RedBox = styled.div`
  flex: 0 0 304px;
  height: 100%;
  background-color: red;
`

// View
const ViewContainer = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  background-color: blue;
  padding: 8px 16px 0px 16px;
`

// replace width with flex 1
const GreenBox = styled.div`
  flex: 1;
  height: 100%;
  background-color: lime;
`


export const Module8 = () => {
  return (
    <ModuleWrapper>
      <Container>
        <RedBox />
        <ViewContainer>
          <GreenBox />
        </ViewContainer>
      </Container>
    </ModuleWrapper>
  )
}
