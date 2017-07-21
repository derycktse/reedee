
import { connect } from 'react-redux'
import SubscriptionFolderView from './subscription-folder-view'
// const Nothing = () => {
//   return null
// }

const mapSubscriptions = ({ subscriptions = [], tags = [], unreadCounts }) => {
  const unreadCountsMapper = {}
  unreadCounts.reduce((obj, item) => {
    obj[item.id] = item
    return obj
  }, unreadCountsMapper)

  const mapper = {}
  tags.forEach(val => {
    console.log(val)
    const key = val.id.replace(/\\\//g, '/')
    mapper[key] = val
    mapper[key]["subscriptions"] = []
  })

  subscriptions.forEach(subscription => {
    if (unreadCountsMapper[subscription.id]) {
      subscription.unreadCount = unreadCountsMapper[subscription.id].count
    }
    const categories = subscription.categories
    categories.forEach(cate => {
      mapper[cate.id].subscriptions.push(subscription)
    })
  })


  const subscriptionFolder = Object.keys(mapper).map(id => {
    mapper[id]['folderName'] = id
    return mapper[id]
  })

  return subscriptionFolder
}

function mapStateToProps(state) {
  const { reedee: { 'subscription-list': { subscriptions }, 'tag-list': { tags }, 'unread-count': {
    unreadcounts: unreadCounts
  } } } = state

  const subscriptionFolder = mapSubscriptions({
    subscriptions,
    tags,
    unreadCounts
  })
  return {
    subscriptionFolder
  }
}

function mapDispatchToProps() {
  return {
    fun: () => {
      console.log(123)
    }
  }
}

// function mergeProps() {
//   return {

//   }
// }

export default connect(mapStateToProps, mapDispatchToProps)(SubscriptionFolderView)
