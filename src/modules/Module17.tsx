import styled from 'styled-components'
import {DESKTOP_STYLE, MOBILE_STYLE, ModuleWrapper} from './common'


const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`

const Sidebar = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;

  ${MOBILE_STYLE} {
    flex: 0 0 128px;
  }

  ${DESKTOP_STYLE} {
    flex: 0 0 300px;
  }
`

const SidebarContent = styled.div`
  flex: 1 0 auto;
  width: 100%;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: red;

  ${MOBILE_STYLE} {
    align-items: center;
  }

  ${DESKTOP_STYLE} {
    align-items: flex-start;
  }
`

const SidebarTopBox = styled.div`
  flex: 0 0 64px;
  width: 64px;
  background-color: lime;
`

const SidebarBottomBox = styled.div`
  flex: 0 0 64px;
  width: 100%;
  margin: 16px 0;
  background-color: lime;

  ${MOBILE_STYLE} {
    display: none;
  }

  ${DESKTOP_STYLE} {
    display: block;
  }
`

const SidebarFooter = styled.div`
  flex: 0 0 auto;
  width: 100%;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgb(242, 177, 61);
`

const FooterTopBox = styled.div`
  flex: 0 0 64px;  
  background-color: lime;

  ${MOBILE_STYLE} {
    width: 64px;
  }

  ${DESKTOP_STYLE} {
    width: 100%;
  }
`

const FooterRow = styled.div`
  flex: 0 0 auto;
  width: 100%;
  margin: 16px 0 0 0;
  display: flex;
  justify-content: space-between;
  
  ${MOBILE_STYLE} {
    visibility: hidden;
  }

  ${DESKTOP_STYLE} {
    visibility: visible;
  }
`

const FooterRowBox = styled.div`
  flex: 0 1 64px;
  height: 64px;
  background-color: red;
`

const Main = styled.div`
  flex: 1 0 auto;
  height: 100%;
  display: flex;
  flex-direction: column;
`

const MainHeader = styled.div`
  flex: 0 0 96px;
  width: 100%;
  padding: 16px 32px 0 32px;
  background-color: rgb(242, 177, 61);

  ${MOBILE_STYLE} {}

  ${DESKTOP_STYLE} {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`

const MainHeaderRow = styled.div`
  display: flex;
  margin: 0 0 16px 0;

  ${MOBILE_STYLE} {
    width: 100%;
  }

  ${DESKTOP_STYLE} {
    width: 50%;
  }
`

const HeaderRedBox = styled.div`
  flex: 0 1 48px;
  height: 48px;
  background-color: red;
`

const HeaderLeftFlexBox = styled.div`
  flex: 0 1 180px;
  height: 48px;
  margin: 0 0 0 30px;
  background-color: red;
`

const HeaderRightFlexBox = styled.div`
  flex: 0 1 48px;
  height: 48px;
  margin: 0 auto 0 18px;
  background-color: red;
`

const RightHeaderMenu = styled.div`
  flex: 0 1 270px;
  height: 64px;
  padding: 8px 16px;
  display: flex;
  justify-content: space-between;
  background-color: rgb(71, 159, 248);

  ${MOBILE_STYLE} {}

  ${DESKTOP_STYLE} {
    margin: 0 0 0 auto;
  }
`

const MainContent = styled.div`
  width: 100%;
  height: auto;  // Same issue
  display: flex;
  justify-content: space-between;
  background-color: blue;
  overflow: hidden;

  ${MOBILE_STYLE} {
    padding: 0;
  }

  ${DESKTOP_STYLE} {
    padding: 32px;
  }
`

const LeftContentPane = styled.div`
  height: 100%;
  padding: 32px 32px 0 32px;
  display: flex;
  flex-direction: column;
  background-color: rgb(71, 159, 248);
  overflow-y: scroll;

  ${MOBILE_STYLE} {
    flex: 1 0 auto;
  }

  ${DESKTOP_STYLE} {
    flex: 0 1 63%;
  }
`

const LeftRow = styled.div`
  width: 100%;
  flex: 0 0 120px;
  margin: 0 0 32px 0;
  padding: 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: lime;

  ${MOBILE_STYLE} {
    flex-direction: column;
  }

  ${DESKTOP_STYLE} {
    flex-direction: row;
  }
`

const LeftRowRedBox = styled.div`
  background-color: red;

  ${MOBILE_STYLE} {
    flex: 0 0 64px;
    width: 64px;
    margin: 0 16px 16px 16px;
  }

  ${DESKTOP_STYLE} {
    flex: 0 1 64px;
    height: 64px;
    margin: 0 16px;
  }
`

const LeftRowBlueBox = styled.div`
  background-color: rgb(71, 159, 248);

  ${MOBILE_STYLE} {
    flex: 0 0 64px;
    width: 100%;
  }

  ${DESKTOP_STYLE} {
    flex: 1 1 256px;
    height: 64px;
    margin: 0 16px;
  }
`

const RightContentPane = styled.div`
  flex: 0 1 33%;
  height: 100%;
  padding: 32px 32px 0 32px;
  flex-direction: column;
  background-color: rgb(71, 159, 248);
  overflow-y: scroll;

  ${MOBILE_STYLE} {
    display: none;
  }

  ${DESKTOP_STYLE} {
    display: flex;
  }
`

const RightRow = styled.div`
  flex: 0 0 60px;
  width: 100%;
  margin: 0 0 32px 0;
  padding: 32px;
  display: flex;
  justify-content: space-between;
  background-color: lime;
`

export const Module17 = () => {
  return (
    <ModuleWrapper>
      <Container>
        <Sidebar>
          <SidebarContent>
            <SidebarTopBox />
            <SidebarBottomBox />
          </SidebarContent>
          <SidebarFooter>
            <FooterTopBox />
            <FooterRow>
              <FooterRowBox />
              <FooterRowBox />
              <FooterRowBox />
            </FooterRow>
          </SidebarFooter>
        </Sidebar>
        <Main>
          <MainHeader>
            <MainHeaderRow>
              <HeaderRedBox />
              <HeaderLeftFlexBox />
            </MainHeaderRow>
            <MainHeaderRow>
              <RightHeaderMenu>
                <HeaderRedBox />
                <HeaderRightFlexBox />
                <HeaderRedBox />
              </RightHeaderMenu>
            </MainHeaderRow>
          </MainHeader>
          <MainContent>
            <LeftContentPane>
              <LeftRow>
                <LeftRowRedBox />
                <LeftRowBlueBox />
              </LeftRow>
              <LeftRow>
                <LeftRowRedBox />
                <LeftRowBlueBox />
              </LeftRow>
              <LeftRow>
                <LeftRowRedBox />
                <LeftRowBlueBox />
              </LeftRow>
              <LeftRow>
                <LeftRowRedBox />
                <LeftRowBlueBox />
              </LeftRow>
              <LeftRow>
                <LeftRowRedBox />
                <LeftRowBlueBox />
              </LeftRow>
            </LeftContentPane>
            <RightContentPane>
              <RightRow/>
              <RightRow/>
              <RightRow/>
              <RightRow/>
              <RightRow/>
              <RightRow/>
              <RightRow/>
              <RightRow/>
            </RightContentPane>
          </MainContent>
        </Main>
      </Container>
    </ModuleWrapper>
  )
}
