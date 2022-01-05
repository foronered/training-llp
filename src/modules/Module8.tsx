import React from 'react'
import styled from 'styled-components'
import {ModuleWrapper} from './common'

const Container = styled.div`
  width: 100%;
  height: 100%;
  
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: blue;
`

const RedSidebar = styled.div`
  width: 300px;
  height: 100%;
  
  flex-shrink: 0;
  background-color: red;
`

const BlueContainerBox = styled.div`
  width: 100%;
  height: 100%;

  padding: 8px 16px 0 16px;
  
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: blue;
`

const GreenBox = styled.div`
  width: 100%;
  height: 100%;
  
  background-color: lime;
`

export const Module8 = () => {
  return (
    <ModuleWrapper>
      <Container>
        <RedSidebar />
        <BlueContainerBox>
          <GreenBox />
        </BlueContainerBox>
      </Container>
    </ModuleWrapper>
  )
}
