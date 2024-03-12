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
  background-color: #4ac04a;
  gap: 64px;
`

const RedBox = styled.div`
  position: relative;
  background-color: red;
  width: 100px;
  height: 100px;
`
const Dot = styled.div`
  position: absolute;
  width: 50px; // size of the dot
  height: 50px; // size of the dot
  background-color: blue; // color of the dot
  border-radius: 50%; // makes the square a circle
  top: 0%; // position from the top inside the container
  left: 100%; // position from the left inside the container
  transform: translate(-50%, -50%); // centers the dot in the container
`

const DotInside = styled.div`
  position: absolute;
  width: 30px; // size of the dot
  height: 30px; // size of the dot
  background-color: yellow; // color of the dot
  border-radius: 50%; // makes the square a circl
  top: 50%; // position from the top inside the container
  left: 50%;
  transform: translate(-50%, -50%); // centers the dot in the container
`

export const Module41 = () => {
  return (
    <ModuleWrapper>
      <Container>
        <RedBox>
          <Dot>
            <DotInside />
          </Dot>
        </RedBox>
        <RedBox>
          <Dot>
            <DotInside />
          </Dot>
        </RedBox>
        <RedBox>
          <Dot>
            <DotInside />
          </Dot>
        </RedBox>
        <RedBox>
          <Dot>
            <DotInside />
          </Dot>
        </RedBox>
      </Container>
    </ModuleWrapper>
  )
}
// border radius hoch
// position absolute and pos relative
