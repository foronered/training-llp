import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'

import { LLP1 } from './modules/llp-1'
import { LLP2 } from './modules/llp-2'
import { LLP3 } from './modules/llp-3'

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

  h1 {
    padding-top: 40px;
    font-family: Helvetica;
    font-size: 45px;
    text-align: center;
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
      <LLP1 />
      <LLP2 />
      <LLP3 />
    </Wrapper>
  )
}
