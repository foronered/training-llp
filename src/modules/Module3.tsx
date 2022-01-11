import styled from 'styled-components'
import {DESKTOP_STYLE, MOBILE_STYLE, ModuleWrapper} from './common'


const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: blue;
`

const RedBox = styled.div`
  width: 400px;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;

  ${MOBILE_STYLE} {
    background-color: black;
  }

  ${DESKTOP_STYLE} {
    background-color: red;
  }
`

const OrangeBox = styled.div`
  width: 200px;
  height: 200px;

  ${MOBILE_STYLE} {
    background-color: lime;
  }

  ${DESKTOP_STYLE} {
    background-color: orange;
  }
`

export const Module3 = () => {
  return (
    <ModuleWrapper>
      <Container>
        <RedBox>
          <OrangeBox />
        </RedBox>
      </Container>
    </ModuleWrapper>
  )
}
