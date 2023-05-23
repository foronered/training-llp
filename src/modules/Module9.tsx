import React from 'react'
import styled from 'styled-components'
import { DESKTOP_STYLE, MOBILE_STYLE } from '../constants'
import { ModuleWrapper } from './common'

const Container = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  background-color: blue;

  ${DESKTOP_STYLE} {
    flex-direction: row;
  }

  ${MOBILE_STYLE} {
    flex-direction: column;
  }
`

// Navbar
const RedBox = styled.div`
  background-color: red;

  ${DESKTOP_STYLE} {
    flex: 0 0 304px;
    height: 100%;
  }

  ${MOBILE_STYLE} {
    flex: 0 0 64px;
    width: 100%;
  }
`

// View
const MediaContainer = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  background-color: blue;
  padding: 8px 16px 0px 16px;
`

// how do i "remove" this container for mobile? just remove background color?

const PurpleBox = styled.div`
  flex: 1;
  height: 100%;

  ${DESKTOP_STYLE} {
    display: flex;
    align-content: flex-start;
    background-color: purple;
    padding: 4px;
    flex-wrap: wrap;
  }

  ${MOBILE_STYLE} {
    display: none;
  }
`

const MobileBox = styled.div`
  flex: 1;
  height: 100%;
  padding: 4px;

  ${DESKTOP_STYLE} {
    display: none;
  }

  ${MOBILE_STYLE} {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

// const HelpRow = styled.div`
//   width: 100%;
//   height: 256px;
//   display: flex;
//   justify-content: space-evenly;
//   padding: 4px;
// `

const RedSquare = styled.div`
  background-color: red;

  ${DESKTOP_STYLE} {
    margin: 4px;
    width: 256px;
    height: 256px;
  }

  ${MOBILE_STYLE} {
    margin: 16px;
    width: 128px;
    height: 128px;
  }
`

export const Module9 = () => {
  return (
    <ModuleWrapper>
      <Container>
        <RedBox />
        <MediaContainer>
          <PurpleBox>
            <RedSquare />
            <RedSquare />
            <RedSquare />
            <RedSquare />
            <RedSquare />
            <RedSquare />
          </PurpleBox>
          <MobileBox>
            <RedSquare />
            <RedSquare />
            <RedSquare />
          </MobileBox>
        </MediaContainer>
      </Container>
    </ModuleWrapper>
  )
}
