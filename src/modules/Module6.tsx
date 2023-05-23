import styled from 'styled-components'
import {DESKTOP_STYLE, MOBILE_STYLE, ModuleWrapper} from './common'


const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 8px 16px;
  display: flex;
  background-color: blue;

  ${MOBILE_STYLE} {
    flex-direction: column;
  }

  ${DESKTOP_STYLE} {
    flex-direction: row;
  }
`

const RedBox = styled.div`
  background-color: red;

  ${MOBILE_STYLE} {
    flex: 0 0 150px;
    width: 100%;
  }

  ${DESKTOP_STYLE} {
    flex: 0 0 300px;
    height: 100%; 
  }
`

const GreenBox = styled.div`
  flex: 1 0 auto;
  background-color: lime;

  ${MOBILE_STYLE} {
    width: 100%;
  }

  ${DESKTOP_STYLE} {
    height: 100%;
  }
`

export const Module6 = () => {
  return (
    <ModuleWrapper>
      <Container>
        <RedBox />
        <GreenBox />
      </Container>
    </ModuleWrapper>
  )
}
