import React from 'react'
import styled from 'styled-components'
import { DESKTOP_STYLE, MOBILE_BREAKPOINT, MOBILE_STYLE } from '../constants'
import { ModuleWrapper } from './common'

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  ${DESKTOP_STYLE} {
    flex-direction: row;
  }
  ${MOBILE_STYLE} {
    flex-direction: column;
  }
`
const RedBox = styled.div`
  flex: 0 0 300px;
  height: 100%;
  background-color: red;
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
  padding-top: 8px;
  padding-left: 8px;
  padding-right: 8px;
  gap: 8px;
  display: flex;
  flex-wrap: wrap;
  ${DESKTOP_STYLE} {
    background-color: purple;
  }
  ${MOBILE_STYLE} {
    flex-direction: column;
    align-items: center;
  }
`
const RedSquare = styled.div`
  aspect-ratio: 1;
  display: flex;
  background-color: Red;
  ${DESKTOP_STYLE} {
    flex: 1;
  }
  ${MOBILE_STYLE} {
    height: 200px;
    width: 200px;
  }
`

export const Module9 = () => {
  return (
    <ModuleWrapper>
      <Container>
        <RedBox />
        <BlueBox>
          <PurpleBox>
            {[...Array(3)].map((_, idx) => (
              <RedSquare key={idx} />
            ))}
          </PurpleBox>
        </BlueBox>
      </Container>
    </ModuleWrapper>
  )
}
