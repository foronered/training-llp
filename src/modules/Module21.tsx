import React from 'react'
import styled from 'styled-components'
import {ModuleWrapper} from './common'


const Container = styled.div`
  width: 100%;
  height: 100%;
  
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: lime;
`

const RedBox = styled.div`
  position: relative;
  
  display: flex;
  align-items: center;
  justify-content: center;
  width: 300px; 
  height: 300px;
  background-color: red;
`

const BlackCircleTopLeft = styled.div`
  position: absolute;

  top: -8px;
  left: -8px;
  
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: black;
`

const BlackCircleBottomLeft = styled.div`
  position: absolute;

  bottom: -8px;
  left: -8px;
  
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: black;
`

const BlackCircleTopRight = styled.div`
  position: absolute;

  top: -8px;
  right: -8px;
  
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: black;
`

const BlackCircleBottomRight = styled.div`
  position: absolute;

  bottom: -8px;
  right: -8px;
  
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: black;
`

const BlackCircleCenter = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: black;
`

export const Module21 = () => {
  return (
    <ModuleWrapper>
      <Container>
        <RedBox>
          <BlackCircleTopLeft />
          <BlackCircleBottomLeft />
          <BlackCircleTopRight />
          <BlackCircleBottomRight />
          <BlackCircleCenter />
        </RedBox>
      </Container>
    </ModuleWrapper>
  )
}
