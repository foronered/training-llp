import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  flex: 1;
  display: flex;
  background-color: hotpink;
  gap: 24px;
  padding: 32px 40px;
  overflow-y: scroll;
`

const LeftBlue = styled.div`
  background-color: deepskyblue;
  padding: 24px;
  height: 600px;
  width: 50%;
  display: flex;
`
const BlackLeft = styled.div`
  background-color: black;
  flex: 1;
`

const Right = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  gap: 16px;
`
const RightBlue = styled.div`
  background-color: deepskyblue;
  flex: 0 0 600px;
`

const BlackRight = styled.div`
  background-color: black;
  flex: 0 0 136px;
`

export const Pink = () => {
  return (
    <Container>
      <LeftBlue>
        <BlackLeft />
      </LeftBlue>
      <Right>
        <BlackRight />
        <RightBlue />
      </Right>
    </Container>
  )
}
