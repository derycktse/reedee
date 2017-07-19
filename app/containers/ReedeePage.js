import { connect } from 'react-redux'
import Reedee from '../components/reedee'
import { bindActionCreators } from 'redux'
import * as ReedeeActions from '../actions/reedee'

function mapStateToProps(state) {
  return {
    reedee: state.reedee,
    subscriptions: state.reedee && state.reedee.subscriptions,
    tags: state.reedee && state.reedee.tags
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ReedeeActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Reedee)
