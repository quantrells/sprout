
import React, { fragments } from 'react';
import styled from 'styled-components'

import StyledButton from '../components/button.js'

const Wrapper = styled.div`
  width: 380px;
  height: 340px;
  background-color: white;
  background-image: url("data:image/svg+xml,%3Csvg%20width%3D%22413%22%20height%3D%22372%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E%3Cdefs%3E%3Cpath%20d%3D%22M37.004%2030a30.091%2030.091%200%200%201-.004-.5C37%2013.208%2050.208%200%2066.5%200S96%2013.208%2096%2029.5c0%20.167-.001.334-.004.5H369c6.627%200%2012%205.373%2012%2012v286c0%206.627-5.373%2012-12%2012H12c-6.627%200-12-5.373-12-12V42c0-6.627%205.373-12%2012-12h25.004z%22%20id%3D%22b%22%2F%3E%3Cfilter%20x%3D%22-6.3%25%22%20y%3D%22-7.1%25%22%20width%3D%22112.6%25%22%20height%3D%22114.1%25%22%20filterUnits%3D%22objectBoundingBox%22%20id%3D%22a%22%3E%3CfeOffset%20in%3D%22SourceAlpha%22%20result%3D%22shadowOffsetOuter1%22%2F%3E%3CfeGaussianBlur%20stdDeviation%3D%228%22%20in%3D%22shadowOffsetOuter1%22%20result%3D%22shadowBlurOuter1%22%2F%3E%3CfeColorMatrix%20values%3D%220%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200.100879589%200%22%20in%3D%22shadowBlurOuter1%22%2F%3E%3C%2Ffilter%3E%3C%2Fdefs%3E%3Cg%20transform%3D%22translate%2816%2016%29%22%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cuse%20fill%3D%22%23000%22%20filter%3D%22url%28%23a%29%22%20xlink%3Ahref%3D%22%23b%22%2F%3E%3Cuse%20fill%3D%22%23FFF%22%20xlink%3Ahref%3D%22%23b%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E");
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  z-index: 3;
  box-sizing: border-box;
  align-self: center;
`

const StyledParagraph = styled.p`
  font-size: 16px;
  margin-bottom: 21px;
  font-weight: ${props => (props.type === 'strong' ? "600" : "inherit")};
  & > span {
    background-color: rgba(248, 231, 28, .1);
  }
`

const InnerWrapper = styled.div`
  padding: 0 30px;
  margin-top: 40px
`

const ProfilePic = styled.div`
  width: 46px;
  height: 46px;
  background-color: #eee;
  border-radius: 28px;
  position: relative;
  top: 19px;
  left: 53px;
  background-image: url(${props => props.img});
  background-size: cover;
  background-position: center center;
`

const Paragraph = ({ type, children }) => (
  <StyledParagraph type={type}>
    {children}
  </StyledParagraph>
)

const Card = ({step, img}) => {
  return (
  <Wrapper>
    <ProfilePic img={img}/>
    <InnerWrapper>
      {step &&
        step.copy.map(item =>
          (
            <Paragraph type={item.type}>
              {
                item.type === 'highlight'
                  ? <span>{item.text}</span>
                  : item.text
              }
            </Paragraph>
          )
        )}
      {step && step.buttons.map(btn => <StyledButton {...btn} />) }
    </InnerWrapper>
  </Wrapper>
)}

export default Card;