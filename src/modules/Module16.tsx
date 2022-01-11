import styled from 'styled-components'
import {DESKTOP_STYLE, MOBILE_STYLE, ModuleWrapper} from './common'


interface AuxiliaryBoxProps {
  flex: string,
  height: string,

  hide?: boolean,
  color: string,
}

/* One could very well argue that this is too fancy.
   Nonetheless, I noticed I was getting lost in my boxes a bit and there was a lot of repeated ones,
   so I decided to try this out. */
const AuxiliaryBox = styled.div.attrs((props: AuxiliaryBoxProps) => props)`
  flex: ${props => props.flex};
  height: ${props => props.height};
  background-color: ${props => props.color};
  
  ${MOBILE_STYLE} {
    display: ${props => props.hide ? "none" : "block"};  // We can conditionally hide the element with this prop
  }

  ${DESKTOP_STYLE} {
    display: block;
  }
`

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

const SidebarHeader = styled.div`
  flex: 0 0 96px;
  width: 100%;
  padding: 16px;
  display: flex;
  background-color: rgb(235, 83, 159);

  ${MOBILE_STYLE} {
    justify-content: center;
  }

  ${DESKTOP_STYLE} {
    justify-content: space-between;
  }
`

const HeaderLeftBox = styled.div`
  flex: 0 1 196px;
  height: 48px;
  margin: 0 16px 0 0;
  background-color: red;
`

const SidebarContent = styled.div`
  width: 100%;
  height: auto;  // Same issue with flex disallowing scroll... ask Luke
  padding: 16px 16px 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: red;
  overflow-y: scroll;
`

const SidebarRectangle = styled.div`
  flex: 0 0 64px;
  margin: 0 0 16px 0;
  background-color: lime;
  
  ${MOBILE_STYLE} {
    width: 64px;
  }

  ${DESKTOP_STYLE} {
    width: 100%;
  }
`

const SidebarFooter = styled.div`
  flex: 0 0 96px;
  width: 100%;
  padding: 16px;
  display: flex;
  background-color: rgb(242, 177, 61);
  
  ${MOBILE_STYLE} {
    justify-content: center;
  }

  ${DESKTOP_STYLE} {
    justify-content: space-between;
  }
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
  padding: 16px 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: rgb(242, 177, 61);
`

const RightHeaderMenu = styled.div`
  height: 64px;
  padding: 8px 16px;
  display: flex;
  justify-content: space-between;
  background-color: rgb(71, 159, 248);

  ${MOBILE_STYLE} {
    flex: 0 0 80px;
  }

  ${DESKTOP_STYLE} {
    flex: 0 0 270px;
  }
`

const MainContent = styled.div`
  width: 100%;
  height: auto;  // Can't use flex for overflow again
  padding: 32px 32px 0 32px;
  display: flex;
  flex-direction: column;
  background-color: blue;
  overflow-y: scroll;
`

const MainContentRow = styled.div`
  flex: 0 0 auto;  // Take height of content
  width: 100%;
  margin:  0 0 32px 0;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
`

const MainContentBox = styled.div`
  height: 150px;
  background-color: rgb(71, 159, 248);

  ${MOBILE_STYLE} {
    flex: 0 1 75%;
    margin: 0 auto 0 auto;
  }

  ${DESKTOP_STYLE} {
    flex: 0 1 250px;
    margin: 0;

    :first-of-type {
      margin: 0 32px 0 0;
    }
  }
`

export const Module16 = () => {
  return (
    <ModuleWrapper>
      <Container>
        <Sidebar>
          <SidebarHeader>
            <AuxiliaryBox flex={"0 0 64px"} height={"64px"} color={"rgb(71, 159, 248)"} hide={true}/>
            <AuxiliaryBox flex={"0 0 64px"} height={"64px"} color={"rgb(71, 159, 248)"} />
          </SidebarHeader>
          <SidebarContent>
            <SidebarRectangle />
            <SidebarRectangle />
            <SidebarRectangle />
            <SidebarRectangle />
            <SidebarRectangle />
            <SidebarRectangle />
            <SidebarRectangle />
            <SidebarRectangle />
            <SidebarRectangle />
            <SidebarRectangle />
            <SidebarRectangle />
            <SidebarRectangle />
          </SidebarContent>
          <SidebarFooter>
            <AuxiliaryBox flex={"0 0 64px"} height={"64px"} color={"rgb(71, 159, 248)"} />
            <AuxiliaryBox flex={"0 0 192px"} height={"64px"} color={"rgb(71, 159, 248)"} hide={true} />
          </SidebarFooter>
        </Sidebar>
        <Main>
          <MainHeader>
            <HeaderLeftBox />
            <RightHeaderMenu>
              <AuxiliaryBox flex={"0 0 48px"} height={"48px"} color={"red"} />
              <AuxiliaryBox flex={"0 0 48px"} height={"48px"} color={"red"} hide={true} />
              <AuxiliaryBox flex={"0 0 48px"} height={"48px"} color={"red"} hide={true} />
              <AuxiliaryBox flex={"0 0 48px"} height={"48px"} color={"red"} hide={true} />
            </RightHeaderMenu>
          </MainHeader>
          <MainContent>
            <MainContentRow>
              <MainContentBox />
              <MainContentBox />
            </MainContentRow>
            <MainContentRow>
              <MainContentBox />
              <MainContentBox />
            </MainContentRow>
            <MainContentRow>
              <MainContentBox />
              <MainContentBox />
            </MainContentRow>
            <MainContentRow>
              <MainContentBox />
              <MainContentBox />
            </MainContentRow>
            <MainContentRow>
              <MainContentBox />
              <MainContentBox />
            </MainContentRow>
          </MainContent>
        </Main>
      </Container>
    </ModuleWrapper>
  )
}
