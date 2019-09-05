import React from 'react';
import { connect } from 'react-redux'

import './App.css'

import StyledButton from './components/button.js'
import Timeline from './timeline/container.js';

const App = ({dispatch}) => {
  return (
    <div>
      <Timeline />
      
      <button 
        style={{margin: '24px auto', display: 'block'}}
        onClick={() => dispatch({ type: 'NEXT_STEP' })}
      >
        Demo Only
      </button>
    </div>
  );
}

export default connect()(App);
