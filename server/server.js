import Koa from 'koa'
import axios from 'axios'
const app = new Koa()

app.use(ctx => {
  debugger
  let instance = axios.create({
    baseURL: 'https://www.inoreader.com/reader/api/0',
    timeout: 10000,
    headers: { 'Authorization': 'Bearer ' }
  })
  instance.get('user-info', {
    AppId: '',
    AppKey: ''
  }).then(res => {
    ctx.body = res.data.toString()
  }).catch(res => {
    ctx.body = res
  })
}).listen(3000)
