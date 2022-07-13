import React from 'react'
import styled from 'styled-components'
import { DESKTOP_STYLE, MOBILE_STYLE } from '../../constants'
import { ModuleWrapper } from '../common'

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background-color: blue;
`

const OuterBox = styled.div`
  width: 400px;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;

  ${DESKTOP_STYLE} {
    background-color: red;
  }

  ${MOBILE_STYLE} {
    background-color: black;
  }
`

const InnerBox = styled.div`
  width: 200px;
  height: 200px;

  ${DESKTOP_STYLE} {
    background-color: orange;
  }

  ${MOBILE_STYLE} {
    background-color: lime;
  }
`

export const Module3 = () => {
  return (
    <ModuleWrapper>
      <Container>
        <OuterBox>
          <InnerBox />
        </OuterBox>
      </Container>
    </ModuleWrapper>
  )
}
