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
    align-items: center;
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
  ${MOBILE_STYLE} {
    margin: 0 auto;
    width: 256px;
  }
  padding: 32px;
`

const RedScrollView = styled.div`
  background-color: red;
  height: 100%;
  overflow-y: scroll;
`

const Blue = styled.div`
  width: 100%;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: dodgerblue;
`

const PinkOne = styled.div`
  width: 64px;
  height: 48px;
  background-color: hotpink;
`
const PinkLong = styled.div`
  width: 256px;
  height: 48px;
  background-color: hotpink;
`
const PinkTwo = styled.div`
  width: 256px;
  height: 48px;
  background-color: hotpink;
  ${MOBILE_STYLE} {
    display: none;
  }
`
const Row = styled.div`
  display: flex;
  gap: 16px;
`

const Orange = styled.div`
  width: 40px;
  height: 32px;
  background-color: orange;
`

const BlueItem = () => (
  <Blue>
    <Orange />
  </Blue>
)

export const Module4 = () => {
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
        <Green>
          <GreenWrapper>
            <Row>
              <PinkLong />
              <PinkOne />
            </Row>
            <PinkOne />
          </GreenWrapper>
        </Green>
      </Container>
    </ModuleWrapper>
  )
}
