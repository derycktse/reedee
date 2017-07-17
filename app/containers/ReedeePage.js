import { connect } from 'react-redux'
import Reedee from '../components/reedee'

function mapStateToProps(state) {
  return {
    reedee: state.reedee,
    subscriptions: state.reedee && state.reedee.subscriptions,
    tags: state.reedee && state.reedee.tags
  }
}

export default connect(mapStateToProps)(Reedee)
