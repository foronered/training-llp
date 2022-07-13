import React from 'react'
import styled from 'styled-components'
import { DESKTOP_STYLE, MOBILE_STYLE } from '../../constants'
import { ModuleWrapper } from '../common'

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  background-color: blue;
  ${MOBILE_STYLE} {
    overflow-y: scroll;
    padding: 8px;
    align-items: center;
    flex-direction: column;
  }
`

const RedBox = styled.div`
  background-color: red;
  padding: 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  ${DESKTOP_STYLE} {
    flex: 0 0 300px;
  }
  ${MOBILE_STYLE} {
    flex: 0 0 100px;
    width: 300px;
  }
`
const PurpleWrapper = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  padding: 16px 8px 0 16px;
`

const PurpleBox = styled.div`
  flex: 1;
  padding: 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  background-color: purple;
`
const WideBox = styled.div`
  width: 100%;
  flex: 0 0 150px;
  background-color: red;
`

const Row = styled.div`
  flex: 1;
  display: flex;
  gap: 8px;
  justify-content: space-between;
`

const SmallBox = styled.div`
  background-color: red;
  ${DESKTOP_STYLE} {
    flex: 0 0 200px;
    height: 200px;
  }
  ${MOBILE_STYLE} {
    flex: 1;
    aspect-ratio: 1;
  }
`

const BlueBox = styled.div`
  flex: 0 0 40px;
  width: 100%;
  background-color: blue;
`

export const Module10 = () => {
  return (
    <ModuleWrapper>
      <Container>
        <RedBox>
          <BlueBox />
          <BlueBox />
          <BlueBox />
          <BlueBox />
          <BlueBox />
        </RedBox>
        <PurpleWrapper>
          <PurpleBox>
            <WideBox />
            <Row>
              <SmallBox />
              <SmallBox />
            </Row>
          </PurpleBox>
        </PurpleWrapper>
      </Container>
    </ModuleWrapper>
  )
}
