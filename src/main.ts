import Express from 'express'
import { logger } from './config/logger'
import { router } from './routes'

const app = Express()

app.use('/v1', router)

app.listen(3000, () => {
  logger.info(`Listening to port ${3000}`)
})
