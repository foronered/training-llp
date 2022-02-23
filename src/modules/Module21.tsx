import React from 'react'
import { ModuleWrapper } from './common'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  background-color: lime;
  justify-content: center;
  align-items: center;
`

const RedRectangle = styled.div`
  background-color: red;
  height: 320px;
  flex: 0 0 400px;
  position: relative;
`

const BlackDot = styled.div`
  height: 32px;
  width: 32px;
  border-radius: 16px;
  position: absolute;
  background-color: black;
`

export const Module21 = () => {
  return (
    <ModuleWrapper>
      <Container>
        <RedRectangle>
          <BlackDot style={{ top: -16, left: -16 }} />
          <BlackDot style={{ top: -16, right: -16 }} />
          <BlackDot
            style={{ top: 0, right: 0, bottom: 0, left: 0, margin: 'auto' }}
          />
          <BlackDot style={{ bottom: -16, right: -16 }} />
          <BlackDot style={{ bottom: -16, left: -16 }} />
        </RedRectangle>
      </Container>
    </ModuleWrapper>
  )
}
