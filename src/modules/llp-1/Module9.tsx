import React from 'react'
import styled from 'styled-components'
import { MOBILE_STYLE } from '../../constants'
import { ModuleWrapper } from '../common'

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  background-color: blue;
  ${MOBILE_STYLE} {
    flex-direction: column;
  }
`

const RedBox = styled.div`
  width: 300px;
  min-height: 100px;
  background-color: red;
  ${MOBILE_STYLE} {
    width: 100%;
  }
`

const PurpleBox = styled.div`
  padding: 8px;
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 8px;
  align-content: start;
  background-color: purple;
  min-width: calc(100% - 332px);
  margin: 0 16px;
  margin-top: 8px;
  ${MOBILE_STYLE} {
    display: flex;
    background-color: transparent;
    flex-direction: column;
    align-items: center;
  }
`

const SmallBox = styled.div`
  width: 100%;
  aspect-ratio: 1;
  background-color: red;
  ${MOBILE_STYLE} {
    width: 250px;
  }
`

export const Module9 = () => {
  return (
    <ModuleWrapper>
      <Container>
        <RedBox />
        <PurpleBox>
          <SmallBox />
          <SmallBox />
          <SmallBox />
          <SmallBox />
          <SmallBox />
          <SmallBox />
        </PurpleBox>
      </Container>
    </ModuleWrapper>
  )
}
