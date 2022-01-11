import styled from 'styled-components'
import {DESKTOP_STYLE, MOBILE_STYLE, ModuleWrapper} from './common'


const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 8px 16px;
  display: flex;
  background-color: blue;
`

const RedBox = styled.div`
  flex: 1 0 auto;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: red;

  ${MOBILE_STYLE} {
    flex-direction: column;
  }

  ${DESKTOP_STYLE} {
    flex-direction: row;
  }
`

const GreenBox = styled.div`
  flex: 0 1 64px;
  background-color: lime;

  ${MOBILE_STYLE} {
    width: 64px;
  }

  ${DESKTOP_STYLE} {
    height: 64px;
  }
`

const BlueBox = styled.div`
  background-color: deepskyblue;

  ${MOBILE_STYLE} {
    flex: 0 1 64px;
    width: 256px;
  }

  ${DESKTOP_STYLE} {
    flex: 0 1 256px;
    height: 64px;
  }
`

const OrangeBox = styled.div`
  background-color: orange;

  ${MOBILE_STYLE} {
    flex: 0 1 64px;
    width: 128px;
  }

  ${DESKTOP_STYLE} {
    flex: 0 1 128px;
    height: 64px;
  }
`

export const Module5 = () => {
  return (
    <ModuleWrapper>
      <Container>
        <RedBox>
          <GreenBox />
          <BlueBox />
          <OrangeBox />
        </RedBox>
      </Container>
    </ModuleWrapper>
  )
}
