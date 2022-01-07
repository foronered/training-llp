import React from 'react'
import styled from 'styled-components'
import {ModuleWrapper} from './common'


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
  align-items: center;
  justify-content: space-between;
  background-color: lime;
`

const PinkBoxSmall = styled.div`
  width: 64px;
  height: 100%;
  
  background-color: rgb(235, 83, 159);
`

const PinkBoxLarge = styled.div`
  width: 33%;
  height: 100%;
  
  background-color: rgb(235, 83, 159);
`

const Content = styled.div`
  width: 100%;
  height: auto;
  
  padding: 32px;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: red;

  overflow: scroll;
`

const LightBlueRectangle = styled.div`
  width: 100%;
  flex: 0 0 80px;

  margin: 8px 0;
  
  background-color: rgb(71, 159, 248);

  :first-of-type {
    margin: 0 0 8px 0;
  }

  :last-of-type {
    margin: 8px 0 0 0;
  }
`

export const Module14 = () => {
  return (
    <ModuleWrapper>
      <Container>
        <Header>
          <PinkBoxSmall />
          <PinkBoxLarge />
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
