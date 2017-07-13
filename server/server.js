
import Express from 'express'
import axios from 'axios'
import { auth } from '../config'

const PORT = 3000
const app = new Express()

let instance = axios.create({
  baseURL: 'https://www.inoreader.com/reader/api/0',
  timeout: 10000,
  headers: { 'Authorization': 'Bearer 1f0b6b50de7918589767a15f05c060f59cc8b2df' }
})

let AppId = auth.AppId,
  AppKey = auth.AppKey


app.use('*', (req, res, next) => {
  instance.get('subscription/list', {
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