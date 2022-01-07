import React from 'react'
import styled from 'styled-components'
import {ModuleWrapper} from './common'


const Container = styled.div`
  width: 100%;
  height: 100%;
  
  display: flex;
  background-color: blue;
`

const RedSidebar = styled.div`
  flex: 0 0 300px;
  height: 100%;
  
  background-color: red;
`

const ContentBox = styled.div`
  flex: 1 0 auto;
  height: 100%;
  
  padding: 8px 16px 0 16px;
  display: flex;
`

const PurpleBox = styled.div`
  flex: 1 0 auto;
  height: 100%;
  
  padding: 8px;
  display: grid;
  grid-template: repeat(2, 1fr) / repeat(3, 1fr);
  gap: 8px;
  
  background-color: purple;
`

const RedBox = styled.div`
  background-color: red;
`

export const Module9 = () => {
  return (
    <ModuleWrapper>
      <Container>
        <RedSidebar />
        <ContentBox>
          <PurpleBox>
            <RedBox />
            <RedBox />
            <RedBox />
            <RedBox />
            <RedBox />
            <RedBox />
          </PurpleBox>
        </ContentBox>
      </Container>
    </ModuleWrapper>
  )
}
