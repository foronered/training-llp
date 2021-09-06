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
  flex: 0 0 304px;
  height: 100%;
  background-color: red;
`

// View
const MediaContainer = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  background-color: blue;
  padding: 8px 16px;
  padding-bottom: 0px;
`

const PurpleBox = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  background-color: purple;
  padding: 4px;
`

// Create one container per row? or how do i tell flex how many I want per row?

// Why can't I replace width with flex here?

const HelpRow = styled.div`
  width: 100%;
  height: 256px;
  display: flex;
  justify-content: space-evenly;
  padding: 4px;
`

const RedSquare = styled.div`
  flex: 1;
  background-color: red;
  margin-right: 8px;

  &:last-child { margin-right: 0px};
`

export const Module9 = () => {
  return (
    <ModuleWrapper>
      <Container>
        <RedBox />
        <MediaContainer>
          <PurpleBox>
            <HelpRow >
              <RedSquare />
              <RedSquare />
              <RedSquare />
            </HelpRow>
            <HelpRow >
              <RedSquare />
              <RedSquare />
              <RedSquare />
            </HelpRow>
          </PurpleBox>
        </MediaContainer>
      </Container>
    </ModuleWrapper>
  )
}
