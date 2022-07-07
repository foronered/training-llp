import React from 'react'
import styled from 'styled-components'
import { DESKTOP_STYLE, MOBILE_STYLE } from '../../constants'
import { ModuleWrapper } from '../common'

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  background-color: blue;
  ${MOBILE_STYLE} {
    flex-direction: column;
    align-items: center;
  }
`

const SideBar = styled.div`
  display: flex;
  padding: 8px;
  gap: 8px;
  background-color: red;
  overflow-y: scroll;
  ${DESKTOP_STYLE} {
    flex: 0 0 300px;
    flex-direction: column;
  }
  ${MOBILE_STYLE} {
    flex-direction: row;
    flex: 0 0 56px;
    width: 100%;
  }
`

const BlueContentArea = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  overflow-y: scroll;
  padding: 16px;
  ${DESKTOP_STYLE} {
    flex: 0 0 648px;
  }
  ${MOBILE_STYLE} {
    width: 232px;
  }
`

const SmallBox = styled.div`
  flex: 0 0 200px;
  aspect-ratio: 1;
  background-color: red;
`

const GreenBox = styled.div`
  background-color: green;
  ${DESKTOP_STYLE} {
    flex: 0 0 40px;
  }
  ${MOBILE_STYLE} {
    flex: 0 0 200px;
  }
`

export const Module11 = () => {
  const redObjects = new Array<undefined>(36)
  const greenObjects = new Array<undefined>(16)
  redObjects.fill(undefined)
  greenObjects.fill(undefined)
  return (
    <ModuleWrapper>
      <Container>
        <SideBar>
          {greenObjects.map((ind) => (
            <GreenBox key={ind} />
          ))}
        </SideBar>
        <BlueContentArea>
          {redObjects.map((ind) => (
            <SmallBox key={ind} />
          ))}
        </BlueContentArea>
      </Container>
    </ModuleWrapper>
  )
}
