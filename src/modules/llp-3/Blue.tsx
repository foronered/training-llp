import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 32px 0;
  gap: 32px;
  align-items: center;
  background-color: blue;
  overflow-y: scroll;
`

const Red = styled.div`
  background-color: red;
  width: 80%;
  flex: 0 0 128px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 16px;
  padding: 0 48px;
`

const Green = styled.div`
  flex: 1 0 auto;
  height: 80px;
  background-color: lime;
  display: flex;
  align-items: center;
  justify-content: center;
`
const Black = styled.div`
  background-color: black;
  height: 60%;
  width: 60%;
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
