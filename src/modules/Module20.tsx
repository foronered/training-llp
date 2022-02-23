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
  flex: 0 0 480px;
  height: 120px;
  background-color: red;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`

const OuterCircle = styled.div`
  position: absolute;
  top: -36px;
  right: -36px;
  background-color: dodgerblue;
  width: 72px;
  height: 72px;
  border-radius: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const InnerCircle = styled.div`
  background-color: orange;
  height: 40px;
  flex: 0 0 40px;
  border-radius: 20px;
`

const BlueRectangle = styled.div`
  flex: 0 0 280px;
  height: 64px;
  background-color: dodgerblue;
  position: relative;
`

const BlackCircle = styled.div`
  height: 32px;
  width: 32px;
  border-radius: 16px;
  position: absolute;
  background-color: black;
`

export const Module20 = () => {
  return (
    <ModuleWrapper>
      <Container>
        <RedRectangle>
          <BlueRectangle>
            <BlackCircle style={{ bottom: -16, left: -16 }} />
            <BlackCircle
              style={{
                top: -16,
                marginLeft: 'auto',
                marginRight: 'auto',
                left: 0,
                right: 0,
              }}
            />
            <BlackCircle style={{ bottom: -16, right: -16 }} />
          </BlueRectangle>
          <OuterCircle>
            <InnerCircle />
          </OuterCircle>
        </RedRectangle>
      </Container>
    </ModuleWrapper>
  )
}
