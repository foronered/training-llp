import React from 'react'
import styled from 'styled-components'
import {ModuleWrapper} from './common'


const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;
  background-color: lime;
`

const BlueBox = styled.div`
  width: 150px;
  height: 100px;
  background-color: rgb(71, 159, 248);
`

const RedBox = styled.div`
  width: 300px; 
  height: 200px;
  background-color: red;
`

const BlackBarContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const BlackBar = styled.div`
  flex: 0 0 40px;
  height: 50%;
  background-color: black;
`

export const Module22 = () => {
  return (
    <ModuleWrapper>
      <Container>
        <BlueBox />
        <RedBox />
        <BlackBarContainer>
          <BlackBar />
        </BlackBarContainer>
      </Container>
    </ModuleWrapper>
  )
}
