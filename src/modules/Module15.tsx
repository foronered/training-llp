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

const PinkBoxSmallLeft = styled.div`
  flex: 0 1 64px;
  height: 100%;
  
  margin-left: 16px;
  margin-right: auto;
  
  background-color: rgb(235, 83, 159);
`

const PinkBoxLarge = styled.div`
  flex: 0 1 33%;
  height: 100%;
  
  background-color: rgb(235, 83, 159);
`

const Content = styled.div`
  width: 100%;
  //flex: 1 0 auto; // see Module 14
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
  padding: 16px;
  display: flex;
  justify-content: center;
  background-color: rgb(71, 159, 248);
  
  :last-of-type {
    margin: 0 0 32px 0;  // Because our margins are different from our parent paddings
  }
`

const YellowSquare = styled.div`
  flex: 0 1 48px;
  height: 48px;
  
  background-color: rgb(242, 177, 61);
`

const Footer = styled.div`
  // Technically, you could just use the header element from above, as here they are 100% identical
  // But what if in a real world scenario the footer changed? Hence it's best practice to keep them separate
  width: 100%;
  flex: 0 0 80px;

  padding: 16px;

  display: flex;
  justify-content: space-between;
  background-color: lime;
`

const ContentBlock = () => {
  return (
    <LightBlueRectangle>
      <YellowSquare />
    </LightBlueRectangle>
  )
}

export const Module15 = () => {
  return (
    <ModuleWrapper>
      <Container>
        <Header>
          <PinkBoxSmall />
          <PinkBoxLarge />
        </Header>
        <Content>
          <ContentBlock />
          <ContentBlock />
          <ContentBlock />
          <ContentBlock />
          <ContentBlock />
          <ContentBlock />
          <ContentBlock />
          <ContentBlock />
        </Content>
        <Footer>
          <PinkBoxLarge />
          <PinkBoxSmallLeft />
          <PinkBoxSmall />
        </Footer>
      </Container>
    </ModuleWrapper>
  )
}
