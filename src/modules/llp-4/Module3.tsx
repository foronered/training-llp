import React from 'react'
import styled from 'styled-components'
import { MOBILE_BREAKPOINT } from '../../constants'
import { ModuleWrapper } from '../common'
import { Black } from './Module2'

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #6cd144;
`

const Red = styled.div`
  width: 40%;
  height: 50%;
  background-color: red;
  justify-content: space-between;
  display: flex;
`

const Col = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const TopLeft = styled(Black)`
  left: -18px;
  top: -18px;
`
const TopRight = styled(Black)`
  justify-self: flex-end;
  right: -18px;
  top: -18px;
`
const BottomLeft = styled(Black)`
  align-self: flex-end;
  left: -18px;
  bottom: -18px;
`
const BottomRight = styled(Black)`
  align-self: flex-end;
  justify-self: flex-end;
  right: -18px;
  bottom: -18px;
`

const Center = styled(Black)`
  align-self: center;
`

export const Module3 = () => {
  return (
    <ModuleWrapper>
      <Container>
        <Red>
          <Col>
            <TopLeft />
            <BottomLeft />
          </Col>
          <Center />
          <Col>
            <TopRight />
            <BottomRight />
          </Col>
        </Red>
      </Container>
    </ModuleWrapper>
  )
}
