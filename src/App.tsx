import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'

import {Break} from './modules/Break'
import { Module1 } from './modules/Module1'
import { Module2 } from './modules/Module2'
import { Module3 } from './modules/Module3'
import { Module4 } from './modules/Module4'

const GlobalStyle = createGlobalStyle`
  html {
    margin: 0;
    padding: 0;
    overflow-y: auto;
  }

  body {
    margin: 0;
    padding: 0;
  }

  * {
    box-sizing: border-box;
  }
`

const Wrapper = styled.div`
  padding: 32px;
`

export const App = () => {
  return (
    <Wrapper>
      <GlobalStyle />
        <Break text="LLP-1" />
      <Module1 />
      <Module2 />
      <Module3 />
      <Module4 />
    </Wrapper>
  )
}
