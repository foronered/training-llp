import React from 'react'
import styled from 'styled-components'
import { DESKTOP_STYLE, MOBILE_STYLE } from '../../constants'
import { ModuleWrapper } from '../common'

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  ${MOBILE_STYLE} {
    flex-direction: column;
  }
`

const RedBox = styled.div`
  background-color: red;
  ${DESKTOP_STYLE} {
    flex: 0 0 300px;
  }
  ${MOBILE_STYLE} {
    flex: 0 0 100px;
  }
`
const BlueBox = styled.div`
  flex: 1;
  background-color: blue;
  padding: 8px 16px 0 16px;
  display: flex;
  justify-content: center;
`

const PurpleBox = styled.div`
  padding: 8px;
  display: grid;
  grid-gap: 8px;
  ${DESKTOP_STYLE} {
    flex: 1;
    align-content: flex-start;
    grid-template-columns: auto auto auto;
    background-color: purple;
  }
  ${MOBILE_STYLE} {
    flex: 0 0 256px;
    background-color: transparent;
    grid-template-columns: auto;
  }
`

const SmallBox = styled.div`
  flex: 1;
  aspect-ratio: 1;
  background-color: red;
`

export const Module9 = () => {
  return (
    <ModuleWrapper>
      <Container>
        <RedBox />
        <BlueBox>
          <PurpleBox>
            <SmallBox />
            <SmallBox />
            <SmallBox />
            <SmallBox />
            <SmallBox />
            <SmallBox />
          </PurpleBox>
        </BlueBox>
      </Container>
    </ModuleWrapper>
  )
}
