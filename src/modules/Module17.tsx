import React from 'react'
import styled from 'styled-components'
import {ModuleWrapper} from './common'


export interface AuxiliaryBoxProps {
  width: string,
  height: string,

  color: string,
}


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

const AuxiliaryBox = styled.div.attrs((props: AuxiliaryBoxProps) => props)`
  width: ${props => props.width};
  height: ${props => props.height};
  
  background-color: ${props => props.color};;
`

const AuxiliaryFlexBox = styled.div.attrs((props: AuxiliaryBoxProps) => props)`
  flex: 0 1 ${props => props.width};
  height: ${props => props.height};
  
  background-color: ${props => props.color};;
`

const SidebarContent = styled.div`
  width: 100%;
  height: auto;
  flex: 1 0 auto;
  
  padding: 32px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
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
  
  margin: 16px 0;
  
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

export const Module17 = () => {
  return (
    <ModuleWrapper>
      <Container>
        <Sidebar>
          <SidebarContent />
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
          <MainHeader />
          <MainContent />
        </Main>
      </Container>
    </ModuleWrapper>
  )
}
