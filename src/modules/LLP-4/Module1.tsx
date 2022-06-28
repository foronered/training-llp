import React from 'react'
import styled from 'styled-components'
import { MOBILE_BREAKPOINT } from '../../constants'
import { ModuleWrapper } from '../common'

const Container = styled.div`
  width: 100%;
  height: 100%;
  gap: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: green;
`

const RedBox = styled.div`
  flex: 0 0 96px;
  height: 96px;

  background-color: firebrick;
  position: relative;
`

const Notification = styled.div`
  height: 64px;
  width: 64px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #6b6be3;

  position: absolute;
  top: -32px;
  right: -32px;
`
const InnerCircle = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  background-color: orange;
`

export const Module1 = () => {
  return (
    <ModuleWrapper>
      <Container>
        <RedBox>
          <Notification>
            <InnerCircle />
          </Notification>
        </RedBox>
        <RedBox>
          <Notification>
            <InnerCircle />
          </Notification>
        </RedBox>
        <RedBox>
          <Notification>
            <InnerCircle />
          </Notification>
        </RedBox>
        <RedBox>
          <Notification>
            <InnerCircle />
          </Notification>
        </RedBox>
      </Container>
    </ModuleWrapper>
  )
}
