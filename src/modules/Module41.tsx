import React from 'react'
import styled from 'styled-components'
import { DESKTOP_STYLE, MOBILE_BREAKPOINT, MOBILE_STYLE } from '../constants'
import { ModuleWrapper } from './common'

const Container = styled.div`
  width: 100%;
  height: 100%;
  gap: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: green;
  padding: 32px;
  ${MOBILE_STYLE} {
    flex-direction: column;
    gap: 32px;
  }
`

const RedBox = styled.div`
  width: 150px;
  aspect-ratio: 1;
  position: relative;
  background-color: red;
`
const BlueCircle = styled.div`
  width: 80px;
  aspect-ratio: 1;
  border-radius: 50%;
  position: absolute;
  top: -40px;
  right: -40px;
  padding: 16px;
  justify-content: center;
  align-items: center;
  background-color: blue;
`
const OrangeCircle = styled.div`
  width: 100%;
  aspect-ratio: 1;
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
