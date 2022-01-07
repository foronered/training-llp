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

const GreenBox = styled.div`
  flex: 1 0 auto;
  height: 100%;
  
  background-color: lime;
`

export const Module8 = () => {
  return (
    <ModuleWrapper>
      <Container>
        <RedSidebar />
        <ContentBox>
          <GreenBox />
        </ContentBox>
      </Container>
    </ModuleWrapper>
  )
}
