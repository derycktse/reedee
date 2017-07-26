import { connect } from 'react-redux'
import FeedsView from './subscription-item-view'

const viewFeedContent = (dispatch) => (feedId) => {
  dispatch({
    type: 'VIEW_FEED_CONTENT',
    activeFeedId: feedId
  })
}


function mapStateToProps(state) {
  const {
    reedee: {
      'stream/contents': {
        items: rawFeeds
      },
    'subscription-list': {
        subscriptions
      },
    'subscription-panel-status-controller': statusController
    }
 } = state

  const subscriptionFeedMap = {}

  rawFeeds.reduce((obj, feed) => {
    const {
      origin: {
        streamId
      }
    } = feed
    if (!subscriptionFeedMap[streamId]) {
      subscriptionFeedMap[streamId] = []
    }
    subscriptionFeedMap[streamId].push(feed)
    return subscriptionFeedMap
  }, subscriptionFeedMap)

  const visibleFeeds = rawFeeds
  console.log(visibleFeeds)
  return {
    visibleFeeds,
    statusController
  }
}

function mapDispatchToProps(dispatch) {
  return {
    viewFeedContent: viewFeedContent(dispatch)
  }
}

// function mergeProps(stateProps, dispatchProps) {
//   return {
//     ...stateProps,
//     ...dispatchProps,
//     viewFeedContent: viewFeedContent(dispatch)(statePropsstatusController)
//   }
// }

export default connect(mapStateToProps, mapDispatchToProps)(FeedsView)
