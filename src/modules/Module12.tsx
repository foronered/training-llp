import React from 'react'
import styled from 'styled-components'
import {ModuleWrapper} from './common'


const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  background-color: blue;
`

const RedBox = styled.div`
  width: 200px;
  height: 200px;
  
  padding: 16px;
  
  display: flex;
  align-items: flex-start;
  justify-content: center;
  background-color: red;
  
  overflow: scroll;
`

const GreenRectangle = styled.div`
  width: 100%;
  height: 500%;
  
  background-color: lime;
`

export const Module12 = () => {
  return (
    <ModuleWrapper>
      <Container>
        <RedBox>
          <GreenRectangle />
        </RedBox>
      </Container>
    </ModuleWrapper>
  )
}
