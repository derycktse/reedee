
let subscriptionsSerialize = '', tagListSerialize = ''
try {
  subscriptionsSerialize = localStorage.getItem('subscriptions')
  tagListSerialize = localStorage.getItem('tag-list')
} catch (e) {
  // log
}
const subscriptions = (JSON.parse(subscriptionsSerialize) || {}).subscriptions || []
const tags = (JSON.parse(tagListSerialize) || {}).tags || []

export default function reedee(state = { subscriptions, tags }, action) {
  switch (action.type) {
    case 'FETCH_SUBSCRIPTION_LIST':
      return {
        ...state,
        type: 'FETCH_SUBSCRIPTION_LIST'
      }
    default:
      return state
  }
}
