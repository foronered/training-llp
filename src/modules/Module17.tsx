import React from 'react'
import styled from 'styled-components'
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
  flex: 2;
  height: 100%;
  display: flex;
  flex-direction: column;
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
`

const LeftOrangeSquare = styled.div`
  width: 56px;
  height: 56px;
  background-color: orange;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 8px;
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
  margin-right: 16px;
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
`

// Pink background
const LeftPinkBackground = styled.div`
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
`

const LeftBlueBlack = styled.div`
  flex: 1;
  height: 100%;
  background-color: black;
`

const RightPinkContainer = styled.div`
  height: 800px;
  flex: 0 0 160px;
  display: flex;
  flex-direction: column;
`

const RightPinkBlack = styled.div`
  height: 128px;
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
                <LeftOrangeSquare style={{ marginRight: 'auto' }}>
                  <LeftBlueSquare />
                </LeftOrangeSquare>
                <LeftOrangeSquare>
                  <LeftBlueSquare />
                </LeftOrangeSquare>
              </LeftRedBox>
            ))}
          </LeftOrangeBackground>
          <LeftBlueBackground>
            {[...Array(RepeatBoxes)].map((_, i) => (
              <LeftRedBox2>
                <LeftGreenBox />
                <LeftGreenBox>
                  <LeftBlackBox />
                </LeftGreenBox>
                <LeftGreenBox />
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
          <LeftPinkBackground>
            <LeftPinkBlueBox>
              <LeftBlueBlack />
            </LeftPinkBlueBox>
            <RightPinkContainer>
              <RightPinkBlack />
              <RightPinkBlue />
            </RightPinkContainer>
          </LeftPinkBackground>
        </RightContainer>
      </Container>
    </ModuleWrapper>
  )
}
