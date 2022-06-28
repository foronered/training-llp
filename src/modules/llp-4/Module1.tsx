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
  background-color: #6cd144;
  gap: 48px;
`

const Red = styled.div`
  background-color: red;
  width: 100px;
  aspect-ratio: 1;
`
const Blue = styled.div`
  background-color: dodgerblue;
  border-radius: 100%;
  aspect-ratio: 1;
  height: 64px;
  padding: 14px;
  margin: 0 0 auto auto;
`

const Orange = styled.div`
  height: 100%;
  width: 100%;
  background-color: orange;
  border-radius: 100%;
`
const Wrap = styled.div`
  overflow: visible;
  position: relative;
  top: -32px;
  right: -32px;
  height: 0;
`

export const Ball = () => (
  <Wrap>
    <Blue>
      <Orange />
    </Blue>
  </Wrap>
)

const Item = () => (
  <Red>
    <Ball />
  </Red>
)

export const Module1 = () => {
  return (
    <ModuleWrapper>
      <Container>
        <Item />
        <Item />
        <Item />
        <Item />
      </Container>
    </ModuleWrapper>
  )
}
