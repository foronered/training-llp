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
@media (min-width: ${MOBILE_BREAKPOINT}) {
  
}

@media (max-width: ${MOBILE_BREAKPOINT}) {
  flex-direction: column;
}
`

const Half = styled.div`
  width: 100%;
  min-height: 64px;
  display: flex;
`
const RedBox = styled.div`
  width: 100%;
  background-color: red;
`
const OrangeBox = styled(RedBox)`
background-color: orange;
`
const GreenBox = styled(Half)`
height: 100%;
background-color: lime;
`

export const Module7 = () => {
  return (
    <ModuleWrapper>
      <Container>
        <Box>
          <Half>
            <RedBox/>
            <OrangeBox/>
          </Half>
          <GreenBox/>
        </Box>
      </Container>
    </ModuleWrapper>
  )
}
