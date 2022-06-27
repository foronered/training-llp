import React from 'react'
import styled from 'styled-components'
import { MOBILE_BREAKPOINT } from '../../constants'
import { ModuleWrapper } from '../common'

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content:center;
  background-color: blue;
`

const Box = styled.div`
width: calc(100% - 32px);
height: calc(100% - 16px);
display: flex;
align-items: center;
justify-content:center;
background-color: red;

@media (min-width: ${MOBILE_BREAKPOINT}) {
}

@media (max-width: ${MOBILE_BREAKPOINT}) {
  flex-direction: column;
}
`
const GreenBox = styled.div`
width: 64px;
height: 64px;
background-color: lime;

`
const BlueBox = styled.div`
width: 256px;
height: 64px;
background-color: dodgerblue;

`
const OrangeBox = styled.div`
width: 128px;
height: 64px;
background-color: orange;

`

export const Module5 = () => {
  return (
    <ModuleWrapper>
      <Container>
        <Box>
          <GreenBox/>
          <BlueBox/>
          <OrangeBox/>
        </Box>
      </Container>
    </ModuleWrapper>
  )
}
