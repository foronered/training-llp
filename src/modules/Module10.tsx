import React from 'react'
import styled from 'styled-components'
import {ModuleWrapper} from './common'


interface RedBoxProps {
  flex?: string,

  width?: string,
  height: string,
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  
  display: flex;
  align-items: center;
  background-color: blue;
`

const RedSidebar = styled.div`
  width: 300px;
  height: 100%;
  
  flex-shrink: 0;
  background-color: red;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 8px;
`

const BlueSidebarItem = styled.div`
  width: 100%;
  height: 40px;
  
  flex-shrink: 1;
  margin: 4px 0;
  background-color: blue;

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

  padding: 8px 16px 0 16px;
  
  display: flex;
  align-items: center;
  background-color: blue;
`

const PurpleBox = styled.div`
  width: 100%;
  height: 100%;
  
  display: flex;
  flex-direction: column;
  
  padding: 8px;
    
  background-color: purple;
`

const RedBoxRow = styled.div`
  width: 100%;
  display: flex;
  
  margin: 4px 0;
  justify-content: space-between;
  align-items: center;

  :first-of-type {
    margin: 0 0 4px 0;
  }

  :last-of-type {
    margin: 4px 0 8px 0;
  }
`

const RedBox = styled.div.attrs((props: RedBoxProps) => props)`
  flex: ${(props) => props.flex ? props.flex : "1"};
  
  width: ${(props) => props.width ? props.width : ""};
  height: ${(props) => props.height ? props.height : ""};
  
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
              <RedBox height="144px" />
            </RedBoxRow>
            <RedBoxRow>
              <RedBox flex="0 1 200px" height="200px" />
              <RedBox flex="0 1 200px" height="200px" />
            </RedBoxRow>
          </PurpleBox>
        </BlueContainerBox>
      </Container>
    </ModuleWrapper>
  )
}
