import React from 'react'
import styled from 'styled-components'
import { DESKTOP_STYLE, MOBILE_BREAKPOINT, MOBILE_STYLE } from '../constants'

// DO NOT EDIT
export const ModuleWrapper = styled.div`
  height: 600px;
  overflow: hidden;

  ${DESKTOP_STYLE} {
    width: 1200px;
    margin: 0 auto 32px auto;
  }

  ${MOBILE_STYLE} {
    width: 100%;
    margin-bottom: 32px;
  }
`
//
