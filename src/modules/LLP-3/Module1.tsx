import React from 'react'
import styled from 'styled-components'
import { MOBILE_BREAKPOINT } from '../../constants'
import { ModuleWrapper } from '../common'

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: blue;
`

const Left = styled.div`
  flex: 2;
  height: 100%;
  flex-direction: column;
`
const TopLeft = styled.div`
  flex: 1;
  height: 50%;
  padding: 24px 40px;
  background-color: orange;

  display: flex;
  flex-direction: column;
  gap: 16px;

  overflow-y: auto;
`
const TopLeftElement = styled.div`
  flex: 0 0 96px;
  width: 100%;
  padding: 16px;
  background-color: firebrick;

  display: flex;
  align-items: center;
  justify-content: space-between;
`
const HelperBox1 = styled.div`
  display: flex;
  gap: 16px;
`
const TLBigBox = styled.div`
  display: flex;
  height: 56px;
  width: 56px;
  justify-content: center;
  align-items: center;
  background-color: orange;
`
const TLSmallBox = styled.div`
  flex: 0 0 32px;
  height: 32px;
  background-color: #6b6be3;
`

const BottomLeft = styled.div`
  flex: 1;
  height: 50%;
  padding: 24px 32px;
  gap: 16px;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  background-color: blue;
`

const BottomLeftElement = styled.div`
  flex: 0 0 120px;
  width: 100%;
  padding: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 16px;
  background-color: firebrick;
`
const BLBigBox = styled.div`
  flex: 0 0 64px;
  height: 80px;
  background-color: green;
  display: flex;
  justify-content: center;
  align-items: center;
`
const BLSmallBox = styled.div`
  flex: 0 0 40px;
  height: 56px;
  background-color: black;
`
const Middle = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 24px 32px;
  gap: 24px;
  overflow-y: auto;
  background-color: firebrick;
`
const Card = styled.div`
  flex: 0 0 120px;
  width: 100%;
  padding: 16px 24px;
  gap: 16px;
  display: flex;
  flex-direction: column;
  background-color: green;
`
const Name = styled.div`
  flex: 0 0 32px;
  width: 64px;
  background-color: #6b6be3;
`
const Address = styled.div`
  flex: 0 0 48px;
  width: 100%;
  background-color: #6b6be3;
`

const Right = styled.div`
  flex: 2;
  height: 100%;

  flex-direction: column;
`
const TopRight = styled.div`
  flex: 1;
  height: 30%;
  padding: 24px 32px;
  gap: 16px;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  background-color: blue;
`

const TRElement = styled.div`
  flex: 0 0 64px;
  width: 100%;
  padding: 16px;
  background-color: firebrick;
`
const TRBigBox = styled.div`
  flex: 1;
  height: 100%;
  padding: 8px;
  display: flex;
  background-color: #6b6be3;
`
const TRSmallBox = styled.div`
  flex: 0 0 32px;
  height: 32px;

  background-color: black;
`
const BottomRight = styled.div`
  flex: 1;
  height: 70%;
  padding: 24px 32px;
  gap: 16px;
  display: flex;
  overflow-y: auto;
  background-color: purple;
`
const BRLeftElement = styled.div`
  flex: 1;
  height: 1024px;
  padding: 24px 32px;
  background-color: #6b6be3;
`
const InnerBlackBox = styled.div`
  height: 100%;
  background-color: black;
`
const HelperBox2 = styled.div`
  flex: 1;
  height: 1024px;
  display: flex;
  flex-direction: column;
  gap: 32px;
`

const BlackBox = styled.div`
  flex: 1;
  width: 100%;
  background-color: black;
`
const LightBlueBox = styled.div`
  flex: 9;
  width: 100%;
  background-color: #6b6be3;
`

export const Module1 = () => {
  return (
    <ModuleWrapper>
      <Container>
        <Left>
          <TopLeft>
            {new Array(12).fill(1).map((val, ind) => (
              <TopLeftElement key={ind}>
                <HelperBox1>
                  <TLBigBox>
                    <TLSmallBox />
                  </TLBigBox>
                  <TLBigBox>
                    <TLSmallBox />
                  </TLBigBox>
                </HelperBox1>
                <TLBigBox>
                  <TLSmallBox />
                </TLBigBox>
              </TopLeftElement>
            ))}
          </TopLeft>
          <BottomLeft>
            {new Array(12).fill(1).map((val, ind) => (
              <BottomLeftElement>
                <BLBigBox />
                <BLBigBox>
                  <BLSmallBox />
                </BLBigBox>
                <BLBigBox />
              </BottomLeftElement>
            ))}
          </BottomLeft>
        </Left>
        <Middle>
          {new Array(24).fill(1).map((val, ind) => (
            <Card key={ind}>
              <Name />
              <Address />
            </Card>
          ))}
        </Middle>
        <Right>
          <TopRight>
            {new Array(8).fill(1).map((val, ind) => (
              <TRElement>
                <TRBigBox>
                  <TRSmallBox />
                </TRBigBox>
              </TRElement>
            ))}
          </TopRight>
          <BottomRight>
            <BRLeftElement>
              <InnerBlackBox />
            </BRLeftElement>
            <HelperBox2>
              <BlackBox />
              <LightBlueBox />
            </HelperBox2>
          </BottomRight>
        </Right>
      </Container>
    </ModuleWrapper>
  )
}
