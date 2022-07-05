import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: red;
  gap: 32px;
  padding: 32px 40px;
  overflow-y: scroll;
`

const Green = styled.div`
  width: 100%;
  flex: 0 0 22%;
  background-color: lime;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const SmallBlue = styled.div`
  flex: 0 0 28px;
  width: 30%;
  background-color: deepskyblue;
`
const LargeBlue = styled.div`
  background-color: deepskyblue;
  width: 100%;
  flex: 0 0 40px;
`

const Item = () => (
  <Green>
    <SmallBlue />
    <LargeBlue />
  </Green>
)

export const Red = () => {
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
      <Item />
      <Item />
    </Container>
  )
}
