import React from 'react'
import styled from 'styled-components'
import { DESKTOP_STYLE, MOBILE_STYLE } from '../../constants'
import { ModuleWrapper } from './../common'

const Container = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  background-color: blue;
`
const Content = styled.div`
  width: 100%;
  height: 700px;
  display: flex;
  align-items: center;

  ${DESKTOP_STYLE} {
    justify-content: space-evenly;
  }

  ${MOBILE_STYLE} {
    flex-direction: column;
    justify-content: space-evenly;
  }
`

const RedBox = styled.div`
  width: 200px;
  height: 200px;

  background-color: red;

  ${MOBILE_STYLE} {
    flex-wrap: wrap;
  }
`

export const Module2 = () => {
  return (
    <ModuleWrapper>
      <Container>
        <Content>
          <RedBox />
          <RedBox />
          <RedBox />
        </Content>
      </Container>
    </ModuleWrapper>
  )
}
