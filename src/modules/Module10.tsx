import React from 'react'
import styled from 'styled-components'
import {ModuleWrapper} from './common'


const Container = styled.div`
  width: 100%;
  height: 100%;
  
  display: flex;
  background-color: blue;
`

const RedSidebar = styled.div`
  flex: 0 0 300px;
  height: 100%;
  
  padding: 8px 8px 0 8px;
  display: flex;
  flex-direction: column;
  background-color: red;
`

const BlueSidebarItem = styled.div`
  width: 100%;
  flex: 0 0 40px;
  
  margin: 0 0 8px 0;
  background-color: blue;
`

const BlueContainerBox = styled.div`
  flex: 1 0 auto;
  height: 100%;

  padding: 8px 16px 0 16px;
  background-color: blue;
`

const PurpleBox = styled.div`
  width: 100%;
  height: 100%;

  padding: 8px 8px 0 8px;
  display: flex;
  flex-direction: column;
  background-color: purple;
`

const RedBoxRow = styled.div`
  width: 100%;
  display: flex;
  
  margin: 0 0 8px 0;
  justify-content: space-between;
`

const LongRedBox = styled.div`
  flex: 1 0 auto;
  height: 144px;
  
  background-color: red;
`

const RedBox = styled.div`
  flex: 0 1 200px;
  height: 200px;
  
  background-color: red;
`

// Tried with grid for a little while, but responsive widths just seem to be so much easier w. Flexbox. So I switched.
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
        <BlueContainerBox>
          <PurpleBox>
            <RedBoxRow>
              <LongRedBox />
            </RedBoxRow>
            <RedBoxRow>
              <RedBox />
              <RedBox />
            </RedBoxRow>
          </PurpleBox>
        </BlueContainerBox>
      </Container>
    </ModuleWrapper>
  )
}
