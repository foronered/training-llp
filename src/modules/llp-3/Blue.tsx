import React from 'react'
import styled from 'styled-components'
import { MOBILE_BREAKPOINT } from '../../constants'
import { ModuleWrapper } from '../common'

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  align-items: center;
  justify-content: center;
  padding: 32px 48px;
  background-color: blue;
  overflow-y: scroll;
`

const Red = styled.div`
  background-color: red;
  padding: 24px 48px;
  width: 100%;
  height: 128px;
  display: flex;
  justify-content: space-between;
  gap: 16px;
`

const Green = styled.div`
  height: 100%;
  width: 100%;
  padding: 18px;
  background-color: lime;
`
const Black = styled.div`
  background-color: black;
  height: 100%;
  width: 100%;
`
const Item = () => (
  <Red>
    <Green />
    <Green>
      <Black />
    </Green>
    <Green />
  </Red>
)

export const Blue = () => {
  return (
    <Container>
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
    </Container>
  )
}
