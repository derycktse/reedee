import { connect } from 'react-redux'
import Reedee from '../components/reedee'
import { bindActionCreators } from 'redux'
import * as ReedeeActions from '../actions/reedee'

function mapStateToProps(state) {
  return {
    reedee: state.reedee,
    subscriptions: state.reedee && state.reedee["subscription-list"].subscriptions,
    tags: state.reedee && state.reedee["tag-list"].tags,
    unreadCounts: state.reedee && state.reedee["unread-count"].unreadcounts
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ReedeeActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Reedee)
