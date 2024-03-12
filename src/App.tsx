import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'

import { Module7 } from './modules/Module7'
import { Module8 } from './modules/Module8'
import { Module9 } from './modules/Module9'
import { Module10 } from './modules/Module10'
import { Module11 } from './modules/Module11'
import { Module21 } from './modules/Module2.1'
import { Module22 } from './modules/Module2.2'
import { Module23 } from './modules/Module2.3'
import { Module24 } from './modules/Module2.4'
import { Module25 } from './modules/Module2.5'
import { Module26 } from './modules/Module2.6'
import { Module30 } from './modules/Module3.0'
import { Module41 } from './modules/Module4.1'
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
const StyledModule1 = styled(Module7)`
  margin-bottom: 20px; // Adjust the value to get the desired space
`
export const App = () => {
  return (
    <Wrapper>
      <GlobalStyle />
      <div style={{ height: '20px' }}></div>{' '}
      {/* Adjust the height for more or less space */}
      <Module7 />
      <div style={{ height: '20px' }}></div> <Module8 />
      <div style={{ height: '20px' }}></div> <Module9 />
      <div style={{ height: '20px' }}></div> <Module10 />
      <div style={{ height: '20px' }}></div> <Module11 />
      <div style={{ height: '20px' }}></div> <Module21 />
      <div style={{ height: '20px' }}></div> <Module22 />
      <div style={{ height: '20px' }}></div> <Module23 />
      <div style={{ height: '20px' }}></div> <Module24 />
      <div style={{ height: '20px' }}></div> <Module25 />
      <div style={{ height: '20px' }}></div> <Module26 />
      <div style={{ height: '20px' }}></div> <Module30 />
      <div style={{ height: '20px' }}></div> <Module41 />
    </Wrapper>
  )
}
