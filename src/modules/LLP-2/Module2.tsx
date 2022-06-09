import React from 'react'
import styled from 'styled-components'
import { DesktopStyle, MobileStyle, MOBILE_BREAKPOINT } from '../../constants'
import { ModuleWrapper } from '../common'

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;

  background-color: blue;
  ${DesktopStyle} {
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 128px;
  }
  ${MobileStyle} {
    flex-direction: column;
    align-items: center;
    padding: 32px;
    gap: 32px;
  }
`

const ArticleBox = styled.div`
  padding: 16px;

  display: flex;
  flex-direction: column;
  gap: 8px;
  background-color: firebrick;

  overflow-y: auto;

  ${DesktopStyle} {
    flex: 0 0 256px;
    height: 70%;
  }
  ${MobileStyle} {
    flex: 0 0 250px;
    width: 40%;
  }
`

const Article = styled.div`
  flex: 0 0 32px;
  width: 100%;

  background-color: green;
`

export const Module2 = () => {
  return (
    <ModuleWrapper>
      <Container>
        <ArticleBox>
          {new Array(16).fill(1).map((val, index) => (
            <Article key={index} />
          ))}
          <Article />
        </ArticleBox>
        <ArticleBox>
          {new Array(16).fill(1).map((val, index) => (
            <Article key={index} />
          ))}
          <Article />
        </ArticleBox>
      </Container>
    </ModuleWrapper>
  )
}
