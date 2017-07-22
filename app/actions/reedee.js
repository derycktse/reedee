import * as Config from '../../config'

export function fetchSubcriptionList() {
  return (dispatch) => {
    dispatch({
      type: 'FETCH_SUBSCRIPTION_LIST'
    })
  }
}


export function fetchDataCollection(names) {
  if (!Array.isArray(names)) throw Error('the param must be an array')

  const pmArr = names.map(name => {
    return fetchData(name)
  })
  return Promise.all(pmArr)
}

export function fetchData(name) {
  const apiList = Config.default.apiList
  const auth = Config.default.auth
  const url = `${Config.default.serverUrl}${apiList.prefix}${apiList[name].api}?AppId=${auth.AppId}&AppKey=${auth.AppKey}`
  const token = auth.tempToken
  return fetch(url, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  }).then(res => res.json()).catch(err => Promise.reject(err))
}

export function syncTagList() {
  return (dispatch) => {
    fetch('http://localhost:3000/tag-list').then(res => res.json()).then(data => {
      storeData('tag-list', data)
      // dispatch({
      //   type: 'UPDATE_TAG_LIST',
      //   payload: data.tags
      // })
    })
  }
}

export function syncSubscriptionList() {
  return (dispatch) => {
    fetch('http://localhost:3000/subscription-list').then(res => res.json()).then(data => {
      storeData('subscriptions', data)
      // dispatch({
      //   type: 'UPDATE_SUBSCRIPTION_LIST',
      //   payload: data.subscriptions
      // })
    })
  }
}

// export function fetchData(name) {
//   return fetch(`http://localhost:3000/${name}`).then(res => res.json())
// }

export function readLocalData(names) {
  return (dispatch) => {
    const items = (typeof names === 'string') ? [names] : names

    const obj = {}
    items.forEach(name => {
      // obj = {
      //   ...obj,
      //   ...(JSON.parse(localStorage.getItem(name)) || {})
      // }
      obj[name] = JSON.parse(localStorage.getItem(name)) || {}
    })
    dispatch({
      type: 'UPDATE_DATA',
      payload: obj
    })
  }
}

/**
 * 
 * @param {Object|Array} payload
 */
export function storeData(payload) {
  const payloads = typeof payload === 'object' && !Array.isArray(payload) ? [payload] : payload

  payloads.forEach(({ itemName, data }) => {
    try {
      window.localStorage.setItem(itemName, JSON.stringify(data))
      console.log(`write ${itemName} data done`)
      return true
    } catch (e) {
      throw e
    }
  })
}
