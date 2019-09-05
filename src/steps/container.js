import { connect } from 'react-redux'

import Steps from './steps.js'
import { getSteps, getCurrentStepId } from '../selectors/steps.js'

const mapStateToProps = (state) => ({
  currentStepId: getCurrentStepId(state),
  steps: getSteps(state)
})


export default connect(mapStateToProps)(Steps)