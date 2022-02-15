import React from 'react'
import styled from 'styled-components'
import {ModuleWrapper} from './common'

export interface BreakProps {
    text: string
}

const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  
  font-size: 36px;
  font-family: sans-serif;
`

export const Break = (props: BreakProps) => {
    return (
        <ModuleWrapper>
            <Container>
                {props.text}
            </Container>
        </ModuleWrapper>
    )
}
