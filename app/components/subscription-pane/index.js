
import { connect } from 'react-redux'
import SubscriptionFolderView from './subscription-folder-view'
import * as ReedeeActions from '../../actions/reedee'
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
    mapper[id]['folderName'] = id.replace(/.*\//, '')
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

function mapDispatchToProps(dispatch) {
  return {
    onSync: () => {
      
      // fetch necesssary data
      const list = ["subscription-list", 'tag-list', 'unread-count']
      ReedeeActions.fetchDataCollection(list).then(collections => {
        
        const payload = collections.map((data, idx) => {
          return {
            itemName: list[idx],
            data
          }
        })
        ReedeeActions.storeData(payload)
        ReedeeActions.readLocalData(list)(dispatch)
      })
    }
  }
}

// function mergeProps() {
//   return {

//   }
// }

export default connect(mapStateToProps, mapDispatchToProps)(SubscriptionFolderView)
