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
  
  padding: 8px 8px 0 8px;
  display: flex;
  flex-direction: column;
  background-color: red;
`

const BlueSidebarItem = styled.div`
  width: 100%;
  flex: 0 0 40px;
  
  margin: 0 0 8px 0;
  background-color: blue;
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

  padding: 8px 8px 0 8px;
  display: flex;
  flex-direction: column;
  background-color: purple;
`

const RedBoxRow = styled.div`
  width: 100%;
  flex: 0 0 auto;  // Take the height of the content
  
  margin: 0 0 8px 0;
  display: flex;
  justify-content: space-between;
`

const LongRedBox = styled.div`
  flex: 1 1 auto;
  height: 144px;
  
  background-color: red;
`

const RedBox = styled.div`
  flex: 0 1 200px;
  height: 200px;
  
  background-color: red;
`

export const Module10 = () => {
  return (
    <ModuleWrapper>
      <Container>
        <RedSidebar>
          <BlueSidebarItem />
          <BlueSidebarItem />
          <BlueSidebarItem />
          <BlueSidebarItem />
          <BlueSidebarItem />
        </RedSidebar>
        <ContentBox>
          <PurpleBox>
            <RedBoxRow>
              <LongRedBox />
            </RedBoxRow>
            <RedBoxRow>
              <RedBox />
              <RedBox />
            </RedBoxRow>
          </PurpleBox>
        </ContentBox>
      </Container>
    </ModuleWrapper>
  )
}
