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

const InnerWrapper = styled.div` 
  margin: 72px 5%;
  position: relative;
`

const Bar = styled.div`
  width: 100%;
  height: 1px;
  background-color: #BABEC5;
  border-radius: 2px;
`

const Timeline = () => (
  <Wrapper> 
    <Card />
    <InnerWrapper>
      <Bar />
      <Steps />
    </InnerWrapper>
  </Wrapper>
)

export default Timeline;