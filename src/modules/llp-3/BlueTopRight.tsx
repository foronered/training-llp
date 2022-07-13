import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  flex: 0 0 200px;
  display: flex;
  flex-direction: column;
  background-color: blue;
  gap: 20px;
  padding: 20px 40px;
  overflow-y: scroll;
`

const Red = styled.div`
  background-color: red;
  padding: 12px 16px;
  flex: 1;
  display: flex;
`

const Blue = styled.div`
  background-color: deepskyblue;
  padding: 8px 12px;
  flex: 1;
  display: flex;
`

const Black = styled.div`
  background-color: black;
  flex: 0 0 24px;
  height: 24px;
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
