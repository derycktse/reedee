import { connect } from 'react-redux'
import FeedsView from './subscription-item-view'

function mapStateToProps(state) {
  const {
    reedee: {
      'stream/contents': {
        items: rawFeeds
      },
    'subscription-list': {
        subscriptions
      }
    }
 } = state

  const subscriptionFeedMap = {}

  rawFeeds.reduce((obj, feed) => {
    const {
      origin: {
        streamId
      }
    } = feed
    subscriptionFeedMap[streamId] = feed
  }, subscriptionFeedMap)

  const visibleFeeds = Object.keys(subscriptionFeedMap).map(key => subscriptionFeedMap[key])
  return {
    visibleFeeds
  }
}

export default connect(mapStateToProps)(FeedsView)
