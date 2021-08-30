import React from 'react'
import styled from 'styled-components'
import { ModuleWrapper } from './common'

const Container = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  background-color: blue;
  padding: 8px 16px;
`
const RedBox = styled.div`
  flex: 1;
  height: 100%;
  background-color: red;
`

// Generally don't use percentages with flex, the ratios are better

const OrangeBox = styled.div`
  flex: 1;
  height: 100%;
  background-color: orange;
`

const GreenBox = styled.div`
  flex: 2;
  height: 100%;
  background-color: lime;
`


export const Module7 = () => {
  return (
    <ModuleWrapper>
      <Container>
        <RedBox />
        <OrangeBox />
        <GreenBox />
      </Container>
    </ModuleWrapper>
  )
}
