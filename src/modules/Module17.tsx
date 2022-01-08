import React from 'react'
import styled from 'styled-components'
import {ModuleWrapper} from './common'
import {MOBILE_BREAKPOINT} from "../constants";


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

const SidebarContent = styled.div`
  width: 100%;
  flex: 1 0 auto;
  
  padding: 16px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: red;
  
  @media(min-width: ${MOBILE_BREAKPOINT}) {
    align-items: flex-start;
  }
`

const SidebarTopBox = styled.div`
  width: 64px;
  flex: 0 0 64px;
  
  background-color: lime;
`

const SidebarBottomBox = styled.div`
  width: 100%;
  flex: 0 0 64px;
  
  margin: 16px 0;
  display: none;
  background-color: lime;
  
  @media(min-width: ${MOBILE_BREAKPOINT}) {
    display: block;
  }
`

const SidebarFooter = styled.div`
  width: 100%;
  flex: 0 0 auto;

  padding: 16px;

  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgb(242, 177, 61);
`

const FooterTopBox = styled.div`
  flex: 0 0 64px;
  width: 64px;
  
  background-color: lime;
  
  @media(min-width: ${MOBILE_BREAKPOINT}) {
    width: 100%;
  }
`

const FooterRow = styled.div`
  width: 100%;
  flex: 0 0 auto;
  
  margin: 16px 0 0 0;
  
  display: flex;
  visibility: hidden;
  justify-content: space-between;
  
  @media(min-width: ${MOBILE_BREAKPOINT}) {
    visibility: visible;
  }
`

const FooterRowBox = styled.div`
  flex: 0 1 64px;
  height: 64px;
  
  background-color: red;
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
  
  padding: 16px 32px 0 32px;
  background-color: rgb(242, 177, 61);
  
  @media(min-width: ${MOBILE_BREAKPOINT}) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`

const MainHeaderRow = styled.div`
  width: 100%;
  display: flex;
  
  margin: 0 0 16px 0;
  
  @media(min-width: ${MOBILE_BREAKPOINT}) {
    width: 50%;
  }
`

const HeaderRedBox = styled.div`
  flex: 0 1 48px;
  height: 48px;
  
  background-color: red;
`

const HeaderLeftFlexBox = styled.div`
  flex: 0 1 180px;
  height: 48px;
  
  margin: 0 0 0 30px;
  background-color: red;
`

const HeaderRightFlexBox = styled.div`
  flex: 0 1 48px;
  height: 48px;
  
  margin: 0 auto 0 18px;
  background-color: red;
`

const RightHeaderMenu = styled.div`
  flex: 0 1 270px;
  height: 64px;
  
  padding: 8px 16px;
  display: flex;
  justify-content: space-between;
  background-color: rgb(71, 159, 248);
  
  @media(min-width: ${MOBILE_BREAKPOINT}) {
    margin: 0 0 0 auto;
  }
`

const MainContent = styled.div`
  width: 100%;
  height: auto;  // Same issue

  padding: 0;

  display: flex;
  justify-content: space-between;
  background-color: blue;

  overflow: hidden;
  
  @media(min-width: ${MOBILE_BREAKPOINT}) {
    padding: 32px;
  }
`

const LeftContentPane = styled.div`
  flex: 1 0 auto;
  height: 100%;
  
  padding: 32px 32px 0 32px;
  
  display: flex;
  flex-direction: column;
  background-color: rgb(71, 159, 248);
  
  overflow: scroll;
  
  @media(min-width: ${MOBILE_BREAKPOINT}) {
    flex: 0 1 63%;
  }
`

const LeftRow = styled.div`
  width: 100%;
  flex: 0 0 120px;

  margin: 0 0 32px 0;
  padding: 32px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: lime;
  
  @media(min-width: ${MOBILE_BREAKPOINT}) {
    flex-direction: row;
  }
`

const LeftRowRedBox = styled.div`
  flex: 0 0 64px;
  width: 64px;
  
  margin: 0 16px 16px 16px;
  background-color: red;

  @media(min-width: ${MOBILE_BREAKPOINT}) {
    flex: 0 1 64px;
    width: auto;
    height: 64px;
    margin: 0 16px;
  }
`

const LeftRowBlueBox = styled.div`
  flex: 0 0 64px;
  width: 100%;
  
  margin: 0 16px;
  background-color: rgb(71, 159, 248);
  
  @media(min-width: ${MOBILE_BREAKPOINT}) {
    flex: 1 1 256px;
    width: auto;
    height: 64px;
  }
`

const RightContentPane = styled.div`
  flex: 0 1 33%;
  height: 100%;

  padding: 32px 32px 0 32px;
  
  display: none;
  flex-direction: column;
  background-color: rgb(71, 159, 248);
  
  overflow: scroll;
  
  @media(min-width: ${MOBILE_BREAKPOINT}) {
    display: flex;
  }
`

const RightRow = styled.div`
  width: 100%;
  flex: 0 0 60px;

  margin: 0 0 32px 0;
  padding: 32px;

  display: flex;
  justify-content: space-between;
  background-color: lime;
`

export const Module17 = () => {
  return (
    <ModuleWrapper>
      <Container>
        <Sidebar>
          <SidebarContent>
            <SidebarTopBox />
            <SidebarBottomBox />
          </SidebarContent>
          <SidebarFooter>
            <FooterTopBox />
            <FooterRow>
              <FooterRowBox />
              <FooterRowBox />
              <FooterRowBox />
            </FooterRow>
          </SidebarFooter>
        </Sidebar>
        <Main>
          <MainHeader>
            <MainHeaderRow>
              <HeaderRedBox />
              <HeaderLeftFlexBox />
            </MainHeaderRow>
            <MainHeaderRow>
              <RightHeaderMenu>
                <HeaderRedBox />
                <HeaderRightFlexBox />
                <HeaderRedBox />
              </RightHeaderMenu>
            </MainHeaderRow>
          </MainHeader>
          <MainContent>
            <LeftContentPane>
              <LeftRow>
                <LeftRowRedBox />
                <LeftRowBlueBox />
              </LeftRow>
              <LeftRow>
                <LeftRowRedBox />
                <LeftRowBlueBox />
              </LeftRow>
              <LeftRow>
                <LeftRowRedBox />
                <LeftRowBlueBox />
              </LeftRow>
              <LeftRow>
                <LeftRowRedBox />
                <LeftRowBlueBox />
              </LeftRow>
              <LeftRow>
                <LeftRowRedBox />
                <LeftRowBlueBox />
              </LeftRow>
            </LeftContentPane>
            <RightContentPane>
              <RightRow/>
              <RightRow/>
              <RightRow/>
              <RightRow/>
              <RightRow/>
              <RightRow/>
              <RightRow/>
              <RightRow/>
            </RightContentPane>
          </MainContent>
        </Main>
      </Container>
    </ModuleWrapper>
  )
}
