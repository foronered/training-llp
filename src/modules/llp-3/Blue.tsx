import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 32px 48px;
  gap: 32px;
  background-color: blue;
  overflow-y: scroll;
`

const Red = styled.div`
  background-color: red;
  flex: 0 0 128px;
  display: flex;
  justify-content: space-between;
  gap: 16px;
  padding: 16px 48px;
`

const Green = styled.div`
  flex: 1;
  background-color: lime;
  display: flex;
  padding: 16px 8px;
`
const Black = styled.div`
  flex: 1;
  background-color: black;
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
