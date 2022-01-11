import styled from 'styled-components'
import {DESKTOP_STYLE, MOBILE_STYLE, ModuleWrapper} from './common'


const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`

const Header = styled.div`
  width: 100%;
  flex: 0 0 80px;
  padding: 16px;
  display: flex;
  background-color: lime;

  ${MOBILE_STYLE} {
    justify-content: center;
  }

  ${DESKTOP_STYLE} {
    justify-content: space-between;
  }
`

const PinkBoxSmallTop = styled.div`
  flex: 0 0 64px;
  height: 64px;
  background-color: rgb(235, 83, 159);
`

const PinkBoxLargeTop = styled.div`
  flex: 0 1 33%;
  height: 64px;
  background-color: rgb(235, 83, 159);

  ${MOBILE_STYLE} {
    display: none;
  }

  ${DESKTOP_STYLE} {
    display: block;
  }
`

const Content = styled.div`
  width: 100%;
  //flex: 1 0 auto; // see Module 14
  height: auto;
  padding: 32px 32px 0 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: red;
  overflow-y: scroll;
`

const LightBlueRectangle = styled.div`
  flex: 0 0 80px;
  margin: 0 0 16px 0;
  padding: 16px;
  display: flex;
  justify-content: center;
  background-color: rgb(71, 159, 248);
  
  :last-of-type {
    margin: 0 0 32px 0;  // Because our margins are different from our parent paddings
  }
  
  ${MOBILE_STYLE} {
    width: 25%;
  }

  ${DESKTOP_STYLE} {
    width: 100%;
  }
`

const YellowSquare = styled.div`
  flex: 0 1 48px;
  height: 48px;
  background-color: rgb(242, 177, 61);
`

const Footer = styled.div`
  width: 100%;
  flex: 0 0 80px;
  padding: 16px 16px 0 16px;
  background-color: lime;

  ${MOBILE_STYLE} {
    display: block;
  }

  ${DESKTOP_STYLE} {
    display: flex;
  }
`

// I think this is a pretty clean solution for the footer, interested in your feedback
const FooterRow = styled.div`
  margin: 0 auto 16px auto;
  display: flex;
  justify-content: center;

  ${MOBILE_STYLE} {
    width: 50%;
  }

  ${DESKTOP_STYLE} {
    flex: 0 1 50%;
  }
`

const PinkBoxLargeBottom = styled.div`
  flex: 1 0 auto;
  height: 64px;
  background-color: rgb(235, 83, 159);
`

const PinkBoxSmallBottomLeft = styled.div`
  flex: 0 0 64px;
  height: 64px;
  margin: 0 auto 0 16px;
  background-color: rgb(235, 83, 159);
`

const PinkBoxSmallBottomRight = styled.div`
  flex: 0 0 64px;
  height: 64px;
  background-color: rgb(235, 83, 159);

  ${MOBILE_STYLE} {}

  ${DESKTOP_STYLE} {
    margin: 0 0 0 auto;
  }
`

const ContentBlock = () => {
  return (
    <LightBlueRectangle>
      <YellowSquare />
    </LightBlueRectangle>
  )
}

export const Module15 = () => {
  return (
    <ModuleWrapper>
      <Container>
        <Header>
          <PinkBoxSmallTop />
          <PinkBoxLargeTop />
        </Header>
        <Content>
          <ContentBlock />
          <ContentBlock />
          <ContentBlock />
          <ContentBlock />
          <ContentBlock />
          <ContentBlock />
          <ContentBlock />
          <ContentBlock />
        </Content>
        <Footer>
          <FooterRow>
            <PinkBoxLargeBottom />
            <PinkBoxSmallBottomLeft />
          </FooterRow>
          <FooterRow>
            <PinkBoxSmallBottomRight />
          </FooterRow>
        </Footer>
      </Container>
    </ModuleWrapper>
  )
}
