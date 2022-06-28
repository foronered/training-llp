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
  flex: 0 0 440px;
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
  top: -25%;
  right: -7%;
`
const InnerCircle = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  background-color: orange;
`

const HelperBox = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const BlueBox = styled.div`
  height: 48px;
  flex: 0 0 240px;
  background-color: #6b6be3;

  position: relative;
`
const BlackDot = styled.div`
  border-radius: 50%;
  height: 32px;
  width: 32px;
  position: absolute;
  background-color: black;
`

export const Module2 = () => {
  return (
    <ModuleWrapper>
      <Container>
        <RedBox>
          <Notification>
            <InnerCircle />
          </Notification>
          <HelperBox>
            <BlueBox>
              <BlackDot style={{ bottom: '-16px', left: '-16px' }} />
              <BlackDot style={{ right: 'calc(50% - 16px)', top: '-16px' }} />
              <BlackDot style={{ bottom: '-16px', right: '-16px' }} />
            </BlueBox>
          </HelperBox>
        </RedBox>
      </Container>
    </ModuleWrapper>
  )
}
