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

const GreenSidebarItem = styled.div`
  width: 100%;
  flex: 0 0 40px;
  
  margin-bottom: 8px;
  background-color: lime;
`

const Content = styled.div`
  flex: 1 0 auto;
  height: 100%;

  padding: 16px;
  overflow: scroll;
`

const ContentGrid = styled.div`
  width: fit-content; // We need this to left align the grid container
  
  display: grid;
  grid-template: repeat(12, 1fr) / repeat(3, 1fr);
  gap: 8px;
`

const RedBox = styled.div`
  width: 200px;
  height: 200px;
  
  background-color: red;
`

export const Module11 = () => {
  return (
    <ModuleWrapper>
      <Container>
        <RedSidebar>
          <GreenSidebarItem />
          <GreenSidebarItem />
          <GreenSidebarItem />
          <GreenSidebarItem />
          <GreenSidebarItem />
        </RedSidebar>
        <Content>
          <ContentGrid>
            <RedBox />
            <RedBox />
            <RedBox />
            <RedBox />
            <RedBox />
            <RedBox />
            <RedBox />
            <RedBox />
            <RedBox />
            <RedBox />
            <RedBox />
            <RedBox />
            <RedBox />
            <RedBox />
            <RedBox />
            <RedBox />
            <RedBox />
            <RedBox />
            <RedBox />
            <RedBox />
            <RedBox />
            <RedBox />
            <RedBox />
            <RedBox />
            <RedBox />
            <RedBox />
            <RedBox />
            <RedBox />
            <RedBox />
            <RedBox />
            <RedBox />
            <RedBox />
            <RedBox />
            <RedBox />
            <RedBox />
            <RedBox />
          </ContentGrid>
        </Content>
      </Container>
    </ModuleWrapper>
  )
}
