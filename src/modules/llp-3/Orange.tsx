import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  background-color: orange;
  padding: 24px 48px;
  overflow-y: scroll;
  overflow-x: hidden;
`

const Red = styled.div`
  background-color: red;
  flex: 0 0 90px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 12px;
  overflow: hidden;
`

const OrangeSquare = styled.div`
  flex: 0 1 56px;
  aspect-ratio: 1;
  padding: 12px;
  background-color: orange;
`

const BlueSquare = styled.div`
  flex: 1;
  aspect-ratio: 1;
  background-color: dodgerblue;
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
  flex: 1;
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
