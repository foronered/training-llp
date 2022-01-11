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
  justify-content: center;
  background-color: lime;
`

const HeaderContainer = styled.div`
  height: 100%;
  display: flex;

  ${MOBILE_STYLE} {
    flex: 0 1 50%;
    flex-direction: column;
    align-items: flex-start;
  }

  ${DESKTOP_STYLE} {
    flex: 1;
    flex-direction: row;
    justify-content: space-between;
  }
`

const PinkBoxSmall = styled.div`
  background-color: rgb(235, 83, 159);

  ${MOBILE_STYLE} {
    flex: 0 0 48px;
    width: 64px;
    margin: 0 0 12px 0;
  }

  ${DESKTOP_STYLE} {
    flex: 0 1 64px;
    height: 100%;
  }
`

const PinkBoxLarge = styled.div`
  background-color: rgb(235, 83, 159);

  ${MOBILE_STYLE} {
    flex: 0 0 48px;
    width: 100%;
  }

  ${DESKTOP_STYLE} {
    flex: 0 1 33%;
    height: 100%;
  }
`

const Content = styled.div`
  width: 100%;
  //flex: 1 0 auto; // For some reason can't use flex here as it messes with the overflow scrolling, ask Luke what he thinks
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
  background-color: rgb(71, 159, 248);
  
  :last-of-type {
    margin: 0 0 32px 0;  // Because our margins are different from our parent paddings
  }

  ${MOBILE_STYLE} {
    width: 200px;
  }

  ${DESKTOP_STYLE} {
    width: 100%;
  }
`

export const Module14 = () => {
  return (
    <ModuleWrapper>
      <Container>
        <Header>
          <HeaderContainer>
            <PinkBoxSmall />
            <PinkBoxLarge />
          </HeaderContainer>
        </Header>
        <Content>
          <LightBlueRectangle />
          <LightBlueRectangle />
          <LightBlueRectangle />
          <LightBlueRectangle />
          <LightBlueRectangle />
          <LightBlueRectangle />
          <LightBlueRectangle />
          <LightBlueRectangle />
        </Content>
      </Container>
    </ModuleWrapper>
  )
}
