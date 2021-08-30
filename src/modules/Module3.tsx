import React from 'react'
import styled from 'styled-components'
import { ModuleWrapper } from './common'

// How do I get them to overlap? Disable flex?
const Container = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: blue;
`

const RedBox = styled.div`
  width: 400px;
  height: 400px;
  background-color: red;
  display: flex;
  align-items: center;
  justify-content: center;
`

const OrangeBox = styled.div`
  width: 200px;
  height: 200px;
  background-color: orange;
`

export const Module3 = () => {
  return (
    <ModuleWrapper>
      <Container>
        <RedBox>
          <OrangeBox />
        </RedBox>
      </Container>
    </ModuleWrapper>
  )
}
