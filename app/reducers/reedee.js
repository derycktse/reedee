import { combineReducers } from 'redux';

const SUBSCRIPTION_LIST = 'subscription-list'
const TAG_LIST = 'tag-list'
const UNREAD_COUNT = 'unread-count'
const PAGE_CONTROLLER = 'subscription-panel-status-controller'
const STREAM_CONTENT = 'stream/contents'

function subscriptionList(state = getInitState('subscription-list'), action) {
  switch (action.type) {
    case 'UPDATE_DATA':
      return {
        ...action.payload[SUBSCRIPTION_LIST] || {}
      }
    default:
  }
  return state
}
function tagList(state = getInitState('tag-list'), action) {
  switch (action.type) {
    case 'UPDATE_DATA':
      return {
        ...action.payload[TAG_LIST] || {}
      }
    default:
  }
  return state
}
function unreadCount(state = getInitState('unread-count'), action) {
  switch (action.type) {
    case 'UPDATE_DATA':
      return {
        ...action.payload[UNREAD_COUNT] || {}
      }
    default:
  }
  return state
}
function panelController(state = getInitState('subscription-panel-status-controller'), action) {
  switch (action.type) {
    case 'UPDATE_DATA':
      return {
        ...action.payload[PAGE_CONTROLLER] || {}
      }
    case 'VIEW_FEED_CONTENT':
      return {
        ...state,
        activeFeedId: action.activeFeedId
      }
    default:
  }
  return state
}
function streamContent(state = getInitState('stream/contents'), action) {
  switch (action.type) {
    case 'UPDATE_DATA':
      return {
        ...action.payload[STREAM_CONTENT] || {}
      }
    default:
  }
  return state
}

function getInitState(name) {
  return JSON.parse(window.localStorage.getItem(name)) || {}
}
/*
const initList = ['subscription-list', 'tag-list', 'unread-count', 'subscription-panel-status-controller', 'stream/contents']


const initState = getInitState(...initList)
console.log('init state:')
console.log(initState)
export default function reedee(state = initState, action) {
  switch (action.type) {
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
*/

export default combineReducers({
  [SUBSCRIPTION_LIST]: subscriptionList,
  [TAG_LIST]: tagList,
  [UNREAD_COUNT]: unreadCount,
  [PAGE_CONTROLLER]: panelController,
  [STREAM_CONTENT]: streamContent
})
