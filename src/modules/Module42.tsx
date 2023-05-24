import React from 'react'
import styled from 'styled-components'
import { DESKTOP_STYLE, MOBILE_BREAKPOINT, MOBILE_STYLE } from '../constants'
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
  width: 700px;
  height: 180px;
  position: relative;
  align-items: center;
  justify-content: center;
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
const BlueBox = styled.div`
  width: 500px;
  height: 45px;
  position: absolute;
  top: 50%;
  right: 50%;
  transform: translate(50%, -50%);
  background-color: DodgerBlue;
`
const BlackCircle = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  position: absolute;
  background-color: black;
`
export const Module42 = () => {
  return (
    <ModuleWrapper>
      <Container>
        <RedBox>
          <BlueCircle>
            <OrangeCircle />
          </BlueCircle>
          <BlueBox>
            <BlackCircle
              style={{
                bottom: '-20px',
                left: '-20px',
              }}
            />
            <BlackCircle
              style={{
                bottom: '-20px',
                right: '-20px',
              }}
            />
            <BlackCircle
              style={{
                top: '-20px',
                left: 'calc(50% - 20px)',
              }}
            />
          </BlueBox>
        </RedBox>
      </Container>
    </ModuleWrapper>
  )
}
