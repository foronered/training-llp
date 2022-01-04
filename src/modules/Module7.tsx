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
  width: 25%;
  height: 100%;
  
  background-color: red;
`

const OrangeBox = styled.div`
  width: 25%;
  height: 100%;
  
  background-color: orange;
`

const GreenBox = styled.div`
  width: 50%;
  height: 100%;
  
  background-color: lime;
`

export const Module7 = () => {
  return (
    <ModuleWrapper>
      <Container>
        <RedBox />
        <OrangeBox />
        <GreenBox />
      </Container>
    </ModuleWrapper>
  )
}
