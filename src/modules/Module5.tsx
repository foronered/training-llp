import React from 'react'
import styled from 'styled-components'
import {ModuleWrapper} from './common'


const Container = styled.div`
  width: 100%;
  height: 100%;

  padding: 8px 16px;

  display: flex;
  background-color: blue;
`

const RedBox = styled.div`
  flex: 1 0 auto;
  height: 100%;
  
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: red;
`

const GreenBox = styled.div`
  flex: 0 1 64px;
  height: 64px;
  
  background-color: lime;
`

const BlueBox = styled.div`
  flex: 0 1 256px;
  height: 64px;
  
  background-color: deepskyblue;
`

const OrangeBox = styled.div`
  flex: 0 1 128px;
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
