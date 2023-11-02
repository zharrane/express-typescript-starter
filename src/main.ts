import Express from 'express'
import { logger } from './config/logger'

const app = Express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/error', function (req, res) {
  throw new Error('Wow')
})

app.listen(3000, () => {
  logger.info(`Listening to port ${3000}`)
})
