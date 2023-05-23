import React from 'react'
import styled from 'styled-components'
import { MOBILE_BREAKPOINT } from '../constants'
import { ModuleWrapper } from './common'

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
`
const RedColumn = styled.div`
  flex: 0 0 300px;
  height: 100%;
  background-color: red;
`
const BlueBox = styled.div`
  flex: 1;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 8px;
  display: flex;
  background-color: blue;
`
const PurpleBox = styled.div`
  flex: 0 0 100%;
  height: 100%;
  padding: 8px;
  gap: 8px;
  display: flex;
  background-color: purple;
`
const RedBox = styled.div`
  flex: 1;
  background-color: red;
`

export const Module9 = () => {
  return (
    <ModuleWrapper>
      <Container>
        <RedColumn />
        <BlueBox>
          <PurpleBox>
            <RedBox />
            <RedBox />
            <RedBox />
          </PurpleBox>
        </BlueBox>
      </Container>
    </ModuleWrapper>
  )
}
