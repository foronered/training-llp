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

  ${MOBILE_STYLE} {
    background-color: rgb(71, 159, 248);
  }
  
  ${DESKTOP_STYLE} {
    background-color: red;
  }
`

export const Module4 = () => {
  return (
    <ModuleWrapper>
      <Container>
        <RedBox />
      </Container>
    </ModuleWrapper>
  )
}
