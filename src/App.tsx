import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'

import { Module1 } from './modules/LLP-4/Module1'
import { Module2 } from './modules/LLP-4/Module2'
import { Module3 } from './modules/LLP-4/Module3'
import { Module4 } from './modules/LLP-4/Module4'

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
      <Module1 />
      <Module2 />
      <Module3 />
      <Module4 />
    </Wrapper>
  )
}
