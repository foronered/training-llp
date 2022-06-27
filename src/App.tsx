import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'

import { Module1 } from './modules/llp-1/Module1'
import { Module2 } from './modules/llp-1/Module2'
import { Module3 } from './modules/llp-1/Module3'
import { Module4 } from './modules/llp-1/Module4'
import { Module5 } from './modules/llp-1/Module5'
import { Module6 } from './modules/llp-1/Module6'
import { Module7 } from './modules/llp-1/Module7'
import { Module8 } from './modules/llp-1/Module8'
import { Module9 } from './modules/llp-1/Module9'
import { Module10 } from './modules/llp-1/Module10'
import { Module11 } from './modules/llp-1/Module11'

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
      <Module5 />
      <Module6 />
      <Module7 />
      <Module8 />
      <Module9 />
      <Module10 />
      <Module11 />
    </Wrapper>
  )
}
