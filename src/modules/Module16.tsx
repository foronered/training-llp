import React from 'react'
import styled from 'styled-components'
import { DESKTOP_STYLE, MOBILE_STYLE, ModuleWrapper } from './common'

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
`

const SideBar = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;

  ${MOBILE_STYLE} {
    flex: 0 0 120px;
  }
`

const SideBarHeader = styled.div`
  flex: 0 0 120px;
  width: 100%;
  display: flex;
  align-items: center;
  background-color: hotpink;
  padding: 16px;

  ${DESKTOP_STYLE} {
    justify-content: space-between;
  }

  ${MOBILE_STYLE} {
    justify-content: center;
  }
`

const BlueSquare = styled.div<{ visibleInMobile: boolean }>`
  flex: 0 0 88px;
  height: 88px;
  background-color: dodgerblue;

  ${MOBILE_STYLE} {
    display: ${(props) => (props.visibleInMobile ? 'block' : 'none')};
  }
`

const SideBarFooter = styled.div`
  flex: 0 0 120px;
  width: 100%;
  display: flex;
  align-items: center;
  background-color: orange;
  padding: 16px;

  ${DESKTOP_STYLE} {
    justify-content: space-between;
  }

  ${MOBILE_STYLE} {
    justify-content: center;
  }
`

const SideBarFooterRectangle = styled.div`
  flex: 1;
  margin-left: 16px;
  height: 100%;
  background-color: dodgerblue;

  ${MOBILE_STYLE} {
    display: none;
  }
`

const SideBarContentContainer = styled.div`
  flex: 1;
  background-color: red;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
  padding: 0 16px 16px;
`

const MainContainer = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  background-color: blue;
`

const MainHeader = styled.div`
  background-color: orange;
  flex: 0 0 120px;
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 16px;
  justify-content: space-between;
  align-items: center;
`

const RedRectangle = styled.div`
  height: 48px;
  flex: 0 0 224px;
  background-color: red;
`

const BlueContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: dodgerblue;

  ${DESKTOP_STYLE} {
    flex: 0 0 232px;
    justify-content: space-around;
    height: 100%;
    padding: 8px;
  }

  ${MOBILE_STYLE} {
    flex: 0 0 56px;
    height: 56px;
    justify-content: center;
  }
`

const RedSquare = styled.div<{ showOnMobile: boolean }>`
  height: 40px;
  flex: 0 0 40px;
  background-color: red;

  ${MOBILE_STYLE} {
    display: ${(props) => (props.showOnMobile ? 'block' : 'none')};
  }
`

const SideBarContent = styled.div`
  flex: 0 0 72px;
  margin-top: 16px;
  background-color: lime;

  ${DESKTOP_STYLE} {
    width: 100%;
  }
  ${MOBILE_STYLE} {
    width: 72px;
  }
`

const ContentContainer = styled.div`
  overflow-y: scroll;
  padding: 32px;
`

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 192px 192px;
  grid-template-rows: repeat(5, 128px);
  gap: 32px;
`

const GridElement = styled.div`
  height: 100%;
  width: 100%;
  background-color: dodgerblue;
`

export const Module16 = () => {
  return (
    <ModuleWrapper>
      <Container>
        <SideBar>
          <SideBarHeader>
            <BlueSquare visibleInMobile={true} />
            <BlueSquare visibleInMobile={false} />
          </SideBarHeader>
          <SideBarContentContainer>
            <SideBarContent />
            <SideBarContent />
            <SideBarContent />
            <SideBarContent />
            <SideBarContent />
            <SideBarContent />
            <SideBarContent />
            <SideBarContent />
          </SideBarContentContainer>
          <SideBarFooter>
            <BlueSquare visibleInMobile={true} />
            <SideBarFooterRectangle />
          </SideBarFooter>
        </SideBar>
        <MainContainer>
          <MainHeader>
            <RedRectangle />
            <BlueContainer>
              <RedSquare showOnMobile={true} />
              <RedSquare showOnMobile={false} />
              <RedSquare showOnMobile={false} />
              <RedSquare showOnMobile={false} />
            </BlueContainer>
          </MainHeader>
          <ContentContainer>
            <ContentGrid>
              <GridElement />
              <GridElement />
              <GridElement />
              <GridElement />
              <GridElement />
              <GridElement />
              <GridElement />
              <GridElement />
              <GridElement />
              <GridElement />
            </ContentGrid>
          </ContentContainer>
        </MainContainer>
      </Container>
    </ModuleWrapper>
  )
}
