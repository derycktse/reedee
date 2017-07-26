import * as Config from '../../config'
import { ipcRenderer } from 'electron'
import throttle from 'lodash/throttle'
let toFetchArray = []


ipcRenderer.on('store-auth-info', (event, authObj) => {
  console.log('saved')
  localStorage.setItem('auth-info', JSON.stringify(authObj))
  // clear toFetchArray 
  clearToFetch()

})


function serialize(obj) {
  let str = [];
  for (let p in obj)
    if (obj.hasOwnProperty(p)) {
      str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
    }
  return str.join("&");
}

function clearToFetch() {
  while (toFetchArray.length > 0) {
    const fun = toFetchArray.splice(0, 1)[0]
    if (typeof fun === 'function') {
      fun()
    }
  }
}

const refreshToken = throttle(sendRefreshDirection, 3000, { trailing: false })

function sendRefreshDirection() {
  console.log('request refresh')
  ipcRenderer.send('refresh-token')
}

function authValidate() {
  const authInfo = JSON.parse(localStorage.getItem('auth-info'))
  const tokenInfo = authInfo["token-info"]
  const time = Date.now() - authInfo['last-update']
  if (time > (tokenInfo['expires_in'] * 1000)) {
    return false
  }
  else {
    return true
  }
}

export function fetchSubcriptionList() {
  return (dispatch) => {
    dispatch({
      type: 'FETCH_SUBSCRIPTION_LIST'
    })
  }
}


export function fetchDataCollection(names) {
  if (!Array.isArray(names)) throw Error('the param must be an array')

  const pmArr = names.map(item => {
    if (typeof item === 'object') {
      return fetchData(item.name, item.params)
    } else {
      return fetchData(item)
    }
  })
  return Promise.all(pmArr)
}

export function fetchData(name, params = {}) {
  if (!authValidate()) {
    let resolver = null
    const pm = new Promise((resolve, reject) => {
      resolver = resolve
    }).then(() => {
      return fetchData(name)
    })
    toFetchArray.push(resolver)
    refreshToken()
    return pm
  }

  const authInfo = JSON.parse(localStorage.getItem('auth-info'))
  const tokenInfo = authInfo["token-info"]

  const queryString = '&' + serialize(params)

  const apiList = Config.default.apiList
  const auth = Config.default.auth
  const url = `${Config.default.serverUrl}${apiList.prefix}${apiList[name].api}?AppId=${auth.AppId}&AppKey=${auth.AppKey}`
  const token = tokenInfo.access_token
  return fetch(`${url}${queryString}`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  }).then(res => res.json()).catch(err => Promise.reject(err))
}

export function readLocalData(names) {
  return (dispatch) => {
    const items = (typeof names === 'string') ? [names] : names

    const obj = {}
    items.forEach(name => {
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
