import React from 'react'
import styled from 'styled-components'
import { ModuleWrapper } from './common'

const Container = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: blue;
`

const GreenBox = styled.div`
  width: 100%;
  height: 128px;
  background-color: green;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 16px 0px 16px;
`

const PinkSquare = styled.div`
  width: 64px;
  height: 64px;
  background-color: pink;
`

const PinkBox = styled.div`
  width: 256px;
  height: 64px;
  background-color: pink;
`

const RedBox = styled.div`
  flex: 1;
  height: 100%;
  background-color: red;
  overflow-y: scroll;
  padding: 40px;
`


const BlueBox = styled.div`
  width: 100%;
  height: 128px;
  background-color: lightblue;
  margin-bottom: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const OrangeBox = styled.div`
  width: 63px;
  height: 64px;
  background-color: orange;
  margin-bottom: 8px;
`

const blueBoxes = 12;

// How to get pinksquare on the bottom to the left? Create new container?

// does orangebox also need a key in the mapping?

export const Module14 = () => {
  return (
    <ModuleWrapper>
      <Container>
        <GreenBox>
          <PinkSquare />
          <PinkBox />
        </GreenBox>
        <RedBox>
          {[...Array(blueBoxes)].map((_, i) => <BlueBox key={i} > <OrangeBox /> </BlueBox>)}
        </RedBox>
        <GreenBox>
          <PinkBox />
          <PinkSquare />
          <PinkSquare />
        </GreenBox>
      </Container>
    </ModuleWrapper>
  )
}
