import React from 'react'
import styled from 'styled-components'
import {ModuleWrapper} from './common'


const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
  background-color: lime;
`

const RedBox = styled.div`
  position: relative;
  width: 150px; 
  height: 150px;
  background-color: red;
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

export const Module19 = () => {
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
