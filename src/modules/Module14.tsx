import React from 'react'
import styled from 'styled-components'
import { DESKTOP_STYLE, MOBILE_STYLE, ModuleWrapper } from './common'

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
  justify-content: center;
  align-items: center;
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
    flex: 0 0 48px;
    width: 400px;
    margin-top: 16px;
  }
`

const ContentContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px;
  overflow-y: scroll;

  ${DESKTOP_STYLE} {
    width: 100%;
  }
`

const NavBarWrapper = styled.div`
  display: flex;
  ${DESKTOP_STYLE} {
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
  }
  ${MOBILE_STYLE} {
    flex-direction: column;
  }
`

const Content = styled.div`
  background-color: dodgerblue;
  margin-bottom: 16px;
  flex: 0 0 96px;

  ${DESKTOP_STYLE} {
    width: 100%;
  }
  ${MOBILE_STYLE} {
    width: 400px;
  }
`

export const Module14 = () => {
  return (
    <ModuleWrapper>
      <Container>
        <NavBar>
          <NavBarWrapper>
            <Logo />
            <NavLinks />
          </NavBarWrapper>
        </NavBar>
        <ContentContainer>
          <Content />
          <Content />
          <Content />
          <Content />
          <Content />
        </ContentContainer>
      </Container>
    </ModuleWrapper>
  )
}
