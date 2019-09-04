import { connect } from 'react-redux'

import { getCurrentStep } from '../selectors/steps.js'
import Card from './card.js'

const mapStateToProps = (state) => {
  console.log({state})
  return {
    step: getCurrentStep(state),
  }
}

export default connect(mapStateToProps)(Card)