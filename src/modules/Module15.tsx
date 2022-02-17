import React from 'react'
import { DESKTOP_STYLE, MOBILE_STYLE, ModuleWrapper } from './common'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: red;
`

const NavBar = styled.div`
  width: 100%;
  background-color: lime;
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${MOBILE_STYLE} {
    justify-content: center;
  }
`

const BottomBar = styled.div`
  width: 100%;
  background-color: lime;
  padding: 24px;
  display: flex;

  ${DESKTOP_STYLE} {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  ${MOBILE_STYLE} {
    flex-direction: column;
    align-items: center;
  }
`

const BottomBarWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 480px;

  ${MOBILE_STYLE} {
    margin-bottom: 16px;
  }
`

const ContentContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
  padding-top: 16px;
  ${DESKTOP_STYLE} {
    padding: 32px 48px;
  }
`

const Logo = styled.div`
  background-color: deeppink;
  height: 48px;
  width: 56px;
`

const NavLinks = styled.div`
  background-color: deeppink;

  ${DESKTOP_STYLE} {
    height: 48px;
    flex: 0 0 400px;
  }
  ${MOBILE_STYLE} {
    display: none;
  }
`

const BottomLinks = styled.div`
  background-color: deeppink;

  ${DESKTOP_STYLE} {
    height: 48px;
    flex: 0 0 400px;
  }

  ${MOBILE_STYLE} {
    flex: 0 0 400px;
    height: 48px;
  }
`

const ContentBox = styled.div`
  background-color: orange;
  height: 64px;
  flex: 0 0 64px;
`

const Content = styled.div`
  background-color: dodgerblue;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 0 0 96px;
  margin-bottom: 16px;

  ${DESKTOP_STYLE} {
    width: 100%;
  }
  ${MOBILE_STYLE} {
    width: 400px;
  }
`

export const Module15 = () => {
  return (
    <ModuleWrapper>
      <Container>
        <NavBar>
          <Logo />
          <NavLinks />
        </NavBar>
        <ContentContainer>
          <Content>
            <ContentBox />
          </Content>
          <Content>
            <ContentBox />
          </Content>
          <Content>
            <ContentBox />
          </Content>
          <Content>
            <ContentBox />
          </Content>
          <Content>
            <ContentBox />
          </Content>
        </ContentContainer>
        <BottomBar>
          <BottomBarWrapper>
            <BottomLinks />
            <Logo />
          </BottomBarWrapper>
          <Logo />
        </BottomBar>
      </Container>
    </ModuleWrapper>
  )
}
