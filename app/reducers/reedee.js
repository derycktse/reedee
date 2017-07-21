
let subscriptionsSerialize = '', tagListSerialize = ''
try {
  subscriptionsSerialize = localStorage.getItem('subscriptions')
  tagListSerialize = localStorage.getItem('tag-list')
} catch (e) {
  // log
}
const subscriptions = (JSON.parse(subscriptionsSerialize) || {}).subscriptions || []
const tags = (JSON.parse(tagListSerialize) || {}).tags || []


function getInitState(...names) {
  let obj = {}
  names.forEach(name => {
    obj[name] = JSON.parse(window.localStorage.getItem(name)) || {}
  })
  return obj
}

const initList = ['subscription-list', 'tag-list', 'unread-count', 'subscription-panel-status-controller']
const initState = getInitState(...initList)
console.log('init state:')
console.log(initState)
export default function reedee(state = initState, action) {
  switch (action.type) {
    case 'FETCH_SUBSCRIPTION_LIST':
      return {
        ...state
      }
    case 'SYNC':
      console.log('sync')
      console.log(action)
      return {
        ...state
      }
    case 'UPDATE_TAG_LIST':
      return {
        ...state,
        tags: action.payload
      }
    case 'UPDATE_SUBSCRIPTION_LIST':
      return {
        ...state,
        subscriptions: action.payload
      }
    case 'UPDATE_DATA':
      return {
        ...state,
        ...action.payload
      }
    case 'TOGGLE_FOLDER':
      return {
        ...state,
        'subscription-panel-status-controller': action.payload
      }
    default:
      return state
  }
}
