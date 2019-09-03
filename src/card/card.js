import React from 'react';
import styled from 'styled-components'

class Card extends React.PureComponent {
  render() {
    return (
      <div className="card">
        <div className="profile-pic"></div>
        <div className="card-inner">
          <p className="strong">Thanks for sharing that.</p>
          <p>Let’s start with identifying the services you want to provide to your customers.</p>
          <p><span className="highlight">We are suggesting this action because you were uncertain on the services you want to provide.</span></p>
          <div className="buttons">
            <a href="#" className="btn">Do it now</a>
              <a href="#" className="btn">Later</a>
          </div>
        </div>
      </div>
    )
  }
}

export default Card;