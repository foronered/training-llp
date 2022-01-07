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
  justify-content: space-between;
  background-color: lime;
`

const PinkBoxSmall = styled.div`
  flex: 0 1 64px;
  height: 100%;
  
  background-color: rgb(235, 83, 159);
`

const PinkBoxLarge = styled.div`
  flex: 0 1 33%;
  height: 100%;
  
  background-color: rgb(235, 83, 159);
`

const Content = styled.div`
  width: 100%;
  //flex: 1 0 auto; // For some reason can't use flex here as it messes with the overflow scrolling, ask Luke what he thinks
  height: auto; 
  
  padding: 32px 32px 0 32px;
  
  display: flex;
  flex-direction: column;
  background-color: red;

  overflow: scroll;
`

const LightBlueRectangle = styled.div`
  width: 100%;
  flex: 0 0 80px;

  margin: 0 0 16px 0;
  background-color: rgb(71, 159, 248);
  
  :last-of-type {
    margin: 0 0 32px 0;  // Because our margins are different from our parent paddings
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
