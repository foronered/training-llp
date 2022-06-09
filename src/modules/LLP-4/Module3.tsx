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
  flex: 0 0 400px;
  height: 280px;

  background-color: firebrick;
  position: relative;
  justify-content: center;
  align-items: center;
  display: flex;
`

const BlackDot = styled.div`
  border-radius: 50%;
  height: 32px;
  width: 32px;
  position: absolute;
  background-color: black;
`

export const Module3 = () => {
  return (
    <ModuleWrapper>
      <Container>
        <RedBox>
          <BlackDot style={{ top: '-5%', left: '-4%' }} />
          <BlackDot style={{ top: '-5%', right: '-4%' }} />
          <BlackDot style={{ bottom: '-5%', left: '-4%' }} />
          <BlackDot style={{ bottom: '-5%', right: '-4%' }} />
          <BlackDot style={{ position: 'relative' }} />
        </RedBox>
      </Container>
    </ModuleWrapper>
  )
}
