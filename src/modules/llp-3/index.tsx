import React from 'react'
import styled from 'styled-components'
import { ModuleWrapper } from '../common'
import { Orange } from './Orange'
import { Blue } from './Blue'
import { Red } from './Red'
import { BlueTopRight } from './BlueTopRight'
import { Pink } from './Pink'

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`

const Left = styled.div`
  flex: 0 0 400px;
  display: flex;
  flex-direction: column;
`
const Right = styled.div`
  flex: 0 0 400px;
  display: flex;
  flex-direction: column;
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
