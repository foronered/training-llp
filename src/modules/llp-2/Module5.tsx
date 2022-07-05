import React from 'react'
import styled from 'styled-components'
import { DESKTOP_STYLE, MOBILE_STYLE } from '../../constants'
import { ModuleWrapper } from '../common'

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: blue;
`
const Content = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 100px auto 100px;
  ${DESKTOP_STYLE} {
    grid-template-columns: 30% 70%;
  }
  ${MOBILE_STYLE} {
    max-width: 448px;
    margin: 0 auto;
    grid-template-columns: 100px auto;
  }
`

const Menu = styled.div`
  width: 100%;
  padding: 16px;
  display: flex;
  gap: 16px;
  justify-content: space-between;
  flex-wrap: wrap;
  overflow: hidden;
`

const PinkMenu = styled(Menu)`
  background-color: hotpink;
`
const BlueSquare = styled.div`
  background-color: dodgerblue;
  height: 100%;
  aspect-ratio: 1;
`
const BlueBar = styled.div`
  background-color: dodgerblue;
  height: 100%;
  width: 100%;
`
const BlueItem = styled.div`
  background-color: dodgerblue;
  width: 300px;
  height: 200px;
  ${MOBILE_STYLE} {
    width: 200px;
    height: 150px;
  }
`

const RedBar = styled.div`
  background-color: red;
  height: 36px;
  width: 48px;
`
const LongRedBar = styled.div`
  background-color: red;
  height: 36px;
  width: 192px;
  margin: 16px;
`

const BlueMenu = styled(Menu)`
  background-color: dodgerblue;
  width: fit-content;
  height: 100%;
  ${MOBILE_STYLE} {
    width: 88px;
    justify-content: center;
  }
`
const OrangeMenu = styled(Menu)`
  background-color: orange;
  align-items: center;
  flex-wrap: nowrap;
  min-height: 100px;
`

const RedScrollView = styled.div`
  background-color: red;
  gap: 32px;
  display: flex;
  flex-wrap: wrap;
  padding: 32px;
  overflow-y: scroll;
  ${MOBILE_STYLE} {
    padding: 16px;
  }
`

const GreenBar = styled.div`
  background-color: lime;
  height: 68px;
  width: 100%;
  ${MOBILE_STYLE} {
    height: 60px;
  }
`

const ContentArea = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  overflow-y: scroll;
  padding: 32px;
  grid-row-start: span 2;
  ${MOBILE_STYLE} {
    justify-content: center;
  }
`

export const Module5 = () => {
  return (
    <ModuleWrapper>
      <Container>
        <Content>
          <PinkMenu>
            <BlueSquare />
            <BlueSquare />
          </PinkMenu>
          <OrangeMenu>
            <LongRedBar />
            <BlueMenu>
              <RedBar />
              <RedBar />
              <RedBar />
              <RedBar />
            </BlueMenu>
          </OrangeMenu>
          <RedScrollView>
            <GreenBar />
            <GreenBar />
            <GreenBar />
            <GreenBar />
            <GreenBar />
            <GreenBar />
            <GreenBar />
            <GreenBar />
            <GreenBar />
            <GreenBar />
          </RedScrollView>
          <ContentArea>
            <BlueItem />
            <BlueItem />
            <BlueItem />
            <BlueItem />
            <BlueItem />
            <BlueItem />
            <BlueItem />
            <BlueItem />
            <BlueItem />
            <BlueItem />
          </ContentArea>
          <OrangeMenu>
            <BlueSquare />
            <BlueBar />
          </OrangeMenu>
        </Content>
      </Container>
    </ModuleWrapper>
  )
}
