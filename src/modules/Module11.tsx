import React from 'react'
import styled from 'styled-components'
import {ModuleWrapper} from './common'
import {MOBILE_BREAKPOINT} from "../constants";


const Container = styled.div`
  width: 100%;
  height: 100%;
  
  display: flex;
  flex-direction: column;
  background-color: blue;

  @media (min-width: ${MOBILE_BREAKPOINT}) {
    flex-direction: row;
  }
`

const RedSidebar = styled.div`
  flex: 0 0 80px;
  width: 100%;
  
  padding: 8px 0 8px 8px;
  display: flex;
  align-items: center;
  background-color: red;
  
  overflow: scroll;

  @media (min-width: ${MOBILE_BREAKPOINT}) {
    flex: 0 0 300px;
    width: auto;
    height: 100%;
    flex-direction: column;
    padding: 8px 8px 0 8px;
  }
`

const GreenSidebarItem = styled.div`
  flex: 0 0 160px;
  height: 40px;
  margin: 0 8px 0 0;
  background-color: lime;

  @media (min-width: ${MOBILE_BREAKPOINT}) {
    width: 100%;
    flex: 0 0 40px;
    margin: 0 0 8px 0;
  }
`

const Content = styled.div`
  flex: 1 0 80%;
  width: 100%;
  
  padding: 16px;
  overflow: scroll;

  @media (min-width: ${MOBILE_BREAKPOINT}) {
    width: auto;
    height: 100%;
  }
`

const ContentGrid = styled.div`
  width: fit-content; // We need this to left align the grid container
  
  display: grid;
  margin: auto;
  grid-template: repeat(12, 1fr) / repeat(3, 1fr);
  gap: 8px;

  @media (min-width: ${MOBILE_BREAKPOINT}) {
    margin: 0;
  }
`

const RedBox = styled.div`
  width: 200px;
  height: 200px;
  
  background-color: red;
`

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
            <RedBox />
            <RedBox />
            <RedBox />
            <RedBox />
            <RedBox />
            <RedBox />
            <RedBox />
            <RedBox />
            <RedBox />
            <RedBox />
            <RedBox />
            <RedBox />
            <RedBox />
            <RedBox />
            <RedBox />
            <RedBox />
            <RedBox />
            <RedBox />
            <RedBox />
            <RedBox />
            <RedBox />
            <RedBox />
            <RedBox />
            <RedBox />
            <RedBox />
            <RedBox />
            <RedBox />
            <RedBox />
            <RedBox />
            <RedBox />
            <RedBox />
            <RedBox />
            <RedBox />
            <RedBox />
            <RedBox />
            <RedBox />
          </ContentGrid>
        </Content>
      </Container>
    </ModuleWrapper>
  )
}
