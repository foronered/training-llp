import React from 'react'
import styled from 'styled-components'
import { DESKTOP_STYLE, MOBILE_STYLE } from '../constants'
import { ModuleWrapper } from './common'

const Container = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  background-color: blue;

  ${DESKTOP_STYLE} {
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
  }

  ${MOBILE_STYLE} {
    flex-direction: column;
    align-items: center;
  }
`

const RedBox = styled.div`
  width: 304px;
  height: 304px;
  background-color: red;
  padding: 8px;
  overflow-y: scroll;

  ${DESKTOP_STYLE} {
    margin: 0px;
  }

  ${MOBILE_STYLE} {
    margin: 16px;
  }
`

const GreenBox = styled.div`
  width: 100%;
  height: 36px;
  background-color: green;
  margin-bottom: 8px;
`

const greenBoxes = 36

export const Module13 = () => {
  return (
    <ModuleWrapper>
      <Container>
        <RedBox>
          {[...Array(greenBoxes)].map((_, i) => (
            <GreenBox key={i} />
          ))}
        </RedBox>
        <RedBox>
          {[...Array(greenBoxes)].map((_, i) => (
            <GreenBox key={i} />
          ))}
        </RedBox>
      </Container>
    </ModuleWrapper>
  )
}
