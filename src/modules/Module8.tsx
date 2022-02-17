import React from 'react'
import styled from 'styled-components'
import { DESKTOP_STYLE, MOBILE_STYLE, ModuleWrapper } from './common'

const Wrapper = styled.div`
  display: flex;
  height: 100%;
  width: 100%;

  ${DESKTOP_STYLE} {
    flex-direction: row;
  }
  ${MOBILE_STYLE} {
    flex-direction: column;
  }
`

const BlueContainer = styled.div`
  flex: 1;
  background-color: blue;

  ${DESKTOP_STYLE} {
    padding: 8px 16px 0;
  }
  ${MOBILE_STYLE} {
    padding: 50px 75px 0;
  }
`

const GreenContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: greenyellow;
`

const Bar = styled.div`
  background-color: red;

  ${DESKTOP_STYLE} {
    width: 300px;
    height: 100%;
  }

  ${MOBILE_STYLE} {
    width: 100%;
    height: 100px;
  }
`

export const Module8 = () => {
  return (
    <ModuleWrapper>
      <Wrapper>
        <Bar />
        <BlueContainer>
          <GreenContainer />
        </BlueContainer>
      </Wrapper>
    </ModuleWrapper>
  )
}
