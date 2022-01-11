import styled from 'styled-components'
import {DESKTOP_STYLE, MOBILE_STYLE, ModuleWrapper} from './common'


const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  background-color: blue;

  ${MOBILE_STYLE} {
    flex-direction: column;
  }

  ${DESKTOP_STYLE} {
    flex-direction: row;
  }
`

const RedSidebar = styled.div`
  display: flex;
  background-color: red;

  ${MOBILE_STYLE} {
    flex: 0 0 80px;
    width: 100%;
    padding: 8px 0 8px 8px;
    align-items: center;
    overflow-x: scroll;
  }

  ${DESKTOP_STYLE} {
    flex: 0 0 300px;
    height: 100%;
    flex-direction: column;
    padding: 8px 8px 0 8px;
  }
`

const GreenSidebarItem = styled.div`
  background-color: lime;

  ${MOBILE_STYLE} {
    flex: 0 0 160px;
    height: 40px;
    margin: 0 8px 0 0;
  }

  ${DESKTOP_STYLE} {
    flex: 0 0 40px;
    width: 100%;
    margin: 0 0 8px 0;
  }
`

const Content = styled.div`
  flex: 1;
  padding: 16px;
  overflow-y: scroll;

  ${MOBILE_STYLE} {
    width: 100%;
  }

  ${DESKTOP_STYLE} {
    height: 100%;
  }
`

const ContentGrid = styled.div`
  width: fit-content; // We need this to left align the grid container
  display: grid;
  grid-template: repeat(12, 1fr) / repeat(3, 1fr);
  gap: 8px;

  ${MOBILE_STYLE} {
    margin: 0 auto 0 auto;
  }

  ${DESKTOP_STYLE} {
    margin: 0;
  }
`

const RedBox = styled.div`
  width: 200px;
  height: 200px;
  background-color: red;
`

// I would like to type this but I am getting an error which is probably a topic for conversation
let GridArray: any[] = []

for (let i = 0; i < 36; i++) {
  GridArray.push(<RedBox />)
}

export const Module11 = () => {
  return (
    <ModuleWrapper>
      <Container>
        <RedSidebar>
          <GreenSidebarItem />
          <GreenSidebarItem />
          <GreenSidebarItem />
          <GreenSidebarItem />
          <GreenSidebarItem />
        </RedSidebar>
        <Content>
          <ContentGrid>
            {GridArray}
          </ContentGrid>
        </Content>
      </Container>
    </ModuleWrapper>
  )
}
