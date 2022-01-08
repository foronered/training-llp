import React from 'react'
import styled from 'styled-components'
import {ModuleWrapper} from './common'
import {MOBILE_BREAKPOINT} from "../constants";


interface AuxiliaryBoxProps {
  flex: string,
  height: string,

  hide?: boolean,
  color: string,
}

/* One could very well argue that this is too fancy.
   Nonetheless, I noticed I was getting lost in my boxes a bit and there was a lot of repeated ones,
   so I decided to try this out. */
const AuxiliaryBox = styled.div.attrs((props: AuxiliaryBoxProps) => props)`
  flex: ${props => props.flex};
  height: ${props => props.height};
  
  display: ${props => props.hide ? "none" : "block"};  // We can conditionally hide the element with this prop
  background-color: ${props => props.color};
  
  @media(min-width: ${MOBILE_BREAKPOINT}) {
    display: block;
  }
`

const Container = styled.div`
  width: 100%;
  height: 100%;
  
  display: flex;
`

const Sidebar = styled.div`
  flex: 0 0 128px;
  height: 100%;
  
  display: flex;
  flex-direction: column;
  
  @media(min-width: ${MOBILE_BREAKPOINT}) {
    flex: 0 0 300px;
  }
`

const SidebarHeader = styled.div`
  width: 100%;
  flex: 0 0 96px;
  
  padding: 16px;

  display: flex;
  justify-content: center;
  background-color: rgb(235, 83, 159);
  
  @media(min-width: ${MOBILE_BREAKPOINT}) {
    justify-content: space-between;
  }
`

const HeaderLeftBox = styled.div`
  flex: 0 1 196px;
  height: 48px;
  
  margin: 0 16px 0 0;

  background-color: red;
`

const SidebarContent = styled.div`
  width: 100%;
  height: auto;  // Same issue with flex disallowing scroll... ask Luke
  
  padding: 16px 16px 0 16px;

  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: red;
  
  overflow: scroll;
`

const SidebarRectangle = styled.div`
  width: 64px;
  flex: 0 0 64px;

  margin: 0 0 16px 0;
  background-color: lime;
  
  @media(min-width: ${MOBILE_BREAKPOINT}) {
    width: 100%;
  }
`

const SidebarFooter = styled.div`
  width: 100%;
  flex: 0 0 96px;

  padding: 16px;

  display: flex;
  justify-content: center;
  background-color: rgb(242, 177, 61);
  
  @media(min-width: ${MOBILE_BREAKPOINT}) {
    justify-content: space-between;
  }
`

const Main = styled.div`
  flex: 1 0 auto;
  height: 100%;
  
  display: flex;
  flex-direction: column;
`

const MainHeader = styled.div`
  width: 100%;
  flex: 0 0 96px;

  padding: 16px 32px;
  
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: rgb(242, 177, 61);
`

const RightHeaderMenu = styled.div`
  flex: 0 0 80px;
  height: 64px;

  padding: 8px 16px;

  display: flex;
  justify-content: space-between;
  background-color: rgb(71, 159, 248);
  
  @media(min-width: ${MOBILE_BREAKPOINT}) {
    flex: 0 1 270px;
  }
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
  flex-wrap: wrap;
`

const MainContentBox = styled.div`
  flex: 0 1 75%;
  height: 150px;
  
  margin: 0 auto 0 auto;
  background-color: rgb(71, 159, 248);
  
  @media(min-width: ${MOBILE_BREAKPOINT}) {
    flex: 0 1 250px;
    margin: 0;
  }

  :first-of-type {
    @media(min-width: ${MOBILE_BREAKPOINT}) {
      margin: 0 32px 0 0;
    }
  }
`

export const Module16 = () => {
  return (
    <ModuleWrapper>
      <Container>
        <Sidebar>
          <SidebarHeader>
            <AuxiliaryBox flex={"0 0 64px"} height={"64px"} color={"rgb(71, 159, 248)"} hide={true}/>
            <AuxiliaryBox flex={"0 0 64px"} height={"64px"} color={"rgb(71, 159, 248)"} />
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
            <AuxiliaryBox flex={"0 0 64px"} height={"64px"} color={"rgb(71, 159, 248)"} />
            <AuxiliaryBox flex={"0 0 192px"} height={"64px"} color={"rgb(71, 159, 248)"} hide={true} />
          </SidebarFooter>
        </Sidebar>
        <Main>
          <MainHeader>
            <HeaderLeftBox />
            <RightHeaderMenu>
              <AuxiliaryBox flex={"0 0 48px"} height={"48px"} color={"red"} />
              <AuxiliaryBox flex={"0 0 48px"} height={"48px"} color={"red"} hide={true} />
              <AuxiliaryBox flex={"0 0 48px"} height={"48px"} color={"red"} hide={true} />
              <AuxiliaryBox flex={"0 0 48px"} height={"48px"} color={"red"} hide={true} />
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
