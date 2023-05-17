import React from 'react'
import styled from 'styled-components'
import { MOBILE_BREAKPOINT } from '../constants'
import { ModuleWrapper } from './common'

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: blue;
  padding: 8px 16px;
`

const GreenBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  background-color: #60d937;
`

const RedBox = styled.div`
  flex: 0 0 300px;
  background-color: red;
`

export const Module6 = () => {
  return (
    <ModuleWrapper>
      <Container>
        <GreenBox>
          <RedBox />
        </GreenBox>
      </Container>
    </ModuleWrapper>
  )
}
