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
  
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: red;
`

const GreenBox = styled.div`
  width: 64px;
  height: 64px;
  
  background-color: lime;
`

const BlueBox = styled.div`
  width: 256px;
  height: 64px;
  
  background-color: deepskyblue;
`

const OrangeBox = styled.div`
  width: 128px;
  height: 64px;
  
  background-color: orange;
`

export const Module5 = () => {
  return (
    <ModuleWrapper>
      <Container>
        <RedBox>
          <GreenBox />
          <BlueBox />
          <OrangeBox />
        </RedBox>
      </Container>
    </ModuleWrapper>
  )
}
