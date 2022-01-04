import React from 'react'
import styled from 'styled-components'
import {ModuleWrapper} from './common'


const Container = styled.div`
  width: 100%;
  height: 100%;
  
  display: flex;
  align-items: center;
  background-color: blue;
`

const RedSidebar = styled.div`
  position: sticky;
  
  width: 300px;
  height: 100%;
  
  flex-shrink: 0;
  background-color: red;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 8px;
`

const GreenSidebarItem = styled.div`
  width: 100%;
  height: 40px;
  
  flex-shrink: 1;
  margin: 4px 0;
  background-color: lime;

  :first-of-type {
      margin: 8px 0 4px 0;
  }
    
  :last-of-type {
      margin: 4px 0 8px 0;
  }
`

const BlueContainerBox = styled.div`
  width: 100%;
  height: 100%;

  padding: 16px 16px;
  
  display: flex;
  gap: 8px;
  flex-direction: column;
  background-color: blue;
  
  overflow: scroll;
`

const RedBoxRow = styled.div`
  width: 100%;
  
  display: flex;
  gap: 8px;
  
  justify-content: flex-start;
  align-items: center;
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
        <BlueContainerBox>
          <RedBoxRow>
            <RedBox />
            <RedBox />
            <RedBox />
          </RedBoxRow>
          <RedBoxRow>
            <RedBox />
            <RedBox />
            <RedBox />
          </RedBoxRow>
          <RedBoxRow>
            <RedBox />
            <RedBox />
            <RedBox />
          </RedBoxRow>
          <RedBoxRow>
            <RedBox />
            <RedBox />
            <RedBox />
          </RedBoxRow>
          <RedBoxRow>
            <RedBox />
            <RedBox />
            <RedBox />
          </RedBoxRow>
          <RedBoxRow>
            <RedBox />
            <RedBox />
            <RedBox />
          </RedBoxRow>
          <RedBoxRow>
            <RedBox />
            <RedBox />
            <RedBox />
          </RedBoxRow>
          <RedBoxRow>
            <RedBox />
            <RedBox />
            <RedBox />
          </RedBoxRow>
          <RedBoxRow>
            <RedBox />
            <RedBox />
            <RedBox />
          </RedBoxRow>
          <RedBoxRow>
            <RedBox />
            <RedBox />
            <RedBox />
          </RedBoxRow>
          <RedBoxRow>
            <RedBox />
            <RedBox />
            <RedBox />
          </RedBoxRow>
          <RedBoxRow>
            <RedBox />
            <RedBox />
            <RedBox />
          </RedBoxRow>
        </BlueContainerBox>
      </Container>
    </ModuleWrapper>
  )
}
