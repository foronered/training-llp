import React from 'react'
import styled from 'styled-components'
import {ModuleWrapper} from './common'


const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: lime;
`

const RedBox = styled.div`
  position: relative;
  width: 300px; 
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px 32px;
  background-color: red;
`

const BlueBox = styled.div`
  position: relative;
  flex: 1 0 auto;
  height: 100%;
  background-color: rgb(71, 159, 248);
`

const BlackCircle1 = styled.div`
  position: absolute;
  bottom: -8px;
  left: -8px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: black;
`

const BlackCircle2 = styled.div`
  position: absolute;
  top: -8px;
  left: 110px; // 300px - 64px (padding) - 8px = 110px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: black;
`

const BlackCircle3 = styled.div`
  position: absolute;
  bottom: -8px;
  right: -8px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: black;
`

const BlueCircle = styled.div`
  position: absolute;
  top: -24px;
  right: -24px;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(71, 159, 248);
`

const OrangeCircle = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: orange;
`

export const Module20 = () => {
  return (
    <ModuleWrapper>
      <Container>
        <RedBox>
          <BlueBox>
            <BlackCircle1 />
            <BlackCircle2 />
            <BlackCircle3 />
          </BlueBox>
          <BlueCircle>
            <OrangeCircle />
          </BlueCircle>
        </RedBox>
      </Container>
    </ModuleWrapper>
  )
}
