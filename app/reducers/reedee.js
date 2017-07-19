
let subscriptionsSerialize = '', tagListSerialize = ''
try {
  subscriptionsSerialize = localStorage.getItem('subscriptions')
  tagListSerialize = localStorage.getItem('tag-list')
} catch (e) {
  // log
}
const subscriptions = (JSON.parse(subscriptionsSerialize) || {}).subscriptions || []
const tags = (JSON.parse(tagListSerialize) || {}).tags || []

// write data to local storage
function writeToLocal() {

}

export default function reedee(state = { subscriptions, tags }, action) {
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
    default:
      return state
  }
}
