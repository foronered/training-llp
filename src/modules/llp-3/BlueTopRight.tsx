import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: blue;
  gap: 20px;
  padding: 20px 40px;
  overflow-y: scroll;
`

const Red = styled.div`
  background-color: red;
  padding: 12px 16px;
  width: 100%;
`

const Blue = styled.div`
  background-color: deepskyblue;
  padding: 8px 12px;
  width: 100%;
`

const Black = styled.div`
  background-color: black;
  height: 24px;
  aspect-ratio: 1;
`

const Item = () => (
  <Red>
    <Blue>
      <Black />
    </Blue>
  </Red>
)

export const BlueTopRight = () => {
  return (
    <Container>
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
