import React from 'react'
import styled from 'styled-components'
import { DESKTOP_STYLE, MOBILE_STYLE } from '../constants'
import { ModuleWrapper } from './common'

const Container = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: blue;

  ${DESKTOP_STYLE}  {
    flex-direction: row;
  }

  ${MOBILE_STYLE} {
    flex-direction: column;
  }
`

const MediaContainer = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  background-color: blue;
  padding: 8px 16px 0px 16px;
  overflow-y: scroll;
`

const RedBox = styled.div`
  background-color: red;
  padding: 8px;
  display: flex;

  ${DESKTOP_STYLE}  {
    flex: 0 0 304px;
    height: 100%;
    flex-direction: column;
  }

  ${MOBILE_STYLE} {
    flex: 0 0 80px;
    width: 100%;
    flex-direction: row;
    overflow-x: scroll;
  }
`

const GreenBox = styled.div`
  background-color: green;
  display: flex;

  ${DESKTOP_STYLE}  {
    flex: 0 0 40px;
    width: 100%;
    margin-bottom: 8px;
  }

  ${MOBILE_STYLE} {
    flex: 0 0 128px;
    height: 100%;
    margin-right: 8px;
  }
`

const RedSquare = styled.div`
  width: 200px;
  height: 200px;
  background-color: red;
  margin: 8px;
`

const NumberOfBoxes = 36

export const Module11 = () => {
  return (
    <ModuleWrapper>
      <Container>
        <RedBox>
          <GreenBox />
          <GreenBox />
          <GreenBox />
          <GreenBox />
          <GreenBox />
        </RedBox>
        <MediaContainer>
          {[...Array(NumberOfBoxes)].map((_, i) => (
            <RedSquare key={i} />
          ))}
        </MediaContainer>
      </Container>
    </ModuleWrapper>
  )
}
