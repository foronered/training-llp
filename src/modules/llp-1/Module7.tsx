import React from 'react'
import styled from 'styled-components'
import { DESKTOP_STYLE, MOBILE_STYLE } from '../../constants'
import { ModuleWrapper } from '../common'

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  padding: 8px 16px;
  background-color: blue;
`

const Box = styled.div`
  flex: 1;
  display: flex;
  ${MOBILE_STYLE} {
    flex-direction: column;
  }
`

const Half = styled.div`
  min-height: 100px;
  display: flex;
  ${DESKTOP_STYLE} {
    flex: 1;
  }
  ${MOBILE_STYLE} {
    flex: 0 0 100px;
  }
`
const RedBox = styled.div`
  flex: 1;
  background-color: red;
`
const OrangeBox = styled.div`
  flex: 1;
  background-color: orange;
`
const GreenBox = styled.div`
  flex: 1;
  display: flex;
  height: 100%;
  background-color: lime;
`

export const Module7 = () => {
  return (
    <ModuleWrapper>
      <Container>
        <Box>
          <Half>
            <RedBox />
            <OrangeBox />
          </Half>
          <GreenBox />
        </Box>
      </Container>
    </ModuleWrapper>
  )
}
