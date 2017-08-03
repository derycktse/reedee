import { connect } from 'react-redux'
import FeedsView from './feed-view'

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
      categories,
      origin: {
        streamId
      }
    } = feed

    categories.reduce((obj, id) => {
      if (!obj[id]) {
        obj[id] = []
      }
      obj[id].push(feed)
      return obj
    }, obj)

    if (!subscriptionFeedMap[streamId]) {
      subscriptionFeedMap[streamId] = []
    }
    subscriptionFeedMap[streamId].push(feed)
    return subscriptionFeedMap
  }, subscriptionFeedMap)

  const visibleFeeds = []

  let activeSubscriptionId = statusController['activeSubscriptionId']
  if (activeSubscriptionId) {
    visibleFeeds.push(...subscriptionFeedMap[activeSubscriptionId] || [])
  }
  else {
    visibleFeeds.push(...rawFeeds)
  }

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
