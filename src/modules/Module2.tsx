import styled from 'styled-components'
import {DESKTOP_STYLE, MOBILE_STYLE, ModuleWrapper} from './common'


const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
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
    width: 150px;  // The container is only 600px tall, so in order to get the spaced effect we need to shrink the boxes
    height: 150px;
  }

 ${DESKTOP_STYLE} {
    width: 200px;
    height: 200px;
  }
`

export const Module2 = () => {
  return (
    <ModuleWrapper>
      <Container>
        <RedBox/>
        <RedBox/>
        <RedBox/>
      </Container>
    </ModuleWrapper>
  )
}
