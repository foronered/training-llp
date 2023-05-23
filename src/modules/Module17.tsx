import React from 'react'
import styled from 'styled-components'
import { DESKTOP_STYLE, MOBILE_STYLE } from '../constants'
import { ModuleWrapper } from './common'

const Container = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  background-color: blue;
`

const RepeatBoxes = 10

// Left part
const LeftContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;

  ${DESKTOP_STYLE} {
    flex: 2;
  }

  ${MOBILE_STYLE} {
    flex: 0 0 40px;
  }
`

// OrangeBackground
const LeftOrangeBackground = styled.div`
  flex: 1;
  width: 100%;
  background-color: orange;
  padding: 16px 32px;
  overflow-y: scroll;
`

const LeftRedBox = styled.div`
  width: 100%;
  height: 80px;
  background-color: red;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  padding: 8px;

  ${MOBILE_STYLE} {
    justify-content: center;
  }
`

const LeftOrangeSquare = styled.div`
  width: 56px;
  height: 56px;
  background-color: orange;
  display: flex;
  align-items: center;
  justify-content: center;

  ${DESKTOP_STYLE} {
    margin-right: 8px;
  }

  ${MOBILE_STYLE} {
    margin-right: 0px;
  }
`

const LeftOrangeSquareDesktop = styled.div`
  width: 56px;
  height: 56px;
  background-color: orange;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 8px;

  ${MOBILE_STYLE}  {
    display: none;
  }
`

const LeftBlueSquare = styled.div`
  width: 32px;
  height: 32px;
  background-color: lightblue;
`

// BlueBackground
const LeftBlueBackground = styled.div`
  flex: 1;
  width: 100%;
  background-color: blue;
  padding: 16px 32px;
  overflow-y: scroll;
`

const LeftRedBox2 = styled.div`
  width: 100%;
  height: 128px;
  background-color: red;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
`

const LeftGreenBox = styled.div`
  width: 80px;
  height: 104px;
  background-color: green;
  display: flex;
  align-items: center;
  justify-content: center;

  ${DESKTOP_STYLE} {
    margin-right: 16px;
  }

  ${MOBILE_STYLE} {
    margin-right: 0px;
  }
`

const LeftGreenBoxDesktop = styled.div`
  width: 80px;
  height: 104px;
  background-color: green;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 16px;

  ${MOBILE_STYLE} {
    display: none;
  }
`

const LeftBlackBox = styled.div`
  width: 32px;
  height: 32px;
  background-color: black;
`

// Mid part
const MidPartRedBackground = styled.div`
  flex: 1;
  height: 100%;
  background-color: red;
  padding: 16px;
  overflow-y: scroll;

  ${MOBILE_STYLE}  {
    display: none;
  }
`

const MidGreenBox = styled.div`
  width: 100%;
  height: 128px;
  background-color: green;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 16px;
`

const MidBlueTop = styled.div`
  width: 32px;
  height: 24px;
  display: flex;
  background-color: lightblue;
`

const MidBlueBottom = styled.div`
  width: 100%;
  height: 32px;
  display: flex;
  background-color: lightblue;
`

// Right part
const RightContainer = styled.div`
  flex: 2;
  height: 100%;
  display: flex;
  flex-direction: column;
`

// Blue background
const RightBlueBackground = styled.div`
  flex: 1;
  width: 100%;
  background-color: blue;
  overflow-y: scroll;
  padding: 16px;
`

const RightRedBox = styled.div`
  height: 64px;
  width: 100%;
  display: flex;
  background-color: red;
  margin-bottom: 16px;
  padding: 8px;
  align-items: center;
  justify-content: center;
`

const RightBlueBox = styled.div`
  height: 32px;
  width: 100%;
  display: flex;
  background-color: lightblue;
  align-items: center;
  padding: 8px;
`

const RightBlackBox = styled.div`
  height: 16px;
  width: 16px;
  display: flex;
  background-color: black;

  ${MOBILE_STYLE} {
    display: none;
  }
`

// Pink background
const RightPinkBackground = styled.div`
  flex: 3;
  width: 100%;
  display: flex;
  background-color: pink;
  overflow-y: scroll;
  padding: 32px;
  justify-content: space-evenly;
`

const LeftPinkBlueBox = styled.div`
  height: 800px;
  flex: 0 0 160px;
  display: flex;
  background-color: lightblue;
  padding: 16px;

  ${MOBILE_STYLE} {
    display: none;
  }
`

const LeftBlueBlack = styled.div`
  flex: 1;
  height: 100%;
  background-color: black;
`

const RightPinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 800px;
  flex: 0 0 160px;
`

const RightPinkBlack = styled.div`
  display: flex;
  flex: 0 0 128px;
  width: 100%;
  background-color: black;
  margin-bottom: 16px;
`

const RightPinkBlue = styled.div`
  flex: 1;
  width: 100%;
  background-color: lightblue;
`

export const Module17 = () => {
  return (
    <ModuleWrapper>
      <Container>
        <LeftContainer>
          <LeftOrangeBackground>
            {[...Array(RepeatBoxes)].map((_, i) => (
              <LeftRedBox key={i}>
                <LeftOrangeSquare>
                  <LeftBlueSquare />
                </LeftOrangeSquare>
                <LeftOrangeSquareDesktop style={{ marginRight: 'auto' }}>
                  <LeftBlueSquare />
                </LeftOrangeSquareDesktop>
                <LeftOrangeSquareDesktop>
                  <LeftBlueSquare />
                </LeftOrangeSquareDesktop>
              </LeftRedBox>
            ))}
          </LeftOrangeBackground>
          <LeftBlueBackground>
            {[...Array(RepeatBoxes)].map((_, i) => (
              <LeftRedBox2>
                <LeftGreenBoxDesktop />
                <LeftGreenBox>
                  <LeftBlackBox />
                </LeftGreenBox>
                <LeftGreenBoxDesktop />
              </LeftRedBox2>
            ))}
          </LeftBlueBackground>
        </LeftContainer>
        <MidPartRedBackground>
          {[...Array(RepeatBoxes)].map((_, i) => (
            <MidGreenBox>
              <MidBlueTop />
              <MidBlueBottom />
            </MidGreenBox>
          ))}
        </MidPartRedBackground>
        <RightContainer>
          <RightBlueBackground>
            {[...Array(RepeatBoxes)].map((_, i) => (
              <RightRedBox>
                <RightBlueBox>
                  <RightBlackBox />
                </RightBlueBox>
              </RightRedBox>
            ))}
          </RightBlueBackground>
          <RightPinkBackground>
            <LeftPinkBlueBox>
              <LeftBlueBlack />
            </LeftPinkBlueBox>
            <RightPinkContainer>
              <RightPinkBlack />
              <RightPinkBlue />
            </RightPinkContainer>
          </RightPinkBackground>
        </RightContainer>
      </Container>
    </ModuleWrapper>
  )
}
