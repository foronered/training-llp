import React from 'react'
import styled from 'styled-components'
import { MOBILE_BREAKPOINT } from '../../constants'
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
  @media (min-width: ${MOBILE_BREAKPOINT}) {
    grid-template-rows: 100px auto 200px;
    grid-template-columns: 30% 70%;
  }
  @media (max-width: ${MOBILE_BREAKPOINT}) {
    max-width: 448px;
    margin: 0 auto;
    grid-template-rows: 200px auto 156px;
    grid-template-columns: 88px auto;
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
const Blue = styled.div`
  background-color: dodgerblue;
`
const GreenSquare = styled.div`
  height: 64px;
  background-color: lime;
  aspect-ratio: 1;
  @media (max-width: ${MOBILE_BREAKPOINT}) {
    width: 100%;
    height: inherit;
  }
`
const RedSquare = styled.div`
  height: 80px;
  background-color: red;
  aspect-ratio: 1;
`
const RedSquareLeft = styled(RedSquare)`
  @media (max-width: ${MOBILE_BREAKPOINT}) {
    display: none;
  }
`
const RedSquareRight = styled(RedSquare)`
  @media (max-width: ${MOBILE_BREAKPOINT}) {
    height: 56px;
  }
`
const BlueBar = styled(Blue)`
  height: 100%;
  width: 100%;
  @media (max-width: ${MOBILE_BREAKPOINT}) {
    height: 48px;
  }
`

const RedBar = styled.div`
  background-color: red;
  height: 36px;
  width: 48px;
`
const LongRedBar = styled(RedBar)`
  width: 192px;
  margin: 0 16px;
`

const BlueMenu = styled(Menu)`
  background-color: dodgerblue;
  width: fit-content;
  flex-wrap: nowrap;
`
const OrangeMenu = styled(Menu)`
  background-color: orange;
  flex-wrap: wrap;
  min-height: 100px;
  @media (max-width: ${MOBILE_BREAKPOINT}) {
    padding: 32px;
    gap: 32px;
  }
`

const RedContent = styled.div`
  background-color: red;
  padding: 18px;
  grid-row-start: span 2;
`

const GreenBar = styled.div`
  background-color: lime;
  height: 40px;
  width: 100%;
`
const GreenBarTop = styled(GreenBar)`
  margin-top: 18px;
  @media (max-width: ${MOBILE_BREAKPOINT}) {
    display: none;
  }
`

const ContentArea = styled.div`
  width: 100%;
  display: flex;
  gap: 32px;
  padding: 32px;
  overflow: hidden;
  padding-bottom: 0;
  grid-row-start: span 2;
  @media (max-width: ${MOBILE_BREAKPOINT}) {
    justify-content: center;
    padding: 0;
  }
`

const Group = styled.div`
  display: flex;
  align-items: center;
`
const GreenMenu = styled(Menu)`
  background-color: lime;
  padding: 32px;
  flex-wrap: nowrap;
  @media (max-width: ${MOBILE_BREAKPOINT}) {
    flex-wrap: wrap;
    justify-content: center;
    padding: 16px 40px;
  }
`

const GreenItem = () => (
  <GreenMenu>
    <RedSquareRight />
    <BlueBar />
  </GreenMenu>
)

const BlueContentLeft = styled.div`
  background-color: dodgerblue;
  height: 100%;
  padding: 32px;
  display: flex;
  flex-wrap: wrap;
  @media (min-width: ${MOBILE_BREAKPOINT}) {
    min-width: 552px;
    gap: 32px;
  }
  @media (max-width: ${MOBILE_BREAKPOINT}) {
    gap: 16px;
  }
  overflow: scroll;
`
const BlueContentRight = styled.div`
  background-color: dodgerblue;
  height: 100%;
  width: 100%;
  overflow: scroll;
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  padding: 32px;
  @media (max-width: ${MOBILE_BREAKPOINT}) {
    display: none;
  }
`

export const Module6 = () => {
  return (
    <ModuleWrapper>
      <Container>
        <Content>
          <RedContent>
            <GreenSquare />
            <GreenBarTop />
          </RedContent>
          <OrangeMenu>
            <Group>
              <RedBar />
              <LongRedBar />
            </Group>
            <BlueMenu>
              <RedBar />
              <RedBar />
              <RedBar style={{ visibility: 'hidden' }} />
              <RedBar />
            </BlueMenu>
          </OrangeMenu>
          <ContentArea>
            <BlueContentLeft>
              <GreenItem />
              <GreenItem />
              <GreenItem />
              <GreenItem />
            </BlueContentLeft>
            <BlueContentRight>
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
            </BlueContentRight>
          </ContentArea>
          <OrangeMenu style={{ padding: '20px' }}>
            <GreenBar
              style={{
                height: '48px',
                marginTop: 0,
                marginBottom: '16px',
              }}
            />
            <RedSquareLeft />
            <RedSquareLeft />
            <RedSquareLeft />
          </OrangeMenu>
        </Content>
      </Container>
    </ModuleWrapper>
  )
}