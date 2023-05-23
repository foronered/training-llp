import React from 'react'
import styled from 'styled-components'
import { MOBILE_BREAKPOINT } from '../constants'
import { ModuleWrapper } from './common'

const Container = styled.div`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  gap: 100px;
  background-color: lime;
`
const RedBox = styled.div`
  width: 180px;
  height: 180px;
  position: relative;
  background-color: red;
`
const BlueCircle = styled.div`
  width: 90px;
  height: 90px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: -45px;
  right: -45px;
  background-color: DodgerBlue;
`
const OrangeCircle = styled.div`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background-color: orange;
`
export const Module41 = () => {
  return (
    <ModuleWrapper>
      <Container>
        <RedBox>
          <BlueCircle>
            <OrangeCircle />
          </BlueCircle>
        </RedBox>
        <RedBox>
          <BlueCircle>
            <OrangeCircle />
          </BlueCircle>
        </RedBox>
        <RedBox>
          <BlueCircle>
            <OrangeCircle />
          </BlueCircle>
        </RedBox>
        <RedBox>
          <BlueCircle>
            <OrangeCircle />
          </BlueCircle>
        </RedBox>
      </Container>
    </ModuleWrapper>
  )
}
