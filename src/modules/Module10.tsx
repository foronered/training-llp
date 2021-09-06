import React from 'react'
import styled from 'styled-components'
import { ModuleWrapper } from './common'

const Container = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  background-color: blue;
`

// Navbar
const RedBox = styled.div`
  width: 304px;
  height: 100%;
  background-color: red;
  padding: 8px;
`

const BlueBox = styled.div`
  flex: 1;
  height: 40px;
  background-color: blue;
  margin-bottom: 8px;
`

// View
const ViewContainer = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: blue;
  padding: 8px 16px 0 16px;
`

const PurpleBox = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  align-content: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
  background-color: purple;
  padding: 8px;
`

// Why can't I replace width with flex here?

const RedWidebox = styled.div`
  width: 100%;
  height: 144px;
  background-color: red;
  margin-bottom: 8px;
`
const RedSquare = styled.div`
  width: 200px;
  height: 200px;
  background-color: red;
`

export const Module10 = () => {
  return (
    <ModuleWrapper>
      <p>Module 10</p>
      <Container>
        <RedBox>
          <BlueBox />
          <BlueBox />
          <BlueBox />
          <BlueBox />
          <BlueBox />
        </RedBox>
        <ViewContainer>
          <PurpleBox>
            <RedWidebox />
            <RedSquare />
            <RedSquare />
          </PurpleBox>
        </ViewContainer>
      </Container>
    </ModuleWrapper>
  )
}
