import { connect } from 'react-redux'

import { getCurrentStep } from '../selectors/steps'
import { getAssistanceImg } from '../selectors/assistance'
import Card from './card.js'

const mapStateToProps = (state) => ({
  step: getCurrentStep(state),
  img: getAssistanceImg(state)
})

export default connect(mapStateToProps)(Card)