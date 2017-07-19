export function fetchSubcriptionList() {
  return (dispatch) => {
    dispatch({
      type: 'FETCH_SUBSCRIPTION_LIST'
    })
  }
}


export function syncTagList() {
  return (dispatch) => {
    fetch('http://localhost:3000/tag-list').then(res => res.json()).then(data => {
      storeData('tag-list', data)
      dispatch({
        type: 'UPDATE_TAG_LIST',
        payload: data.tags
      })
    })
  }
}

export function syncSubscriptionList() {
  return (dispatch) => {
    fetch('http://localhost:3000/subscription-list').then(res => res.json()).then(data => {
      storeData('subscriptions', data)
      dispatch({
        type: 'UPDATE_SUBSCRIPTION_LIST',
        payload: data.subscriptions
      })
    })
  }
}

export function storeData(itemName, data) {
  try {
    window.localStorage.setItem(itemName, JSON.stringify(data))
    console.log('write data done')
  } catch (e) {
    throw e
  }
}
