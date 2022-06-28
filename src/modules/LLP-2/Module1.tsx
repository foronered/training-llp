import React from 'react'
import styled from 'styled-components'
import { DesktopStyle, MobileStyle, MOBILE_BREAKPOINT } from '../../constants'
import { ModuleWrapper } from '../common'

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: blue;
`

const ContentBox = styled.div`
  flex: 0 0 256px;
  height: 70%;
  padding: 16px;
  background-color: firebrick;

  overflow-y: auto;
`

const Content = styled.div`
  width: 100%;
  height: 1028px;

  ${DesktopStyle} {
    background-color: green;
  }
  ${MobileStyle} {
    background-color: orange;
  }
`

export const Module1 = () => {
  return (
    <ModuleWrapper>
      <Container>
        <ContentBox>
          <Content />
        </ContentBox>
      </Container>
    </ModuleWrapper>
  )
}
