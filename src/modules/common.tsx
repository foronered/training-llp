import React from 'react'
import styled from 'styled-components'
import { MOBILE_BREAKPOINT } from '../constants'

// DO NOT EDIT
export const ModuleWrapper = styled.div`
  height: 600px;
  margin-bottom: 32px;
  overflow: hidden;

  @media (min-width: ${MOBILE_BREAKPOINT}) {
    width: 1200px;
    margin: 0 auto;
  }

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    width: 100%;
  }
`
//
