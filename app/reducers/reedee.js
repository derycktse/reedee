import { combineReducers } from 'redux';

function subscriptionList(state = getInitState('subscription-list'), type) {
  return state
}
function tagList(state = getInitState('tag-list'), type) {
  return state
}
function unreadCount(state = getInitState('unread-count'), type) {
  return state
}
function panelController(state = getInitState('subscription-panel-status-controller'), type) {
  return state
}
function streamContent(state = getInitState('stream/contents'), type) {
  return state
}

function getInitState(...names) {
  const obj = {}
  names.forEach(name => {
    obj[name] = JSON.parse(window.localStorage.getItem(name)) || {}
  })
  return obj
}

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
