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
const Menu = styled.div`
  display: flex;
  ${DESKTOP_STYLE} {
    justify-content: space-between;
  }
  ${MOBILE_STYLE} {
    margin: 0 auto;
    align-items: center;
    //todo: remove fit content
    width: fit-content;
    flex-direction: column;
    gap: 16px;
  }
`

const RedScrollView = styled.div`
  display: flex;
  gap: 16px;
  flex-direction: column;
  padding: 32px;
  background-color: red;
  height: 100%;
  overflow-y: scroll;
  ${MOBILE_STYLE} {
    margin: 0 auto;
    width: 256px;
  }
`

const Blue = styled.div`
  width: 100%;
  flex: 0 0 64px;
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
const PinkTwo = styled.div`
  width: 256px;
  height: 48px;
  background-color: hotpink;
  ${MOBILE_STYLE} {
    display: none;
  }
`
const PinkLong = styled.div`
  width: 256px;
  height: 48px;
  background-color: hotpink;
`
const Row = styled.div`
  display: flex;
  gap: 16px;
`

const Orange = styled.div`
  flex: 0 0 40px;
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
          <Menu>
            <PinkOne />
            <PinkTwo />
          </Menu>
        </Green>
        <RedScrollView>
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
        </RedScrollView>
        <Green>
          <Menu>
            <Row>
              <PinkLong />
              <PinkOne />
            </Row>
            <PinkOne />
          </Menu>
        </Green>
      </Container>
    </ModuleWrapper>
  )
}
