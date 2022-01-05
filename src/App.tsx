import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'

import { Break } from "./modules/Break";
import { Module1 } from './modules/Module1'
import { Module2 } from './modules/Module2'
import { Module3 } from './modules/Module3'
import { Module4 } from "./modules/Module4";
import { Module5 } from "./modules/Module5";
import { Module6 } from "./modules/Module6";
import { Module7 } from "./modules/Module7";
import { Module8 } from "./modules/Module8";
import { Module9 } from "./modules/Module9";
import { Module10 } from "./modules/Module10";
import { Module11 } from "./modules/Module11";
import { Module12 } from "./modules/Module12";
import { Module13 } from "./modules/Module13";
import { Module14 } from "./modules/Module14";
import { Module15 } from "./modules/Module15";
import { Module16 } from "./modules/Module16";

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
      <Module5 />
      <Module6 />
      <Module7 />
      <Module8 />
      <Module9 />
      <Module10 />
      <Module11 />
      <Break text="LLP-2" />
      <Module12 />
      <Module13 />
      <Module14 />
      <Module15 />
      <Module16 />
    </Wrapper>
  )
}
