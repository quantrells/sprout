import React from 'react';
import styled from 'styled-components'

// bring in card 
// dot
// line?

//html
// 1. wrapper
// 2. card
// 3. line from card to Timeline
// 4. timeline wrapper
//     - dots flexed out with line between
//     - each has active and inactive state
//     - each has text as well

const wrapper = styled.div``

function Timeline() {
    return (
        <div className="wrapper"> 
            <div className="card">
                <div className="profile-pic"></div>
                <p>Copy</p>
                <p className="question">Question</p>
                <div className="buttons">
                    <div className="btn">yes</div>
                    <div className="btn">yes</div>
                </div>
            </div>

            <div className="timeline-wrapper">
                <div className="pos-dot">
                    <div className="bar"></div>
                    <div className="dot"></div>
                </div>
                <div className="timeline-bar"></div>
                <div className="stepsWrapper">
                    <div className="step">
                        <div className="dot"></div>
                        <p>Step 1</p>
                        <p>Title will go here later on</p>
                    </div>
                    <div className="step">
                        <div className="dot"></div>
                        <p>Step 1</p>
                        <p>Title will go here later on</p>
                    </div>
                    <div className="step">
                        <div className="dot"></div>
                        <p>Step 1</p>
                        <p>Title will go here later on</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Timeline;