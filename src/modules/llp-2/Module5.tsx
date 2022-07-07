import React from 'react'
import styled from 'styled-components'
import { DESKTOP_STYLE, MOBILE_STYLE } from '../../constants'
import { ModuleWrapper } from '../common'

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: blue;
  justify-content: center;
  display: flex;
`

const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  background-color: red;
  ${DESKTOP_STYLE} {
    flex: 0 0 300px;
  }
  ${MOBILE_STYLE} {
    flex: 0 0 100px;
  }
`

const Content = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  background-color: blue;
  ${MOBILE_STYLE} {
    flex: 0 0 350px;
  }
`

const Pink = styled.div`
  background-color: hotpink;
  flex: 0 0 100px;
  padding: 16px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 16px;
  overflow: hidden;
`

const BlueSquare = styled.div`
  flex: 0 0 68px;
  height: 100%;
  background-color: dodgerblue;
`

const RedWrapper = styled.div`
  display: flex;
  background-color: red;
  flex: 1;
  overflow-y: scroll;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
`

const GreenBar = styled.div`
  background-color: lime;
  flex: 0 0 68px;
`

const OrangeSidebarFooter = styled.div`
  flex: 0 0 100px;
  display: flex;
  background-color: orange;
  padding: 16px;
  gap: 16px;
`

const OrangeHeader = styled.div`
  flex: 0 0 100px;
  display: flex;
  background-color: orange;
  padding: 16px;
  gap: 16px;
  align-items: center;
  justify-content: space-between;
`

const RedBar = styled.div`
  background-color: red;
  flex: 1;
  max-width: 200px;
  height: 40px;
`
const DesktopRedBar = styled(RedBar)`
  ${MOBILE_STYLE} {
    display: none;
  }
`

const BlueMenu = styled.div`
  display: flex;
  height: 100%;
  background-color: dodgerblue;
  padding: 16px;
  gap: 16px;
  ${DESKTOP_STYLE} {
    flex: 0 0 300px;
  }
  ${MOBILE_STYLE} {
    flex: 0 0 80px;
  }
`

const ContentArea = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex: 1;
  overflow-y: scroll;
  padding: 32px;
  gap: 32px;
  ${DESKTOP_STYLE} {
    justify-content: flex-start;
  }
  ${MOBILE_STYLE} {
    justify-content: center;
  }
`

const BlueContentBox = styled.div`
  background-color: dodgerblue;
  ${DESKTOP_STYLE} {
    flex: 0 0 300px;
    height: 200px;
  }
  ${MOBILE_STYLE} {
    flex: 0 0 200px;
    height: 150px;
  }
`

export const Module5 = () => {
  return (
    <ModuleWrapper>
      <Container>
        <Sidebar>
          <Pink>
            <BlueSquare></BlueSquare>
            <BlueSquare></BlueSquare>
          </Pink>
          <RedWrapper>
            <GreenBar></GreenBar>
            <GreenBar></GreenBar>
            <GreenBar></GreenBar>
            <GreenBar></GreenBar>
            <GreenBar></GreenBar>
            <GreenBar></GreenBar>
            <GreenBar></GreenBar>
          </RedWrapper>
          <OrangeSidebarFooter>
            <BlueSquare></BlueSquare>
            <BlueSquare
              style={{
                flex: 1,
              }}
            />
          </OrangeSidebarFooter>
        </Sidebar>
        <Content>
          <OrangeHeader>
            <RedBar />
            <BlueMenu>
              <RedBar />
              <DesktopRedBar />
              <DesktopRedBar />
              <DesktopRedBar />
            </BlueMenu>
          </OrangeHeader>
          <ContentArea>
            <BlueContentBox />
            <BlueContentBox />
            <BlueContentBox />
            <BlueContentBox />
            <BlueContentBox />
            <BlueContentBox />
            <BlueContentBox />
            <BlueContentBox />
          </ContentArea>
        </Content>
      </Container>
    </ModuleWrapper>
  )
}
