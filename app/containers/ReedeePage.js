import { connect } from 'react-redux'
import Reedee from '../components/reedee'
import { bindActionCreators } from 'redux'
import * as ReedeeActions from '../actions/reedee'

function mapStateToProps(state) {
  const { reedee } = state
  const { 'subscription-list': { subscriptions },
    'tag-list': { tags },
    'unread-count': { unreadcounts: unreadCounts }
   } = reedee

  return {
    subscriptions,
    tags,
    unreadCounts
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ReedeeActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Reedee)
