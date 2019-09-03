import { connect } from 'react-redux'

import Timeline from './timeline.js'

const mapStateToProps = (state) => ({
    step: state.steps
})

export default connect(mapStateToProps)(Timeline)