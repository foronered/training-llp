import React from 'react'
import styled from 'styled-components'
import { MOBILE_BREAKPOINT } from '../../constants'
import { ModuleWrapper } from '../common'

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: green;
`

const HelperBox1 = styled.div`
  display: flex;
  gap: 64px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const RedBox = styled.div`
  flex: 0 0 200px;
  width: 280px;

  background-color: firebrick;
  position: relative;
`
const BlueBox = styled.div`
  flex: 0 0 120px;
  width: 160px;
  background-color: #6161db;
`

const BlackConnection = styled.div`
  position: absolute;
  width: 32px;
  height: 320px;
  left: calc(50% - 16px);
  bottom: 15%;
  background-color: black;
`

export const Module4 = () => {
  return (
    <ModuleWrapper>
      <Container>
        <HelperBox1>
          <BlueBox />
          <RedBox>
            <BlackConnection />
          </RedBox>
        </HelperBox1>
      </Container>
    </ModuleWrapper>
  )
}
