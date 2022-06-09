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
  flex: 0 0 160px;
  width: 100%;
  padding: 24px 32px;

  display: flex;
  justify-content: space-between;

  background-color: green;

  ${DesktopStyle} {
    flex-direction: row;
  }
  ${MobileStyle} {
    flex-direction: column;
    align-items: center;
    gap: 24px;
  }
`
const HelperBox = styled.div`
  display: flex;

  ${MobileStyle} {
    justify-content: flex-start;

    flex: 1;
    width: 320px;
  }
`
const Logo = styled.div`
  background-color: purple;

  ${DesktopStyle} {
    flex: 0 0 128px;
    height: 100%;
  }
  ${MobileStyle} {
    flex: 0 0 64px;
    height: 100%;
  }
`

const NavBar = styled.nav`
  background-color: purple;

  ${DesktopStyle} {
    flex: 0 0 512px;
    height: 100%;
  }
  ${MobileStyle} {
    flex: 1;
    width: 320px;
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
  background-color: #2aafdc;

  ${DesktopStyle} {
    flex: 0 0 64px;
    width: 100%;
  }
  ${MobileStyle} {
    flex: 0 0 112px;
    width: 40%;
  }
`

export const Module3 = () => {
  return (
    <ModuleWrapper>
      <Container>
        <Header>
          <HelperBox>
            <Logo />
          </HelperBox>
          <NavBar />
        </Header>
        <Main>
          {new Array(12).fill(1).map((val, ind) => (
            <Row key={ind} />
          ))}
        </Main>
      </Container>
    </ModuleWrapper>
  )
}
