import styled from 'styled-components'
import {DESKTOP_STYLE, MOBILE_STYLE, ModuleWrapper} from './common'


const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 8px 16px;
  display: flex;
  flex-wrap: wrap;
  background-color: blue;
`

const RedBox = styled.div`
  background-color: red;

  ${MOBILE_STYLE} {
    flex: 0 0 50%;
    height: 25%;
  }

  ${DESKTOP_STYLE} {
    flex: 0 0 25%;
    height: 100%;
  }
`

const OrangeBox = styled.div`
  background-color: orange;

  ${MOBILE_STYLE} {
    flex: 0 0 50%;
    height: 25%;
  }

  ${DESKTOP_STYLE} {
    flex: 0 0 25%;
    height: 100%;
  }
`

const GreenBox = styled.div`
  background-color: lime;

  ${MOBILE_STYLE} {
    flex: 0 0 100%;
    height: 75%;
  }

  ${DESKTOP_STYLE} {
    flex: 0 0 50%;
    height: 100%;
  }
`

export const Module7 = () => {
  return (
    <ModuleWrapper>
      <Container>
        <RedBox />
        <OrangeBox />
        <GreenBox />
      </Container>
    </ModuleWrapper>
  )
}
