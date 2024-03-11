import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'

import { Module1 } from './modules/Module1'
import { Module7 } from './modules/Module7'
import { Module8 } from './modules/Module8'
import { Module9 } from './modules/Module9'
import { Module10 } from './modules/Module10'
import { Module11 } from './modules/Module11'
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
const StyledModule1 = styled(Module1)`
  margin-bottom: 20px; // Adjust the value to get the desired space
`
export const App = () => {
  return (
    <Wrapper>
      <GlobalStyle />
      <Module1 />
      <div style={{ height: '20px' }}></div>{' '}
      {/* Adjust the height for more or less space */}
      <Module7 />
      <div style={{ height: '20px' }}></div> <Module8 />
      <div style={{ height: '20px' }}></div> <Module9 />
      <div style={{ height: '20px' }}></div> <Module10 />
      <div style={{ height: '20px' }}></div> <Module11 />
    </Wrapper>
  )
}
