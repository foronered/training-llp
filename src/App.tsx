import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'

import { Module1 } from './modules/Module1'
import { Module2 } from './modules/Module2'
import { Module3 } from './modules/Module3'
import { Module4 } from './modules/Module4'
import { Module5 } from './modules/Module5'
import { Module6 } from './modules/Module6'
import { Module7 } from './modules/Module7'
import { Module8 } from './modules/Module8'
import { Module9 } from './modules/Module9'
import { Module10 } from './modules/Module10'
import { Module11 } from './modules/Module11'
import { Module21 } from './modules/Module21'
import { Module22 } from './modules/Module22'
import { Module23 } from './modules/Module23'
import { Module24 } from './modules/Module24'
import { Module25 } from './modules/Module25'
import { Module26 } from './modules/Module26'

const GlobalStyle = createGlobalStyle`
  html {
    margin: 0;
    padding: 0;
    overflow-y: auto;
  }

  body {
    margin: 0;
    padding:0;
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
      <Module21 />
      <Module22 />
      <Module23 />
      <Module24 />
      <Module25 />
      <Module26 />
    </Wrapper>
  )
}
