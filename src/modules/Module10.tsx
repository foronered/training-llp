import styled from 'styled-components'
import {DESKTOP_STYLE, MOBILE_STYLE, ModuleWrapper} from './common'


const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  background-color: blue;
  overflow-y: scroll;

  ${MOBILE_STYLE} {
    padding: 32px 0;
    flex-direction: column;
    align-items: center;
  }

  ${DESKTOP_STYLE} {
    padding: 0;
    flex-direction: row;
  }
`

const RedSidebar = styled.div`
  padding: 8px 8px 0 8px;
  display: flex;
  flex-direction: column;
  background-color: red;

  ${MOBILE_STYLE} {
    flex: 1 0 auto;
    width: 300px;
  }

  ${DESKTOP_STYLE} {
    flex: 0 0 300px;
    height: 100%;
  }
`

const BlueSidebarItem = styled.div`
  width: 100%;
  flex: 0 0 40px;
  margin: 0 0 8px 0;
  background-color: blue;
`

const ContentBox = styled.div`
  flex: 1 0 auto;
  padding: 8px 16px 0 16px;
  display: flex;

  ${MOBILE_STYLE} {
    width: 100%;
  }

  ${DESKTOP_STYLE} {
    height: 100%;
  }
`

const PurpleBox = styled.div`
  flex: 1 0 auto;
  height: 100%;
  padding: 8px 8px 0 8px;
  display: flex;
  flex-direction: column;
  background-color: purple;
`

const RedBoxRow = styled.div`
  width: 100%;
  flex: 0 0 auto;  // Take the height of the content
  margin: 0 0 8px 0;
  display: flex;
  justify-content: space-between;
`

const LongRedBox = styled.div`
  flex: 1 1 auto;
  height: 144px;
  background-color: red;
`

const RedBox = styled.div`
  flex: 0 1 200px;
  height: 200px;
  background-color: red;
`

export const Module10 = () => {
  return (
    <ModuleWrapper>
      <Container>
        <RedSidebar>
          <BlueSidebarItem />
          <BlueSidebarItem />
          <BlueSidebarItem />
          <BlueSidebarItem />
          <BlueSidebarItem />
        </RedSidebar>
        <ContentBox>
          <PurpleBox>
            <RedBoxRow>
              <LongRedBox />
            </RedBoxRow>
            <RedBoxRow>
              <RedBox />
              <RedBox />
            </RedBoxRow>
          </PurpleBox>
        </ContentBox>
      </Container>
    </ModuleWrapper>
  )
}
