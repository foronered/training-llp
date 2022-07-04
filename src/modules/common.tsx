import React from 'react'
import styled from 'styled-components'
import { MOBILE_BREAKPOINT } from '../constants'

// DO NOT EDIT
export const ModuleWrapper = styled.div`
  margin-bottom: 32px;
  overflow: hidden;

  @media (min-width: ${MOBILE_BREAKPOINT}) {
    height: 700px;
    width: 1200px;
    margin-left: auto;
    margin-right: auto;
  }

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    width: 100%;
    height: 500px;
  }
`
//
