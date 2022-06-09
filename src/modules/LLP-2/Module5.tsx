import { wiltDefault } from 'fp-ts/lib/Witherable'
import React from 'react'
import styled from 'styled-components'
import { DesktopStyle, MobileStyle, MOBILE_BREAKPOINT } from '../../constants'
import { ModuleWrapper } from '../common'

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: blue;
`

const Aside = styled.aside`
  height: 100%;

  display: flex;
  flex-direction: column;
  ${DesktopStyle} {
    flex: 3;
  }
  ${MobileStyle} {
    flex: 1;
  }
`
const AsideHeader = styled.header`
  flex: 0 0 128px;
  padding: 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: purple;
`
const BlueBox = styled.div`
  flex: 0 0 64px;
  height: 64px;
  background-color: #9292da;

  &:last-child {
    ${MobileStyle} {
      display: none;
    }
  }
`
const AsideNavBar = styled.nav`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px 32px;
  overflow-y: auto;
  background-color: firebrick;
`
const LinkBox = styled.div`
  background-color: #82b482;
  ${DesktopStyle} {
    flex: 0 0 64px;
  }
  ${MobileStyle} {
    flex: 0 0 64px;
    width: 64px;
  }
`
const AsideFooter = styled.footer`
  flex: 0 0 96px;
  padding: 0 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: orange;
`
const BlueFooterBox = styled.div`
  flex: 0 0 64px;
  height: 64px;
  background-color: #9292da;

  ${MobileStyle} {
    &:last-child {
      display: none;
    }
  }
`
const RightPart = styled.div`
  flex: 5;
  height: 100%;
  display: flex;
  flex-direction: column;
`
const RightHeader = styled.header`
  flex: 0 0 128px;
  padding: 16px 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: orange;
`
const LogoBox = styled.div`
  flex: 0 0 160px;
  height: 48px;
  background-color: firebrick;
`
const NavBar = styled.nav`
  padding: 16px;
  gap: 8px;
  display: flex;
  background-color: blue;

  ${DesktopStyle} {
  }

  ${MobileStyle} {
    flex: 0 0 112px;
    justify-content: center;
  }
`

// calculated the values of NavBar! how to make it better?
const NavLinkBox = styled.div`
  flex: 0 0 56px;
  width: 56px;
  height: 48px;
  background-color: firebrick;

  ${MobileStyle} {
    display: none;
    &:last-child {
      display: block;
    }
  }
`
const Main = styled.main`
  display: flex;
  flex-wrap: wrap;
  padding: 48px;
  gap: 32px;
  overflow-y: auto;
  background-color: blue;

  ${MobileStyle} {
    justify-content: center;
  }
`

const Tile = styled.div`
  flex: 0 0 256px;
  height: 200px;
  background-color: #9292da;
`
/*
${DesktopStyle} {

}
${MobileStyle} {
  
}
*/

export const Module5 = () => {
  return (
    <ModuleWrapper>
      <Container>
        <Aside>
          <AsideHeader>
            <BlueBox />
            <BlueBox />
          </AsideHeader>
          <AsideNavBar>
            {new Array(24).fill(1).map((val, ind) => (
              <LinkBox key={ind} />
            ))}
          </AsideNavBar>
          <AsideFooter>
            <BlueFooterBox />
            <BlueFooterBox style={{ flex: '0 0 304px' }} />
          </AsideFooter>
        </Aside>
        <RightPart>
          <RightHeader>
            <LogoBox />
            <NavBar>
              <NavLinkBox />
              <NavLinkBox />
              <NavLinkBox />
              <NavLinkBox />
            </NavBar>
          </RightHeader>
          <Main>
            {new Array(16).fill(1).map((val, ind) => (
              <Tile key={ind} />
            ))}
          </Main>
        </RightPart>
      </Container>
    </ModuleWrapper>
  )
}
