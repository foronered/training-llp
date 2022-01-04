import React from 'react'
import styled from 'styled-components'
import {ModuleWrapper} from './common'

const Container = styled.div`
  width: 100%;
  height: 100%;
  
  display: flex;
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

  padding: 8px 16px;
  
  display: flex;
  align-items: center;
  background-color: blue;
`

const PurpleBox = styled.div`
  width: 100%;
  height: 100%;
  
  display: grid;
  grid-template: repeat(2, 1fr) / repeat(3, 1fr);
  
  background-color: purple;
`

const RedBox = styled.div`
  margin: 8px;
  
  background-color: red;
`

export const Module9 = () => {
  return (
    <ModuleWrapper>
      <Container>
        <RedSidebar />
        <BlueContainerBox>
          <PurpleBox>
            <RedBox />
            <RedBox />
            <RedBox />
            <RedBox />
            <RedBox />
            <RedBox />
          </PurpleBox>
        </BlueContainerBox>
      </Container>
    </ModuleWrapper>
  )
}
