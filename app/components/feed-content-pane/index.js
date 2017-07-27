import { connect } from 'react-redux'
import FeedContentView from './feed-content-view'

function mapStateToProps(state) {
  let content = ''
  const {
    reedee: {
      'stream/contents': {
        items: rawFeeds
      },
    'subscription-panel-status-controller': statusController
    }
  } = state
  let activeFeedId = statusController['activeFeedId']

  const feedContentMap = {}
  rawFeeds.reduce((obj, feed) => {
    const {
      id
    } = feed
    obj[id] = feed
    return obj
  }, feedContentMap)

  if (activeFeedId) {
    content = feedContentMap[activeFeedId].summary.content
  }
  return {
    content
  }
}

export default connect(mapStateToProps)(FeedContentView)
