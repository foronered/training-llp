import React from 'react'
import styled from 'styled-components'
import {ModuleWrapper} from './common'


const Container = styled.div`
  width: 100%;
  height: 100%;

  padding: 8px 16px;

  display: flex;
  justify-content: center;
  align-items: center;
  background-color: blue;
`

const RedBox = styled.div`
  flex: 0 0 300px;
  height: 100%;
  
  background-color: red;
`

const GreenBox = styled.div`
  flex: 1 0 auto;
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
