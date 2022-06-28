import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import { ModuleWrapper } from '../common'
import { Orange } from './Orange'
import { Blue } from './Blue'
import { Red } from './Red'
import { BlueTopRight } from './BlueTopRight'
import { Pink } from './Pink'

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 37% 26% 37%;
  grid-template-rows: 100%;
  overflow: hidden;
`

const Left = styled.div`
  display: grid;
  grid-template-rows: 50% 50%;
`
const Right = styled.div`
  display: grid;
  grid-template-rows: 26% auto;
`

export const LLP3 = () => {
  return (
    <>
      <h1>LLP 3</h1>
      <ModuleWrapper>
        <Container>
          <Left>
            <Orange />
            <Blue />
          </Left>
          <Red />
          <Right>
            <BlueTopRight />
            <Pink />
          </Right>
        </Container>
      </ModuleWrapper>
    </>
  )
}
