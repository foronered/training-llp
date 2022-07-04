import React from 'react'
import styled from 'styled-components'
import { MOBILE_BREAKPOINT } from '../../constants'
import { ModuleWrapper } from '../common'

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  align-items: center;
  justify-content: center;
  background-color: orange;
  padding: 24px 48px;
  overflow-y: scroll;
`

const Red = styled.div`
  background-color: red;
  height: 90px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 12px;
`

const BlueSquare = styled.div`
  height: 100%;
  aspect-ratio: 1;
  background-color: dodgerblue;
`

const OrangeSquare = styled.div`
  height: 100%;
  aspect-ratio: 1;
  padding: 12px;
  background-color: orange;
`
const Square = () => (
  <OrangeSquare>
    <BlueSquare />
  </OrangeSquare>
)

const Group = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  height: 100%;
  width: 100%;
`

const Item = () => (
  <Red>
    <Group>
      <Square />
      <Square />
    </Group>
    <Square />
  </Red>
)

export const Orange = () => {
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
