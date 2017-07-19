
import Express from 'express'
import axios from 'axios'
import { auth, apiList } from '../config'
import { parse } from 'url'

const PORT = 3000
const app = new Express()

let instance = axios.create({
  baseURL: 'https://www.inoreader.com',
  timeout: 10000,
  headers: { 'Authorization': 'Bearer 031064d0951e16e38d3427ba72f51a78d4b30ba3' }
})

let AppId = auth.AppId,
  AppKey = auth.AppKey


app.use('*', (req, res, next) => {
  const params = req.params
  const urlParts = parse(req.url)
  const apiName = req.baseUrl.replace(/^\//, '')
  const target = apiList['prefix'] + apiList[apiName].api
  instance.get(`${target}?${urlParts.query || ''}`, {
    params: {
      AppId, AppKey, ...params
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