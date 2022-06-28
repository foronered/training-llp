import React from 'react'
import styled from 'styled-components'
import { DesktopStyle, MobileStyle, MOBILE_BREAKPOINT } from '../../constants'
import { ModuleWrapper } from '../common'

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: blue;
`

const Header = styled.header`
  flex: 0 0 112px;
  width: 100%;
  padding: 24px 32px;

  display: flex;

  background-color: green;

  ${DesktopStyle} {
    justify-content: space-between;
  }
  ${MobileStyle} {
    justify-content: center;
  }
`

const Logo = styled.div`
  flex: 0 0 128px;
  height: 100%;
  background-color: purple;
`

const NavBar = styled.nav`
  flex: 0 0 512px;
  height: 100%;
  background-color: purple;

  ${DesktopStyle} {
    display: block;
  }
  ${MobileStyle} {
    display: none;
  }
`

const Main = styled.main`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 32px;

  background-color: firebrick;
  overflow-x: auto;

  ${MobileStyle} {
    align-items: center;
  }
`

const Row = styled.div`
  flex: 0 0 96px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #2aafdc;
  ${DesktopStyle} {
    width: 100%;
  }
  ${MobileStyle} {
    width: 50%;
  }
`

const OrangeBox = styled.div`
  flex: 0 0 64px;
  height: 48px;
  background-color: orange;
`

const Footer = styled.footer`
  width: 100%;
  padding: 24px 32px;
  display: flex;

  background-color: green;

  ${DesktopStyle} {
    flex: 0 0 112px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  ${MobileStyle} {
    flex: 0 0 160px;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;
  }
`

// why does align-items: center not center the helperBox (on mobile)?

const HelperBox = styled.div`
  display: flex;
  gap: 24px;

  ${DesktopStyle} {
  }

  ${MobileStyle} {
    width: 100%;
  }
`

const FooterLinks = styled.div`
  height: 64px;
  background-color: purple;

  ${DesktopStyle} {
    flex: 0 0 400px;
  }

  ${MobileStyle} {
    flex: 1;
  }
`
const ButtonBox = styled.div`
  flex: 0 0 96px;
  height: 64px;
  background-color: purple;
`

const LogOutBox = styled.div`
  background-color: purple;

  ${DesktopStyle} {
    flex: 0 0 96px;
    height: 64px;
  }
  ${MobileStyle} {
    flex: 0 0 64px;
    width: 96px;
  }
`

export const Module4 = () => {
  return (
    <ModuleWrapper>
      <Container>
        <Header>
          <Logo />
          <NavBar />
        </Header>
        <Main>
          {new Array(12).fill(1).map((_, ind) => (
            <Row>
              <OrangeBox key={ind} />
            </Row>
          ))}
        </Main>

        <Footer>
          <HelperBox>
            <FooterLinks />
            <ButtonBox />
          </HelperBox>
          <LogOutBox />
        </Footer>
      </Container>
    </ModuleWrapper>
  )
}
