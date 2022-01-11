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
  background-color: red;

  ${MOBILE_STYLE} {
    flex: 0 0 150px;
    width: 100%;
  }

  ${DESKTOP_STYLE} {
    flex: 0 0 300px;
    height: 100%;
  }
`

const ContentBox = styled.div`
  flex: 1 0 auto;
  padding: 8px 16px 0 16px;
  display: flex;

  ${MOBILE_STYLE} {
    width: 100%;
    flex-direction: column;
  }

  ${DESKTOP_STYLE} {
    height: 100%;
    flex-direction: row;
  }
`

const PurpleBox = styled.div`
  flex: 1 0 auto;
  padding: 8px;
  display: grid;
  gap: 8px;

  ${MOBILE_STYLE} {
    width: 100%;
    justify-content: center;
    grid-template: repeat(6, 150px) / repeat(1, 150px);
  }

  ${DESKTOP_STYLE} {
    height: 100%;
    grid-template: repeat(2, 1fr) / repeat(3, 1fr);
    background-color: purple;  
  }
`

const RedBox = styled.div`
  background-color: red;
`

export const Module9 = () => {
  return (
    <ModuleWrapper>
      <Container>
        <RedSidebar />
        <ContentBox>
          <PurpleBox>
            <RedBox />
            <RedBox />
            <RedBox />
            <RedBox />
            <RedBox />
            <RedBox />
          </PurpleBox>
        </ContentBox>
      </Container>
    </ModuleWrapper>
  )
}
