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
  flex: 1;
  height: 100%;

  display: flex;
  flex-direction: column;
`

const AsideContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px 24px;
  overflow-y: auto;
  background-color: firebrick;

  ${DesktopStyle} {
  }
  ${MobileStyle} {
    align-items: center;
  }
`
const GreenBox = styled.div`
  flex: 0 0 64px;
  width: 64px;
  background-color: green;
`
const AsideTitle = styled.div`
  flex: 0 0 48px;
  width: 100%;
  background-color: green;

  ${MobileStyle} {
    display: none;
  }
`
const AsideFooter = styled.footer`
  flex: 0 0 240px;
  padding: 32px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: orange;

  ${DesktopStyle} {
  }
  ${MobileStyle} {
    align-items: center;
  }
`
const FooterTitleBox = styled.div`
  background-color: green;

  ${DesktopStyle} {
    flex: 0 0 72px;
    width: 100%;
  }
  ${MobileStyle} {
    flex: 0 0 64px;
    width: 64px;
  }
`
const HelperBox = styled.div`
  display: flex;
  flex: 0 0 72px;
  width: 100%;
  justify-content: space-between;
`
const OptionBox = styled.div`
  flex: 0 0 72px;
  width: 64px;
  background-color: firebrick;

  ${MobileStyle} {
    display: none;
  }
`

const RightPart = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  ${DesktopStyle} {
    flex: 3;
  }
  ${MobileStyle} {
    flex: 4;
  }
`
const RightHeader = styled.header`
  flex: 0 0 128px;
  padding: 16px 48px;
  display: flex;

  background-color: orange;

  ${DesktopStyle} {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  ${MobileStyle} {
    flex-direction: column;
    align-items: flex-start;

    gap: 16px;
  }
`

const HelperBox2 = styled.div`
  display: flex;

  gap: 16px;

  ${DesktopStyle} {
    justify-content: flex-start;
  }
  ${MobileStyle} {
    justify-content: flex-start;
  }
`
const LogoBox = styled.div`
  background-color: firebrick;

  ${DesktopStyle} {
    flex: 0 0 48px;
    height: 48px;
  }
  ${MobileStyle} {
    flex: 0 0 48px;
    width: 48px;
  }
`
const BrandNameBox = styled.div`
  background-color: firebrick;
  flex: 0 0 160px;
  height: 48px;
`
const NavBar = styled.nav`
  flex: 0 0 280px;
  padding: 16px;
  gap: 8px;
  display: flex;
  background-color: blue;

  justify-content: space-between;
  ${DesktopStyle} {
    flex: 0 0 280px;
  }
  ${MobileStyle} {
    flex: 0 0 80px;
    width: 280px;
  }
`
const NavLinkBox = styled.div`
  flex: 0 0 56px;
  height: 48px;
  background-color: firebrick;
`

const HelperBox4 = styled.div`
  display: flex;
  padding: 48px;
  gap: 32px;
  background-color: blue;
  overflow: auto;
`
const Main = styled.main`
  flex: 5;
  display: flex;
  flex-direction: column;
  gap: 16px;
  overflow-y: auto;
  ${DesktopStyle} {
    background-color: #8484ea;
    padding: 24px;
  }
  ${MobileStyle} {
  }
`

const ArticleTile = styled.div`
  flex: 0 0 100px;
  width: 100%;
  padding: 24px;
  display: flex;
  background-color: green;
  ${DesktopStyle} {
    justify-content: space-between;
    align-items: center;
  }
  ${MobileStyle} {
    flex-direction: column;
    align-items: center;
    gap: 16px;
  }
`
const ImageBox = styled.div`
  flex: 0 0 80px;
  height: 80px;
  background-color: firebrick;
  ${DesktopStyle} {
    justify-content: space-between;
    align-items: center;
    flex: 0 0 80px;
    height: 80px;
  }
  ${MobileStyle} {
    flex-direction: column;
    flex: 0 0 80px;
    width: 80px;
  }
`
const ArticleTitleBox = styled.div`
  flex: 0 0 280px;
  height: 80px;
  background-color: blue;

  ${DesktopStyle} {
    flex: 0 0 280px;
    height: 80px;
  }
  ${MobileStyle} {
    flex: 0 0 80px;
    width: 280px;
  }
`

const AdditionalBox = styled.div`
  flex: 3;
  width: 100px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  overflow-y: auto;
  background-color: #8484ea;

  ${MobileStyle} {
    display: none;
  }
`
const AdditionalTile = styled.div`
  flex: 0 0 64px;
  width: 100%;
  background-color: green;
`
export const Module6 = () => {
  return (
    <ModuleWrapper>
      <Container>
        <Aside>
          <AsideContent>
            <GreenBox />
            <AsideTitle />
          </AsideContent>
          <AsideFooter>
            <FooterTitleBox />
            <HelperBox>
              <OptionBox />
              <OptionBox />
              <OptionBox />
            </HelperBox>
          </AsideFooter>
        </Aside>
        <RightPart>
          <RightHeader>
            <HelperBox2>
              <LogoBox />
              <BrandNameBox />
            </HelperBox2>

            <NavBar>
              <NavLinkBox />
              <NavLinkBox style={{ marginRight: 'auto' }} />
              <NavLinkBox />
            </NavBar>
          </RightHeader>
          <HelperBox4>
            <Main>
              {new Array(16).fill(1).map((val, ind) => (
                <ArticleTile key={ind}>
                  <ImageBox />
                  <ArticleTitleBox />
                </ArticleTile>
              ))}
            </Main>
            <AdditionalBox>
              {new Array(36).fill(1).map((val, ind) => (
                <AdditionalTile />
              ))}
            </AdditionalBox>
          </HelperBox4>
        </RightPart>
      </Container>
    </ModuleWrapper>
  )
}
