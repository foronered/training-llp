import React from 'react'
import styled from 'styled-components'
import {ModuleWrapper} from './common'


interface AuxiliaryBoxProps {
  width?: string,
  flex?: string,
  height: string,

  margin?: string,

  color: string,
}

const AuxiliaryBox = styled.div.attrs((props: AuxiliaryBoxProps) => props)`
  flex: ${props => props.flex};
  width: ${props => props.width};
  height: ${props => props.height};
  
  margin: ${props => props.margin};
  
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

const SidebarContent = styled.div`
  width: 100%;
  flex: 1 0 auto;
  
  padding: 16px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  background-color: red;
`

const SidebarFooter = styled.div`
  width: 100%;
  flex: 0 0 auto;

  padding: 16px;

  display: flex;
  flex-direction: column;
  background-color: rgb(242, 177, 61);
`

const FooterRow = styled.div`
  width: 100%;
  flex: 0 0 auto;
  
  margin: 16px 0 0 0;
  
  display: flex;
  justify-content: space-between;
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
  
  padding: 0 32px;
  
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
  height: auto;  // Same issue

  padding: 32px;

  display: flex;
  justify-content: space-between;
  background-color: blue;

  overflow: hidden;
`

const LeftContentPane = styled.div`
  flex: 0 1 63%;
  height: 100%;
  
  padding: 32px 32px 0 32px;
  
  display: flex;
  flex-direction: column;
  background-color: rgb(71, 159, 248);
  
  overflow: scroll;
`

const LeftRow = styled.div`
  width: 100%;
  flex: 0 0 120px;

  margin: 0 0 32px 0;
  padding: 32px;

  display: flex;
  justify-content: space-between;
  background-color: lime;
`

const RightContentPane = styled.div`
  flex: 0 1 33%;
  height: 100%;

  padding: 32px 32px 0 32px;

  display: flex;
  flex-direction: column;
  background-color: rgb(71, 159, 248);
  
  overflow: scroll;
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
            <AuxiliaryBox flex={"0 0 64px"} width={"64px"} color={"lime"} />
            <AuxiliaryBox flex={"0 0 64px"} width={"100%"} margin={"16px 0"} color={"lime"} />
          </SidebarContent>
          <SidebarFooter>
            <AuxiliaryBox flex={"0 0 64px"} width={"100%"} color={"lime"} />
            <FooterRow>
              <AuxiliaryBox flex={"0 1 64px"} height={"64px"} color={"red"} />
              <AuxiliaryBox flex={"0 1 64px"} height={"64px"} color={"red"} />
              <AuxiliaryBox flex={"0 1 64px"} height={"64px"} color={"red"} />
            </FooterRow>
          </SidebarFooter>
        </Sidebar>
        <Main>
          <MainHeader>
            <AuxiliaryBox flex={"0 1 48px"} height={"36px"} color={"red"} />
            <AuxiliaryBox flex={"0 1 180px"} height={"36px"} margin={"0 auto 0 30px;"} color={"red"} />
            <RightHeaderMenu>
              <AuxiliaryBox flex={"0 1 42px"} height={"32px"} color={"red"} />
              <AuxiliaryBox flex={"0 1 42px"} height={"32px"} margin={"0 auto 0 18px;"} color={"red"} />
              <AuxiliaryBox flex={"0 1 42px"} height={"32px"} color={"red"} />
            </RightHeaderMenu>
          </MainHeader>
          <MainContent>
            <LeftContentPane>
              <LeftRow>
                <AuxiliaryBox flex={"0 1 64px"} height={"64px"} margin={"0 16px"} color={"red"} />
                <AuxiliaryBox flex={"1 1 256px"} height={"64px"} margin={"0 16px"} color={"rgb(71, 159, 248)"} />
              </LeftRow>
              <LeftRow>
                <AuxiliaryBox flex={"0 1 64px"} height={"64px"} margin={"0 16px"} color={"red"} />
                <AuxiliaryBox flex={"1 1 256px"} height={"64px"} margin={"0 16px"} color={"rgb(71, 159, 248)"} />
              </LeftRow>
              <LeftRow>
                <AuxiliaryBox flex={"0 1 64px"} height={"64px"} margin={"0 16px"} color={"red"} />
                <AuxiliaryBox flex={"1 1 256px"} height={"64px"} margin={"0 16px"} color={"rgb(71, 159, 248)"} />
              </LeftRow>
              <LeftRow>
                <AuxiliaryBox flex={"0 1 64px"} height={"64px"} margin={"0 16px"} color={"red"} />
                <AuxiliaryBox flex={"1 1 256px"} height={"64px"} margin={"0 16px"} color={"rgb(71, 159, 248)"} />
              </LeftRow>
              <LeftRow>
                <AuxiliaryBox flex={"0 1 64px"} height={"64px"} margin={"0 16px"} color={"red"} />
                <AuxiliaryBox flex={"1 1 256px"} height={"64px"} margin={"0 16px"} color={"rgb(71, 159, 248)"} />
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
