import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import { Module2 } from './Module2'
import { Module1 } from './Module1'
import { Module3 } from './Module3'
import { Module4 } from './Module4'
import { Module5 } from './Module5'
import { Module6 } from './Module6'

export const LLP2 = () => {
  return (
    <div style={{ paddingBottom: '1000px' }}>
      <h1>LLP 2</h1>
      <Module1 />
      <Module2 />
      <Module3 />
      <Module4 />
      <Module5 />
      <Module6 />
    </div>
  )
}
