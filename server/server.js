
import Express from 'express'
import axios from 'axios'
import { auth, apiList } from '../config'
import { parse } from 'url'

const PORT = 3000
const app = new Express()
const { AppId,
  AppKey, tempToken } = auth
const instance = axios.create({
  baseURL: 'https://www.inoreader.com',
  timeout: 10000,
  headers: { 'Authorization': `Bearer ${tempToken}` }
})




app.use('*', (req, res, next) => {
  const params = req.params
  const urlParts = parse(req.url)
  const apiName = req.baseUrl.replace(/^\//, '')
  const target = apiList['prefix'] + apiList[apiName].api
  const query = urlParts.query ? `?${urlParts.query}` : ''
  instance.get(`${target}${query}`, {
    params: {
      AppId, AppKey
    }
  }).then(result => {
    return res.end(JSON.stringify(result.data))
  }).catch(err => {
    res.end(err)
  })
})

app.listen(PORT, () => {
  console.log(`back end server is listening at ${PORT}`)
})