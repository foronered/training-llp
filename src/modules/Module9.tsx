import React from 'react'
import styled from 'styled-components'
import { DESKTOP_STYLE, MOBILE_STYLE, ModuleWrapper } from './common'

// here since ModuleWrapper shouldn't be edited
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
  display: flex;
  background-color: blue;

  ${DESKTOP_STYLE} {
    flex-direction: row;
    padding: 8px 16px 0;
  }
  ${MOBILE_STYLE} {
    flex-direction: column;
    padding: 16px 0;
    align-items: center;
  }
`

const VioletContainer = styled.div`
  ${DESKTOP_STYLE} {
    width: 100%;
    height: 100%;
    padding: 8px;
    background-color: blueviolet;
    display: grid;
    grid-template-columns: auto auto auto;
    grid-gap: 8px;
  }

  ${MOBILE_STYLE} {
    background-color: transparent;
  }
`

const RedBox = styled.div`
  background-color: red;

  ${DESKTOP_STYLE} {
    height: 100%;
    width: 100%;
  }

  ${MOBILE_STYLE} {
    margin: 16px 0;
    width: 150px;
    height: 150px;
  }
`

const Bar = styled.div`
  background-color: red;

  ${DESKTOP_STYLE} {
    flex: 0 0 300px;
    height: 100%;
  }

  ${MOBILE_STYLE} {
    width: 100%;
    flex: 0 0 100px;
  }
`

export const Module9 = () => {
  return (
    <ModuleWrapper>
      <Wrapper>
        <Bar />
        <BlueContainer>
          <VioletContainer>
            <RedBox />
            <RedBox />
            <RedBox />
            <RedBox />
            <RedBox />
            <RedBox />
          </VioletContainer>
        </BlueContainer>
      </Wrapper>
    </ModuleWrapper>
  )
}
