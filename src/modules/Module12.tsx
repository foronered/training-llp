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
  width: 200px;
  height: 200px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  background-color: red;
  overflow-y: scroll;
`

const GreenRectangle = styled.div`
  width: 100%;
  flex: 0 0 500%;

  ${MOBILE_STYLE} {
    background-color: orange;
  }

  ${DESKTOP_STYLE} {
    background-color: lime;
  }
`

export const Module12 = () => {
  return (
    <ModuleWrapper>
      <Container>
        <RedBox>
          <GreenRectangle />
        </RedBox>
      </Container>
    </ModuleWrapper>
  )
}
