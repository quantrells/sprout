
import React, { fragments } from 'react';
import styled from 'styled-components'

import StyledButton from '../components/button.js'

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

const ButtonWrapper = styled.div`
`

const Paragraph = ({ type, children }) => (
  <StyledParagraph type={type}>
    {children}
  </StyledParagraph>
)

class Card extends React.PureComponent {
  render() {
    const {
      step,
    } = this.props

    return (
      <div className="card">
        <div className="profile-pic"></div>
        <InnerWrapper>
          {
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
          { step.buttons.map(btn => <StyledButton {...btn} />) }
        </InnerWrapper>
      </div>
    )
  }
}

export default Card;