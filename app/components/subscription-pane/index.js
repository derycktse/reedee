
import { connect } from 'react-redux'
import SubscriptionFolderView from './subscription-folder-view'
import * as ReedeeActions from '../../actions/reedee'
// const Nothing = () => {
//   return null
// }

// const statusController = JSON.parse(localStorage.getItem('subscription-panel-status-controller')) || {}

// if (typeof statusController['folderToggleInfo'] !== {})
//   statusController['folderToggleInfo'] = {}


const mapSubscriptions = ({ subscriptions = [], tags = [], unreadCounts,
  statusController }) => {
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
  if (!statusController['folderToggleInfo']) statusController['folderToggleInfo'] = {}
  const folderToggleInfo = statusController['folderToggleInfo']
  const subscriptionFolders = Object.keys(mapper).map(id => {
    const folder = mapper[id]
    // set folder name
    folder['folderName'] = id.replace(/.*\//, '')

    // set folder toggle info
    if (folderToggleInfo[id]) {
      folder.isClosed = folderToggleInfo[id].isClosed
    }

    return folder
  })

  return subscriptionFolders
}

const onFolderToggle = (dispatch) => (statusController) => (folderId) => {
  const { folderToggleInfo } = statusController
  folderToggleInfo[folderId] = folderToggleInfo[folderId] ? folderToggleInfo[folderId] : { isClosed: false }
  folderToggleInfo[folderId].isClosed = !folderToggleInfo[folderId].isClosed
  ReedeeActions.storeData({
    itemName: 'subscription-panel-status-controller',
    data: statusController
  })
  dispatch({
    type: 'TOGGLE_FOLDER',
    payload: statusController
  })
}

function mapStateToProps(state) {
  const {
    reedee: {
    'subscription-list': { subscriptions },
    'tag-list': { tags },
    'unread-count': {
      unreadcounts: unreadCounts
    },
    'subscription-panel-status-controller': statusController
 }
} = state

  const subscriptionFolder = mapSubscriptions({
    subscriptions,
    tags,
    unreadCounts,
    statusController
  })
  return {
    subscriptionFolder,
    statusController
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
    },
    onFolderToggle: onFolderToggle(dispatch)
  }
}

function mergeProps(stateProps, dispatchProps) {

  return {
    ...stateProps,
    ...dispatchProps,
    onFolderToggle: dispatchProps.onFolderToggle(stateProps.statusController)
  }
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(SubscriptionFolderView)
