import React from 'react'
import styled from 'styled-components'
import { MOBILE_BREAKPOINT } from '../constants'
import { ModuleWrapper } from './common'

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: green;
`

const RedBox = styled.div`
  height: 350px;
  width: 550px;
  position: relative;
  background-color: red;
`

const BlackCircle = styled.div`
  width: 40px;
  aspect-ratio: 1;
  border-radius: 50%;
  position: absolute;
  background-color: black;
`

export const Module43 = () => {
  return (
    <ModuleWrapper>
      <Container>
        <RedBox>
          <BlackCircle
            style={{
              bottom: '-20px',
              right: '-20px',
            }}
          />
          <BlackCircle
            style={{
              bottom: '-20px',
              left: '-20px',
            }}
          />
          <BlackCircle
            style={{
              top: '-20px',
              left: '-20px',
            }}
          />
          <BlackCircle
            style={{
              top: '-20px',
              right: '-20px',
            }}
          />
          <BlackCircle
            style={{
              top: 'calc(50% - 20px)',
              left: 'calc(50% - 20px)',
            }}
          />
        </RedBox>
      </Container>
    </ModuleWrapper>
  )
}
