import React from 'react'
import styled from 'styled-components'
import { DESKTOP_STYLE, MOBILE_STYLE, ModuleWrapper } from './common'

// here since ModuleWrapper shouldn't be edited
const Wrapper = styled.div`
  display: flex;
  height: 100%;
  width: 100%;

  ${DESKTOP_STYLE} {
    flex-direction: row;
  }
  ${MOBILE_STYLE} {
    background-color: blue;
    padding-top: 8px;
    flex-direction: column;
    align-items: center;
  }
`

const Container = styled.div`
  flex: 1;
  display: flex;
  background-color: blue;

  ${DESKTOP_STYLE} {
    flex-direction: row;
    padding: 8px 16px 0;
  }

  ${MOBILE_STYLE} {
    flex-direction: column;
    padding: 16px 0 0;
    align-items: center;
  }
`

const VioletContainer = styled.div`
  background-color: blueviolet;
  padding: 8px 8px 0;
  display: flex;
  flex-direction: column;

  ${DESKTOP_STYLE} {
    width: 100%;
    height: 100%;
  }

  ${MOBILE_STYLE} {
    width: 400px;
    flex: 1;
  }
`

const RedBox = styled.div`
  background-color: red;

  ${DESKTOP_STYLE} {
    height: 200px;
    flex: 0 0 200px;
  }

  ${MOBILE_STYLE} {
    height: 150px;
    flex: 0 0 150px;
  }
`

const Bar = styled.div`
  background-color: red;
  display: flex;
  flex-direction: column;

  ${DESKTOP_STYLE} {
    flex: 0 0 300px;
    height: 100%;
  }

  ${MOBILE_STYLE} {
    width: 200px;
    padding-bottom: 8px;
  }
`

const BlueBox = styled.div`
  background-color: blue;
  flex: 0 0 40px;
  margin: 8px 8px 0;
`

const LongRedBox = styled.div`
  width: 100%;
  flex: 0 0 144px;
  margin-bottom: 8px;
  background-color: red;
`

const BoxContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`

export const Module10 = () => {
  return (
    <ModuleWrapper>
      <Wrapper>
        <Bar>
          <BlueBox />
          <BlueBox />
          <BlueBox />
          <BlueBox />
          <BlueBox />
        </Bar>
        <Container>
          <VioletContainer>
            <LongRedBox />
            <BoxContainer>
              <RedBox />
              <RedBox />
            </BoxContainer>
          </VioletContainer>
        </Container>
      </Wrapper>
    </ModuleWrapper>
  )
}
