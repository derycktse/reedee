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
    if (!subscriptionFeedMap[streamId]) {
      subscriptionFeedMap[streamId] = []
    }
    subscriptionFeedMap[streamId].push(feed)
    return subscriptionFeedMap
  }, subscriptionFeedMap)

  const visibleFeeds = rawFeeds
  console.log(visibleFeeds)
  return {
    visibleFeeds
  }
}

export default connect(mapStateToProps)(FeedsView)
