import React from 'react'
import styled from 'styled-components'
import {ModuleWrapper} from './common'


interface AuxiliaryBoxProps {
  flex: string,
  height: string,

  color: string,
}

const AuxiliaryBox = styled.div.attrs((props: AuxiliaryBoxProps) => props)`
  flex: ${props => props.flex};
  height: ${props => props.height};
  
  background-color: ${props => props.color};;
`

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
  
  padding: 16px 32px;

  display: flex;
  justify-content: space-between;
  background-color: rgb(235, 83, 159);
`

const SidebarContent = styled.div`
  width: 100%;
  height: auto;  // Same issue with flex disallowing scroll... ask Luke
  
  padding: 32px 32px 0 32px;

  display: flex;
  flex-direction: column;
  background-color: red;
  
  overflow: scroll;
`

const SidebarRectangle = styled.div`
  width: 100%;
  flex: 0 0 60px;

  margin: 0 0 16px 0;
  background-color: lime;
  
  :last-of-type {
    margin: 0 0 32px 0;  // Margins are different from parent padding
  }
`

const SidebarFooter = styled.div`
  width: 100%;
  flex: 0 0 80px;

  padding: 16px 32px;

  display: flex;
  justify-content: space-between;
  background-color: rgb(242, 177, 61);
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

  padding: 16px 32px;
  
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: rgb(242, 177, 61);
`

const RightHeaderMenu = styled.div`
  flex: 0 1 270px;
  height: 48px;

  padding: 8px 16px;

  display: flex;
  justify-content: space-between;
  background-color: rgb(71, 159, 248);
`

const MainContent = styled.div`
  width: 100%;
  height: auto;  // Can't use flex for overflow again

  padding: 32px 32px 0 32px;

  display: flex;
  flex-direction: column;
  background-color: blue;

  overflow: scroll;
`

const MainContentRow = styled.div`
  width: 100%;
  flex: 0 0 auto;

  margin:  0 0 32px 0;

  display: flex;
  justify-content: flex-start;
`

const MainContentBox = styled.div`
  flex: 0 1 250px;
  height: 150px;
  background-color: rgb(71, 159, 248);

  :first-of-type {
    margin: 0 32px 0 0;
  }
`

export const Module16 = () => {
  return (
    <ModuleWrapper>
      <Container>
        <Sidebar>
          <SidebarHeader>
            <AuxiliaryBox flex={"0 0 48px"} height={"48px"} color={"rgb(71, 159, 248)"} />
            <AuxiliaryBox flex={"0 0 48px"} height={"48px"} color={"rgb(71, 159, 248)"} />
          </SidebarHeader>
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
          <SidebarFooter>
            <AuxiliaryBox flex={"0 0 48px"} height={"48px"} color={"rgb(71, 159, 248)"} />
            <AuxiliaryBox flex={"0 0 172px"} height={"48px"} color={"rgb(71, 159, 248)"} />
          </SidebarFooter>
        </Sidebar>
        <Main>
          <MainHeader>
            <AuxiliaryBox flex={"0 0 196px"} height={"32px"} color={"red"} />
            <RightHeaderMenu>
              <AuxiliaryBox flex={"0 0 42px"} height={"32px"} color={"red"} />
              <AuxiliaryBox flex={"0 0 42px"} height={"32px"} color={"red"} />
              <AuxiliaryBox flex={"0 0 42px"} height={"32px"} color={"red"} />
              <AuxiliaryBox flex={"0 0 42px"} height={"32px"} color={"red"} />
            </RightHeaderMenu>
          </MainHeader>
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
