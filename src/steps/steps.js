import React from 'react';
import styled from 'styled-components'

const Wrapper = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  width: 100%;
`

const Step = styled.div`
  text-align: center;
  width: 190px;
  
  &:first-of-type {
    transform: translateX(-50%);
  }
  
  &:last-of-type {
    transform: translateX(50%);  
  }
`

const Dot = styled.div`
  position: relative;
  width: ${props => (props.active ? "20px" : "6px")};
  height: ${props => (props.active ? "20px" : "6px")};
  background-color: ${props => (props.active ? "#2CA01C" : "#BABEC5")}; ;
  border-radius: ${props => (props.active ? "10px" : "4px")};
  top: ${props => (props.active ? "-10px" : "-3px")};
  display: inline-block;
  box-shadow:  ${props => (props.active ? "0 0 0 5px rgba(44,160,28,.3)" : "0 0 0 6px #FFF;")}; 
  margin-bottom: ${props => (props.active ? "0" : "14px")};
  transition: all .5s ease-in-out;
`

const Num = styled.p`
  color: #BABEC5;
  text-transform: uppercase;
  font-weight: 300;
  line-height: 19px;
`

const Title = styled.p`
  font-size: 18px;
  line-height: 1.4;
  font-weight: 600;
`

const Steps = ({steps, currentStepId}) => (
  <Wrapper>
    {Object.keys(steps).map((key) => 
      (
        <Step key={key}>
          <Dot active={ key == currentStepId }/>
          <Num>Step {key}</Num>
          <Title>{ steps[key].title }</Title>
        </Step>
      )
    )}
  </Wrapper>
)

export default Steps;