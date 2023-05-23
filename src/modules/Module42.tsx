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
  background-color: green;
`

const RedBox = styled.div`
  height: 150px;
  width: 550px;
  position: relative;
  background-color: red;
`
const BlueBox = styled.div`
  height: 80px;
  width: 300px;
  position: absolute;
  top: 50%;
  right: 50%;
  transform: translate(50%, -50%);
  background-color: lightskyblue;
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
const BlackCircle = styled.div`
  width: 40px;
  aspect-ratio: 1;
  border-radius: 50%;
  position: absolute;
  background-color: black;
`

export const Module42 = () => {
  return (
    <ModuleWrapper>
      <Container>
        <RedBox>
          <BlueBox>
            <BlackCircle
              style={{
                bottom: '-20px',
                right: '-20px',
              }}
            />
            <BlackCircle
              style={{
                bottom: '-20px',
                left: '-20px',
              }}
            />
            <BlackCircle
              style={{
                top: '-20px',
                left: 'calc(50% - 20px)',
              }}
            />
          </BlueBox>
          <BlueCircle>
            <OrangeCircle />
          </BlueCircle>
        </RedBox>
      </Container>
    </ModuleWrapper>
  )
}
