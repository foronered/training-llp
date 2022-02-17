import React from 'react'
import { DESKTOP_STYLE, MOBILE_STYLE, ModuleWrapper } from './common'
import styled from 'styled-components'

const BlueContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  background-color: blue;
  overflow-y: scroll;

  ${DESKTOP_STYLE} {
    flex-direction: row;
    justify-content: space-evenly;
  }
  ${MOBILE_STYLE} {
    flex-direction: column;
  }
`

const RedBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  background-color: red;
  overflow-y: scroll;

  ${DESKTOP_STYLE} {
    flex: 0 0 350px;
    height: 350px;
  }

  ${MOBILE_STYLE} {
    flex: 0 0 350px;
    width: 350px;
    margin: 16px 0;
  }
`

const GreenContent = styled.div`
  background-color: lime;
  overflow-y: scroll;
  width: 100%;
  flex: 0 0 50px;
  margin-bottom: 8px;
`

const GreenBoxesArray = [...Array(12)].map(() => <GreenContent />)

export const Module13 = () => {
  return (
    <ModuleWrapper>
      <BlueContainer>
        <RedBox>{GreenBoxesArray}</RedBox>
        <RedBox>{GreenBoxesArray}</RedBox>
      </BlueContainer>
    </ModuleWrapper>
  )
}
