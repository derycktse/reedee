
import Express from 'express'
import axios from 'axios'
import { auth } from '../config'
import { parse } from 'url'

const PORT = 3000
const app = new Express()

let instance = axios.create({
  baseURL: 'https://www.inoreader.com/reader/api/0',
  timeout: 10000,
  headers: { 'Authorization': 'Bearer 0ec4ee04d0816d421aa3737f25e601eac5dcbd54' }
})

let AppId = auth.AppId,
  AppKey = auth.AppKey


app.use('*', (req, res, next) => {
  let params = req.params
  let urlParts = parse(req.url)
  instance.get(`${req.baseUrl}?${urlParts.query || ''}`, {
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