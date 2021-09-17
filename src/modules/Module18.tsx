import React from 'react'
import styled from 'styled-components'
import { ModuleWrapper } from './common'

const Container = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  background-color: lightgreen;
  align-items: center;
  justify-content: space-evenly;
`

const Count = 4

const RedSquare = styled.div`
  width: 128px;
  height: 128px;
  background-color: red;
  position: relative;
`

const BlueCircle = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background-color: lightblue;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;¨
  top: 0;
  right: 0;
  margin: -32px;
`

const OrangeCircle = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: orange;
`

export const Module18 = () => {
  return (
    <ModuleWrapper>
      <p>LLP-4</p>
      <Container>
        {[...Array(Count)].map((_, i) => (
          <RedSquare>
            <BlueCircle>
              <OrangeCircle />
            </BlueCircle>
          </RedSquare>
        ))}
      </Container>
    </ModuleWrapper>
  )
}
