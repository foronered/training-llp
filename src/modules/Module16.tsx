import React from 'react'
import styled from 'styled-components'
import {ModuleWrapper} from './common'


const Container = styled.div`
  width: 100%;
  height: 100%;
  
  display: flex;
`

const Sidebar = styled.div`
  flex: 0 0 300px;
  height: 100%;
  
  display: flex;
  flex-direction: column;
`

const SidebarHeader = styled.div`
  width: 100%;
  flex: 0 0 80px;
  
  background-color: palevioletred;
`

const SidebarContent = styled.div`
  width: 100%;
  height: auto;
  
  padding: 32px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: red;
  
  overflow: scroll;
`

const SidebarRectangle = styled.div`
  width: 100%;
  flex: 0 0 40px;

  margin: 8px 0;
  
  :first-of-type {
    margin: 0 0 8px 0;
  }

  :last-of-type {
    margin: 8px 0 0 0;
  }
  
  background-color: lime;
`

const SidebarFooter = styled.div`
  width: 100%;
  flex: 0 0 80px;
  
  background-color: bisque;
`

const Main = styled.div`
  flex: 1 0 auto;
  height: 100%;
  
  display: flex;
  flex-direction: column;
`

const MainHeader = styled.div`
  width: 100%;
  flex: 0 0 80px;

  background-color: bisque;
`

const MainContent = styled.div`
  width: 100%;
  height: auto;

  padding: 32px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: blue;

  overflow: scroll;
`

const MainContentRow = styled.div`
  width: 100%;

  margin: 16px 0;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  :first-of-type {
    margin: 0 0 16px 0;
  }

  :last-of-type {
    margin: 16px 0 0 0;
  }
`

const MainContentBox = styled.div`
  flex: 0 1 300px;
  height: 200px;
  background-color: lightskyblue;

  :first-of-type {
    margin: 0 32px 0 0;
  }
`

export const Module16 = () => {
  return (
    <ModuleWrapper>
      <Container>
        <Sidebar>
          <SidebarHeader />
          <SidebarContent>
            <SidebarRectangle />
            <SidebarRectangle />
            <SidebarRectangle />
            <SidebarRectangle />
            <SidebarRectangle />
            <SidebarRectangle />
            <SidebarRectangle />
            <SidebarRectangle />
            <SidebarRectangle />
            <SidebarRectangle />
            <SidebarRectangle />
            <SidebarRectangle />
          </SidebarContent>
          <SidebarFooter />
        </Sidebar>
        <Main>
          <MainHeader />
          <MainContent>
            <MainContentRow>
              <MainContentBox />
              <MainContentBox />
            </MainContentRow>
            <MainContentRow>
              <MainContentBox />
              <MainContentBox />
            </MainContentRow>
            <MainContentRow>
              <MainContentBox />
              <MainContentBox />
            </MainContentRow>
            <MainContentRow>
              <MainContentBox />
              <MainContentBox />
            </MainContentRow>
          </MainContent>
        </Main>
      </Container>
    </ModuleWrapper>
  )
}
