import React from 'react'
import styled from 'styled-components'
import {ModuleWrapper} from './common'


interface AuxiliaryBoxProps {
  width: string,
  height: string,

  margin?: string,

  color: string,
}

interface RowProps {
  height: string
}

const AuxiliaryBox = styled.div.attrs((props: AuxiliaryBoxProps) => props)`
  width: ${props => props.width};
  height: ${props => props.height};
  
  margin: ${props => props.margin};
  
  background-color: ${props => props.color};;
`

const AuxiliaryFlexBox = styled.div.attrs((props: AuxiliaryBoxProps) => props)`
  flex: ${props => props.width};
  height: ${props => props.height};

  margin: ${props => props.margin};
  
  background-color: ${props => props.color};;
`

const Row = styled.div.attrs((props: RowProps) => props)`
  width: 100%;
  flex: 0 0 ${props => props.height};
  
  margin: 16px 0;
  padding: 32px;
  
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: rgb(129, 214, 83);

  :first-of-type {
    margin: 0 0 16px 0;
  }

  :last-of-type {
    margin: 16px 0 0 0;
  }
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
  height: auto;
  flex: 1 0 auto;
  
  padding: 16px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  background-color: red;
  
  overflow: scroll;
`

const SidebarFooter = styled.div`
  width: 100%;
  height: auto;
  flex: 0 0 auto;

  padding: 16px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: rgb(242, 177, 61);
`

const FooterRow = styled.div`
  width: 100%;
  height: auto;
  flex: 0 0 auto;
  
  margin: 16px 0 0 0;
  
  display: flex;
  align-items: center;
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

  padding: 0 16px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: rgb(71, 159, 248);
`

const MainContent = styled.div`
  width: 100%;
  height: auto;

  padding: 32px;

  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  background-color: blue;

  overflow: hidden;
`

const LeftContentPane = styled.div`
  flex: 0 1 63%;
  height: 100%;
  
  padding: 32px;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: rgb(71, 159, 248);
  
  overflow: scroll;
`

const RightContentPane = styled.div`
  flex: 0 1 33%;
  height: 100%;

  padding: 32px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: rgb(71, 159, 248);
  
  overflow: scroll;
`

export const Module17 = () => {
  return (
    <ModuleWrapper>
      <Container>
        <Sidebar>
          <SidebarContent>
            <AuxiliaryBox width={"48px"} height={"48px"} color={"rgb(129, 214, 83)"} />
            <AuxiliaryBox width={"100%"} height={"48px"} margin={"16px 0"} color={"rgb(129, 214, 83)"} />
          </SidebarContent>
          <SidebarFooter>
            <AuxiliaryBox width={"100%"} height={"48px"} color={"rgb(129, 214, 83)"} />
            <FooterRow>
              <AuxiliaryBox width={"64px"} height={"64px"} color={"red"} />
              <AuxiliaryBox width={"64px"} height={"64px"} color={"red"} />
              <AuxiliaryBox width={"64px"} height={"64px"} color={"red"} />
            </FooterRow>
          </SidebarFooter>
        </Sidebar>
        <Main>
          <MainHeader>
            <AuxiliaryBox width={"48px"} height={"36px"} color={"red"} />
            <AuxiliaryBox width={"180px"} height={"36px"} margin={"0 auto 0 30px;"} color={"red"} />
            <RightHeaderMenu>
              <AuxiliaryFlexBox width={"0 1 42px"} height={"32px"} color={"red"} />
              <AuxiliaryFlexBox width={"0 1 42px"} height={"32px"} margin={"0 auto 0 18px;"} color={"red"} />
              <AuxiliaryFlexBox width={"0 1 42px"} height={"32px"} color={"red"} />
            </RightHeaderMenu>
          </MainHeader>
          <MainContent>
            <LeftContentPane>
              <Row height={"120px"}>
                <AuxiliaryFlexBox width={"0 1 64px"} height={"64px"} margin={"0 16px"} color={"red"} />
                <AuxiliaryFlexBox width={"1 1 256px"} height={"64px"} margin={"0 16px"} color={"rgb(71, 159, 248)"} />
              </Row>
              <Row height={"120px"}>
                <AuxiliaryFlexBox width={"0 1 64px"} height={"64px"} margin={"0 16px"} color={"red"} />
                <AuxiliaryFlexBox width={"1 1 256px"} height={"64px"} margin={"0 16px"} color={"rgb(71, 159, 248)"} />
              </Row>
              <Row height={"120px"}>
                <AuxiliaryFlexBox width={"0 1 64px"} height={"64px"} margin={"0 16px"} color={"red"} />
                <AuxiliaryFlexBox width={"1 1 256px"} height={"64px"} margin={"0 16px"} color={"rgb(71, 159, 248)"} />
              </Row>
              <Row height={"120px"}>
                <AuxiliaryFlexBox width={"0 1 64px"} height={"64px"} margin={"0 16px"} color={"red"} />
                <AuxiliaryFlexBox width={"1 1 256px"} height={"64px"} margin={"0 16px"} color={"rgb(71, 159, 248)"} />
              </Row>
              <Row height={"120px"}>
                <AuxiliaryFlexBox width={"0 1 64px"} height={"64px"} margin={"0 16px"} color={"red"} />
                <AuxiliaryFlexBox width={"1 1 256px"} height={"64px"} margin={"0 16px"} color={"rgb(71, 159, 248)"} />
              </Row>
            </LeftContentPane>
            <RightContentPane>
              <Row height={"60px"} />
              <Row height={"60px"} />
              <Row height={"60px"} />
              <Row height={"60px"} />
              <Row height={"60px"} />
              <Row height={"60px"} />
              <Row height={"60px"} />
              <Row height={"60px"} />
            </RightContentPane>
          </MainContent>
        </Main>
      </Container>
    </ModuleWrapper>
  )
}
