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
  width: 100%;
  height: 100%;
  
  background-color: red;
`

export const Module4 = () => {
  return (
    <ModuleWrapper>
      <Container>
        <RedBox />
      </Container>
    </ModuleWrapper>
  )
}
