import React from 'react'
import styled from 'styled-components'
import { DESKTOP_STYLE, MOBILE_STYLE } from '../../constants'
import { ModuleWrapper } from '../common'

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: blue;
`

const Box = styled.div`
  width: calc(100% - 32px);
  height: calc(100% - 16px);
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: red;

  ${DESKTOP_STYLE} {
  }

  ${MOBILE_STYLE} {
    flex-direction: column;
  }
`
const GreenBox = styled.div`
  // todo: use flex shorthand
  // BUT: how to handle mobile breakpoint then? because if the flex direction changes, everything falls apart.
  // --> do I need to specify each style for mobile / desktop individually?
  ${DESKTOP_STYLE} {
    flex: 0 0 64px;
    height: 64px;
  }

  ${MOBILE_STYLE} {
    flex: 0 0 64px;
    width: 64px;
  }
  background-color: lime;
`
const BlueBox = styled.div`
  ${DESKTOP_STYLE} {
    flex: 0 0 256px;
    height: 64px;
  }
  ${MOBILE_STYLE} {
    flex: 0 0 64px;
    width: 256px;
  }
  background-color: dodgerblue;
`
const OrangeBox = styled.div`
  width: 128px;
  height: 64px;
  background-color: orange;
`

export const Module5 = () => {
  return (
    <ModuleWrapper>
      <Container>
        <Box>
          <GreenBox />
          <BlueBox />
          <OrangeBox />
        </Box>
      </Container>
    </ModuleWrapper>
  )
}
