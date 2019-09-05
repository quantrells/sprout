import React from 'react';
import styled from 'styled-components'

import Card from '../card/container.js'
import Steps from '../steps/container.js'

const Wrapper = styled.div`
  margin: 64px auto;
  width: 900px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: relative;
`

class Timeline extends React.PureComponent {
  render() {
    return (
      <Wrapper> 
        <Card />
        <div className="timeline-wrapper">
          <div className="timeline-bar"></div>
          <Steps />
        </div>
      </Wrapper>
    )
  }
}

export default Timeline;