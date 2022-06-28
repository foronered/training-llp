import React from 'react'
import styled from 'styled-components'
import { MOBILE_BREAKPOINT } from '../../constants'
import { ModuleWrapper } from '../common'
import { Ball } from './Module1'

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #6cd144;
`

const Red = styled.div`
  width: 400px;
  height: 100px;
  background-color: red;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Blue = styled.div`
  width: 50%;
  height: 50%;
  display: flex;
  justify-content: space-between;
  background-color: dodgerblue;
`

export const Black = styled.div`
  height: 36px;
  aspect-ratio: 1;
  border-radius: 100%;
  background-color: black;
  position: relative;
`
const Left = styled(Black)`
  left: -16px;
  align-self: flex-end;
  bottom: -16px;
`
const Middle = styled(Black)`
  top: -16px;
`
const Right = styled(Black)`
  right: -16px;
  align-self: flex-end;
  bottom: -16px;
`

export const Module2 = () => {
  return (
    <ModuleWrapper>
      <Container>
        <div>
          <Ball />
          <Red>
            <Blue>
              <Left />
              <Middle />
              <Right />
            </Blue>
          </Red>
        </div>
      </Container>
    </ModuleWrapper>
  )
}
