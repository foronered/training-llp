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
import { Module31 } from './modules/Module31'
import { Module41 } from './modules/Module41'
import { Module42 } from './modules/Module42'
import { Module43 } from './modules/Module43'
import { Module44 } from './modules/Module44'

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
  gap: 200px;
  background-color: black;
`

export const App = () => {
  return (
    <Wrapper>
      <GlobalStyle />
      <p>Module 1</p>
      <Module1 />
      <p>Module 2</p>
      <Module2 />
      <p>Module 3</p>
      <Module3 />
      <p>Module 4</p>
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
      <Module31 />
      <Module41 />
      <Module42 />
      <Module43 />
      <Module44 />
    </Wrapper>
  )
}
