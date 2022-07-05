import React from 'react'
import styled from 'styled-components'
import { MOBILE_STYLE } from '../../constants'
import { ModuleWrapper } from '../common'

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: blue;
  gap: 32px;
  ${MOBILE_STYLE} {
    flex-direction: column;
  }
`

const RedBox = styled.div`
  width: 200px;
  height: 200px;
  padding: 16px;
  overflow-y: scroll;
  background-color: red;
`
const Inner = styled.div`
  width: 100%;
  display: flex;
  gap: 8px;
  flex-direction: column;
`

const Item = styled.div`
  width: 100%;
  height: 32px;
  background-color: lime;
`

export const Module2 = () => {
  const content = (
    <RedBox>
      <Inner>
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </Inner>
    </RedBox>
  )

  return (
    <ModuleWrapper>
      <Container>
        {content}
        {content}
      </Container>
    </ModuleWrapper>
  )
}
