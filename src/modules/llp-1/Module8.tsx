import React from 'react'
import styled from 'styled-components'
import { MOBILE_STYLE } from '../../constants'
import { ModuleWrapper } from '../common'

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  background-color: blue;
  ${MOBILE_STYLE} {
    flex-direction: column;
    align-items: stretch;
  }
`

const RedBox = styled.div`
  width: 300px;
  min-height: 100px;
  background-color: red;
  ${MOBILE_STYLE} {
    width: 100%;
  }
`
const GreenBox = styled.div`
  height: 100%;
  min-width: calc(100% - 332px);
  margin: 8px 16px 0;
  background-color: lime;
`

export const Module8 = () => {
  return (
    <ModuleWrapper>
      <Container>
        <RedBox />
        <GreenBox />
      </Container>
    </ModuleWrapper>
  )
}
