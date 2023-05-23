import React from 'react'
import styled from 'styled-components'
import { DESKTOP_STYLE, MOBILE_BREAKPOINT, MOBILE_STYLE } from '../constants'
import { ModuleWrapper } from './common'

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  background-color: blue;
  ${DESKTOP_STYLE} {
    flex-direction: row;
  }
  ${MOBILE_STYLE} {
    flex-direction: column;
    align-items: center;
    padding-top: 16px;
  }
`
const RedBox = styled.div`
  padding: 8px;
  gap: 8px;
  display: flex;
  flex-direction: column;
  background-color: red;
  ${DESKTOP_STYLE} {
    flex: 0 0 300px;
    height: 100%;
  }
  ${MOBILE_STYLE} {
    flex-direction: column;
    flex: 0 0 100px;
    width: 200px;
  }
`
const BlueBox = styled.div`
  flex: 1;
  padding-left: 16px;
  padding-top: 8px;
  padding-right: 16px;
  background-color: blue;
`

const PurpleBox = styled.div`
  flex: 0 0 100%;
  height: 100%;
  padding: 8px;
  gap: 8px;
  display: flex;
  align-content: flex-start;
  flex-wrap: wrap;
  justify-content: space-between;
  background-color: purple;
`
const RedSquare = styled.div`
  height: 200px;
  aspect-ratio: 1;
  background-color: Red;
`
const RedRectangle = styled.div`
  height: 144px;
  width: 100%;
  display: flex;
  background-color: Red;
`
const BlueButton = styled.div`
  height: 40px;
  width: 100%;
  display: flex;
  background-color: blue;
`

export const Module10 = () => {
  return (
    <ModuleWrapper>
      <Container>
        <RedBox>
          <BlueButton />
          <BlueButton />
          <BlueButton />
          <BlueButton />
          <BlueButton />
        </RedBox>
        <BlueBox>
          <PurpleBox>
            <RedRectangle />
            <RedSquare />
            <RedSquare />
          </PurpleBox>
        </BlueBox>
      </Container>
    </ModuleWrapper>
  )
}
