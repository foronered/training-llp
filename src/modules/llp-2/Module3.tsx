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

  display: flex;
  justify-content: center;
`
const Menu = styled.div`
  display: flex;
  ${DESKTOP_STYLE} {
    flex: 1;
    justify-content: space-between;
  }
  ${MOBILE_STYLE} {
    flex-direction: column;
    gap: 16px;
  }
`

const RedScrollView = styled.div`
  display: flex;
  gap: 16px;
  flex-direction: column;
  background-color: red;
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
  flex: 0 0 64px;
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
      </Container>
    </ModuleWrapper>
  )
}
