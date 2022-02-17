import React from 'react'
import { DESKTOP_STYLE, MOBILE_STYLE, ModuleWrapper } from './common'
import styled from 'styled-components'

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

const MainContainer = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  background-color: blue;
`

const SideBarTop = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  background-color: red;
  padding: 16px;

  ${MOBILE_STYLE} {
    align-items: center;
  }
`

const GreenSquare = styled.div`
  background-color: lime;
  flex: 0 0 56px;
  width: 56px;
  margin-bottom: 16px;

  ${MOBILE_STYLE} {
    display: none;
  }
`

const GreenSideBarRectangle = styled.div<{ isSlim: boolean }>`
  background-color: lime;
  flex: 0 0 ${(props) => (props.isSlim ? 40 : 56)}px;
  width: 100%;

  ${MOBILE_STYLE} {
    flex: 0 0 56px;
    width: 56px;
  }
`

const SideBarBottom = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  background-color: orange;
  padding: 16px;

  ${DESKTOP_STYLE} {
    justify-content: space-around;
  }

  ${MOBILE_STYLE} {
    justify-content: flex-start;
    align-items: center;
  }
`

const SideBarSquareContainer = styled.div`
  width: 100%;
  flex: 0 0 96px;
  background-color: blue;
  display: flex;
  align-items: center;
  justify-content: space-around;

  ${MOBILE_STYLE} {
    display: none;
  }
`

const RedSquare = styled.div<{ isTransparent: boolean; isLarge: boolean }>`
  background-color: ${(props) => (props.isTransparent ? 'transparent' : 'red')};
  flex: 0 0 ${(props) => (props.isLarge ? 80 : 56)}px;
  height: ${(props) => (props.isLarge ? 80 : 56)}px;
`

const MainHeader = styled.div`
  background-color: orange;
  display: flex;
  padding: 16px 32px;
  flex: 0 0 120px;
  width: 100%;

  ${DESKTOP_STYLE} {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  ${MOBILE_STYLE} {
    flex-direction: column;
  }
`

const NavLinksContainer = styled.div`
  display: flex;
  flex-direction: row;

  ${DESKTOP_STYLE} {
    flex: 0 0 300px;
  }
  ${MOBILE_STYLE} {
    width: 300px;
    padding-bottom: 16px;
  }
`

const Logo = styled.div`
  height: 56px;
  flex: 0 0 64px;
  margin-right: 32px;
  background-color: red;
`

const RedRectangle = styled.div`
  flex: 1;
  background-color: red;
`

const BlueContainer = styled.div`
  display: flex;
  background-color: dodgerblue;
  justify-content: space-around;
  align-items: center;

  ${DESKTOP_STYLE} {
    height: 100%;
    flex: 0 0 320px;
  }

  ${MOBILE_STYLE} {
    flex: 0 0 88px;
    width: 320px;
  }
`
const ListingContainer = styled.div`
  background-color: rgb(0, 161, 255);
  flex: 2;
  height: 448px;
  display: flex;
  flex-direction: column;
  padding: 16px 16px 0;

  ${DESKTOP_STYLE} {
    overflow-y: scroll;
  }

  ${MOBILE_STYLE} {
    padding: 0;
  }
`
const ListingWrapper = styled.div`
  width: 100%;
  background-color: lime;
  margin-bottom: 16px;
  display: flex;
  gap: 16px;
  justify-content: center;
  align-items: center;

  ${DESKTOP_STYLE} {
    flex-direction: row;
    flex: 0 0 160px;
  }

  ${MOBILE_STYLE} {
    flex-direction: column;
    flex: 0 0 240px;
  }
`
const ListingImage = styled.div`
  background-color: red;

  ${DESKTOP_STYLE} {
    height: 80px;
    flex: 0 0 80px;
  }
  ${MOBILE_STYLE} {
    width: 80px;
    flex: 0 0 80px;
  }
`
const ListingDescription = styled.div`
  background-color: rgb(0, 161, 255);
  ${DESKTOP_STYLE} {
    height: 80px;
    flex: 0 0 240px;
  }
  ${MOBILE_STYLE} {
    width: 240px;
    flex: 0 0 80px;
  }
`
const ContentContainer = styled.div`
  display: flex;
  gap: 32px;
  width: 100%;
  padding: 32px 32px 0;

  ${DESKTOP_STYLE} {
    flex: 0 0 480px;
  }

  ${MOBILE_STYLE} {
    flex: 1;
    background-color: rgb(0, 161, 255);
    padding-bottom: 32px;
    overflow-y: scroll;
  }
`
const OtherContainer = styled.div`
  background-color: rgb(0, 161, 255);
  flex: 1;
  height: 448px;
  overflow-y: scroll;
  display: flex;
  gap: 16px;
  padding: 16px;
  flex-direction: column;

  ${MOBILE_STYLE} {
    display: none;
  }
`
const OtherElements = styled.div`
  flex: 0 0 40px;
  background-color: lime;
`

const Listing = () => {
  return (
    <ListingWrapper>
      <ListingImage />
      <ListingDescription />
    </ListingWrapper>
  )
}

export const Module17 = () => {
  return (
    <ModuleWrapper>
      <Container>
        <SideBar>
          <SideBarTop>
            <GreenSquare />
            <GreenSideBarRectangle isSlim={true} />
          </SideBarTop>
          <SideBarBottom>
            <GreenSideBarRectangle isSlim={false} />
            <SideBarSquareContainer>
              <RedSquare isTransparent={false} isLarge={true} />
              <RedSquare isTransparent={false} isLarge={true} />
              <RedSquare isTransparent={false} isLarge={true} />
            </SideBarSquareContainer>
          </SideBarBottom>
        </SideBar>
        <MainContainer>
          <MainHeader>
            <NavLinksContainer>
              <Logo />
              <RedRectangle />
            </NavLinksContainer>
            <BlueContainer>
              <RedSquare isTransparent={false} isLarge={false} />
              <RedSquare isTransparent={false} isLarge={false} />
              <RedSquare isTransparent={true} isLarge={false} />
              <RedSquare isTransparent={false} isLarge={false} />
            </BlueContainer>
          </MainHeader>
          <ContentContainer>
            <ListingContainer>
              <Listing />
              <Listing />
              <Listing />
              <Listing />
              <Listing />
            </ListingContainer>
            <OtherContainer>
              <OtherElements />
              <OtherElements />
              <OtherElements />
              <OtherElements />
              <OtherElements />
              <OtherElements />
              <OtherElements />
              <OtherElements />
              <OtherElements />
              <OtherElements />
            </OtherContainer>
          </ContentContainer>
        </MainContainer>
      </Container>
    </ModuleWrapper>
  )
}
