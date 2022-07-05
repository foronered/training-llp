import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  background-color: hotpink;
  grid-gap: 20px;
  grid-template-columns: auto auto;
  grid-template-rows: 156px auto;
  padding: 32px 40px;
  overflow-y: scroll;
`

const Blue = styled.div`
  background-color: deepskyblue;
  width: 100%;
  padding: 24px;
  height: 700px;
`
const FirstBlue = styled.div`
  background-color: deepskyblue;
  width: 100%;
  padding: 24px;
  height: 700px;
  grid-row-start: span 2;
`
const Black = styled.div`
  background-color: black;
  width: 100%;
  height: 100%;
`

export const Pink = () => {
  return (
    <Container>
      <FirstBlue>
        <Black />
      </FirstBlue>
      <Black />
      <Blue />
    </Container>
  )
}
