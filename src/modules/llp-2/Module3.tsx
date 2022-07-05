import React from 'react'
import styled from 'styled-components'
import { DESKTOP_STYLE, MOBILE_STYLE } from '../../constants'
import { ModuleWrapper } from '../common'

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: red;
`

const Green = styled.div`
  width: 100%;
  padding: 16px;
  background-color: lime;
`
const GreenWrapper = styled.div`
  display: flex;
  ${DESKTOP_STYLE} {
    justify-content: space-between;
  }
  ${MOBILE_STYLE} {
    margin: 0 auto;
    width: fit-content;
    flex-direction: column;
    gap: 16px;
  }
`

const Red = styled.div`
  display: flex;
  gap: 16px;
  flex-direction: column;
  background-color: red;
`

const RedScrollView = styled.div`
  background-color: red;
  height: 100%;
  ${MOBILE_STYLE} {
    margin: 0 auto;
    width: 256px;
  }
  padding: 32px;
  overflow-y: scroll;
`

const BlueItem = styled.div`
  width: 100%;
  height: 64px;
  background-color: dodgerblue;
`

const PinkOne = styled.div`
  width: 64px;
  height: 48px;
  background-color: hotpink;
`
const PinkTwo = styled.div`
  background-color: hotpink;
  height: 48px;
  width: 256px;
`

export const Module3 = () => {
  return (
    <ModuleWrapper>
      <Container>
        <Green>
          <GreenWrapper>
            <PinkOne />
            <PinkTwo />
          </GreenWrapper>
        </Green>
        <RedScrollView>
          <Red>
            <BlueItem />
            <BlueItem />
            <BlueItem />
            <BlueItem />
            <BlueItem />
            <BlueItem />
            <BlueItem />
            <BlueItem />
            <BlueItem />
            <BlueItem />
          </Red>
        </RedScrollView>
      </Container>
    </ModuleWrapper>
  )
}
