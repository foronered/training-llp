import React from 'react'
import styled from 'styled-components'
import { DESKTOP_STYLE } from '../constants'
import { MOBILE_STYLE } from '../constants'

// DO NOT EDIT
export const ModuleWrapper = styled.div`
  margin-bottom: 32px;
  overflow: hidden;

  ${DESKTOP_STYLE} {
    height: 700px;
    width: 1200px;
    margin-left: auto;
    margin-right: auto;
  }

  ${MOBILE_STYLE} {
    width: 100%;
    height: 500px;
  }
`
//
